const PROJECT_ENDPOINT = 'https://veloracss.spiritbocs.workers.dev/github/project';
const HEALTH_ENDPOINT = 'https://veloracss.spiritbocs.workers.dev/health';
const STATUS_FILTERS = ['all', 'todo', 'in_progress', 'done'];

const state = {
  selectedStatus: 'all',
  selectedItemId: null,
  projectView: null,
  healthView: null,
  projectError: '',
  healthError: '',
  isRefreshing: false,
  isLoadingProject: true,
  isLoadingHealth: true
};

const elements = {
  githubLink: document.getElementById('tracker-github-link'),
  refreshButton: document.getElementById('tracker-refresh'),
  healthGrid: document.getElementById('tracker-health-grid'),
  projectAlert: document.getElementById('tracker-project-alert'),
  projectAlertCopy: document.getElementById('tracker-project-alert-copy'),
  projectTitle: document.getElementById('tracker-project-title'),
  visibleCount: document.getElementById('tracker-visible-count'),
  totalCount: document.getElementById('tracker-total-count'),
  filterSummary: document.getElementById('tracker-filter-summary'),
  runtimeLink: document.getElementById('tracker-runtime-link'),
  boardGrid: document.getElementById('tracker-board-grid'),
  itemsGrid: document.getElementById('tracker-items-grid'),
  detailPanel: document.getElementById('tracker-detail-panel'),
  filterRow: document.getElementById('tracker-filter-row'),
  todoCount: document.querySelector('[data-count="todo"]'),
  inProgressCount: document.querySelector('[data-count="in-progress"]'),
  doneCount: document.querySelector('[data-count="done"]')
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatStatusLabel(status) {
  switch (status) {
    case 'todo':
      return 'Todo';
    case 'in_progress':
      return 'In progress';
    case 'done':
      return 'Done';
    default:
      return 'All items';
  }
}

function formatDate(value) {
  if (!value) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(`${value}T00:00:00`));
  } catch {
    return value;
  }
}

function summarizeCommands(commands) {
  return Array.isArray(commands) && commands.length > 0 ? commands.join(' · ') : 'Unavailable';
}

function getItemMeta(item) {
  const parts = [];

  if (item.priority) {
    parts.push({ label: item.priority, kind: 'priority' });
  }

  if (item.driver) {
    parts.push({ label: item.driver, kind: 'default' });
  }

  if (item.targetDate) {
    parts.push({ label: formatDate(item.targetDate), kind: 'default' });
  } else if (item.iteration) {
    parts.push({ label: item.iteration, kind: 'default' });
  }

  if (item.size) {
    parts.push({ label: item.size, kind: 'default' });
  }

  return parts;
}

function getVisibleItems() {
  return state.projectView?.items ?? [];
}

function getSelectedItem() {
  return getVisibleItems().find((item) => item.id === state.selectedItemId) ?? null;
}

function ensureSelectedItem() {
  const visibleItems = getVisibleItems();

  if (visibleItems.length === 0) {
    state.selectedItemId = null;
    return;
  }

  if (!visibleItems.some((item) => item.id === state.selectedItemId)) {
    state.selectedItemId = visibleItems[0].id;
  }
}

function createBadge(meta) {
  return `<span class="tracker-badge${meta.kind === 'priority' ? ' tracker-badge-priority' : ''}">${escapeHtml(meta.label)}</span>`;
}

function renderBoardGrid() {
  const lanes = state.projectView?.lanes ?? [];

  if (lanes.length === 0) {
    elements.boardGrid.innerHTML = '<article class="tracker-lane"><p class="tracker-empty-copy">Board lanes will appear here once the live project feed responds.</p></article>';
    return;
  }

  elements.boardGrid.innerHTML = lanes.map((lane) => {
    const laneCards = lane.items.map((item) => {
      const title = escapeHtml(item.title);
      const metaHtml = getItemMeta(item).map(createBadge).join('');
      const linkHtml = item.url
        ? `<a class="tracker-lane-card-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${title}</a>`
        : title;

      return `
        <div class="tracker-lane-card">
          <h4 class="tracker-lane-card-title">${linkHtml}</h4>
          <div class="tracker-lane-card-meta">${metaHtml}</div>
        </div>
      `;
    }).join('');

    const moreHtml = lane.count > lane.items.length
      ? `<p class="tracker-summary-copy">+${lane.count - lane.items.length} more in ${escapeHtml(lane.label.toLowerCase())}</p>`
      : '';

    return `
      <article class="tracker-lane">
        <div class="tracker-lane-head">
          <h3 class="tracker-lane-title">${escapeHtml(lane.label)}</h3>
          <span class="tracker-lane-count">${lane.count}</span>
        </div>
        <div class="tracker-lane-cards">${laneCards}${moreHtml}</div>
      </article>
    `;
  }).join('');
}

function renderItemsGrid() {
  const visibleItems = getVisibleItems();

  if (state.isLoadingProject) {
    elements.itemsGrid.innerHTML = [1, 2, 3, 4]
      .map(() => '<div class="tracker-skeleton"></div>')
      .join('');
    return;
  }

  if (visibleItems.length === 0) {
    elements.itemsGrid.innerHTML = `<div class="tracker-empty"><p class="tracker-empty-copy">No cards matched the ${escapeHtml(formatStatusLabel(state.selectedStatus).toLowerCase())} filter.</p></div>`;
    return;
  }

  elements.itemsGrid.innerHTML = visibleItems.map((item) => {
    const metaHtml = getItemMeta(item).map(createBadge).join('');
    const notes = escapeHtml(item.notes ?? 'No notes attached to this item yet.');
    const isActive = item.id === state.selectedItemId ? ' tracker-item-card-active' : '';

    return `
      <button class="tracker-item-card${isActive}" type="button" data-item-id="${escapeHtml(item.id)}">
        <span class="tracker-item-card-status">${escapeHtml(item.status ?? 'Unsorted')}</span>
        <h3 class="tracker-item-card-title">${escapeHtml(item.title)}</h3>
        <div class="tracker-item-card-meta">${metaHtml}</div>
        <p class="tracker-item-card-notes">${notes}</p>
      </button>
    `;
  }).join('');
}

function renderDetailPanel() {
  const selectedItem = getSelectedItem();

  if (!selectedItem) {
    elements.detailPanel.innerHTML = '<div class="tracker-empty"><p class="tracker-empty-copy">Select a card from the current slice to inspect its details here.</p></div>';
    return;
  }

  const metaHtml = getItemMeta(selectedItem).map(createBadge).join('');
  const notes = escapeHtml(
    selectedItem.notes ?? 'This project card does not have notes yet. Use Discord or GitHub to add more operating context.'
  ).replaceAll('\n', '<br />');
  const linkHtml = selectedItem.url
    ? `<a class="tracker-detail-link" href="${escapeHtml(selectedItem.url)}" target="_blank" rel="noreferrer">Open linked GitHub item</a>`
    : '';

  elements.detailPanel.innerHTML = `
    <div class="tracker-detail-head">
      <span class="tracker-detail-status">${escapeHtml(selectedItem.status ?? 'Unsorted')}</span>
      <h2 class="tracker-detail-title">${escapeHtml(selectedItem.title)}</h2>
      <div class="tracker-detail-meta">${metaHtml}</div>
    </div>
    <p class="tracker-detail-notes">${notes}</p>
    ${linkHtml}
  `;
}

function renderHealthGrid() {
  if (state.isLoadingHealth) {
    elements.healthGrid.innerHTML = '<div class="tracker-skeleton"></div>';
    return;
  }

  if (state.healthError) {
    elements.healthGrid.innerHTML = `<p class="tracker-alert-copy">${escapeHtml(state.healthError)}</p>`;
    return;
  }

  const healthView = state.healthView ?? {};
  const config = healthView.config ?? {};
  const healthState = healthView.state ?? {};
  const serviceReady = Boolean(config.githubProjectReadReady && config.discordApplicationId);

  elements.runtimeLink.textContent = serviceReady ? 'Linked' : 'Needs attention';
  elements.healthGrid.innerHTML = `
    <div class="tracker-health-row">
      <span class="tracker-health-label">Service</span>
      <span class="tracker-health-value">${serviceReady ? 'Ready' : 'Degraded'}</span>
    </div>
    <div class="tracker-health-row">
      <span class="tracker-health-label">Commands</span>
      <span class="tracker-health-value">${escapeHtml(summarizeCommands(healthView.commands))}</span>
    </div>
    <div class="tracker-health-row">
      <span class="tracker-health-label">Storage</span>
      <span class="tracker-health-value">${escapeHtml(config.storageMode ?? 'Unknown')}</span>
    </div>
    <div class="tracker-health-row">
      <span class="tracker-health-label">Tracked items</span>
      <span class="tracker-health-value">${healthState.mappingCount ?? 0}</span>
    </div>
  `;
}

function renderSummary() {
  const projectView = state.projectView;
  const statusCounts = projectView?.statusCounts ?? { Todo: 0, 'In progress': 0, Done: 0 };

  elements.projectTitle.textContent = projectView?.title ?? 'VeloraCSS Team Planning';
  elements.visibleCount.textContent = String(projectView?.matchingCount ?? 0);
  elements.totalCount.textContent = String(projectView?.totalCount ?? 0);
  elements.filterSummary.textContent = `Current filter: ${formatStatusLabel(state.selectedStatus)}.`;
  elements.todoCount.textContent = String(statusCounts.Todo ?? 0);
  elements.inProgressCount.textContent = String(statusCounts['In progress'] ?? 0);
  elements.doneCount.textContent = String(statusCounts.Done ?? 0);

  if (projectView?.url) {
    elements.githubLink.href = projectView.url;
  }
}

function renderAlerts() {
  if (state.projectError) {
    elements.projectAlert.hidden = false;
    elements.projectAlertCopy.textContent = state.projectError;
  } else {
    elements.projectAlert.hidden = true;
    elements.projectAlertCopy.textContent = '';
  }
}

function renderFilterButtons() {
  const buttons = elements.filterRow.querySelectorAll('[data-status-filter]');

  buttons.forEach((button) => {
    const isActive = button.dataset.statusFilter === state.selectedStatus;
    button.classList.toggle('tracker-filter-button-active', isActive);
  });
}

function render() {
  ensureSelectedItem();
  renderSummary();
  renderAlerts();
  renderFilterButtons();
  renderHealthGrid();
  renderBoardGrid();
  renderItemsGrid();
  renderDetailPanel();
  elements.refreshButton.textContent = state.isRefreshing ? 'Refreshing...' : 'Refresh data';
  elements.refreshButton.disabled = state.isRefreshing;
}

async function loadProject(status) {
  state.isLoadingProject = true;
  state.projectError = '';
  render();

  try {
    const response = await fetch(`${PROJECT_ENDPOINT}?status=${status}&limit=24`);

    if (!response.ok) {
      throw new Error(`Project feed returned ${response.status}.`);
    }

    state.projectView = await response.json();
  } catch (error) {
    state.projectError = error.message;
    state.projectView = null;
  } finally {
    state.isLoadingProject = false;
    render();
  }
}

async function loadHealth() {
  state.isLoadingHealth = true;
  state.healthError = '';
  render();

  try {
    const response = await fetch(HEALTH_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Health check returned ${response.status}.`);
    }

    state.healthView = await response.json();
  } catch (error) {
    state.healthError = error.message;
    state.healthView = null;
    elements.runtimeLink.textContent = 'Needs attention';
  } finally {
    state.isLoadingHealth = false;
    render();
  }
}

async function refreshAll() {
  state.isRefreshing = true;
  render();
  await Promise.all([loadProject(state.selectedStatus), loadHealth()]);
  state.isRefreshing = false;
  render();
}

elements.refreshButton.addEventListener('click', () => {
  refreshAll();
});

elements.filterRow.addEventListener('click', (event) => {
  const button = event.target.closest('[data-status-filter]');

  if (!button) {
    return;
  }

  const { statusFilter } = button.dataset;

  if (!STATUS_FILTERS.includes(statusFilter) || statusFilter === state.selectedStatus) {
    return;
  }

  state.selectedStatus = statusFilter;
  state.selectedItemId = null;
  loadProject(statusFilter);
});

elements.itemsGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-item-id]');

  if (!button) {
    return;
  }

  state.selectedItemId = button.dataset.itemId;
  renderItemsGrid();
  renderDetailPanel();
});

render();
refreshAll();
