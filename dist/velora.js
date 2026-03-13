// src/velora.js
var initializedRoots = /* @__PURE__ */ new WeakMap();
var veloraPlugins = Object.freeze(["legacy-disclosure", "dropdown", "collapse", "modal", "tabs", "toast", "tooltip", "offcanvas"]);
function getOwnerDocument(root) {
  return root?.ownerDocument ?? root ?? document;
}
function queryAll(root, selector) {
  return Array.from(root.querySelectorAll(selector));
}
function containsNode(root, node) {
  if (!node) {
    return false;
  }
  const documentRoot = getOwnerDocument(root);
  if (root === documentRoot) {
    return documentRoot.documentElement.contains(node);
  }
  return root.contains(node);
}
function closestWithin(root, target, selector) {
  const candidate = target?.closest?.(selector);
  return candidate && containsNode(root, candidate) ? candidate : null;
}
function escapeSelectorValue(value) {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  return value.replace(/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "\\$&");
}
function resolveTarget(root, value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const normalized = value.trim();
  if (!normalized) {
    return null;
  }
  const ownerDocument = getOwnerDocument(root);
  const id = normalized.startsWith("#") ? normalized.slice(1) : normalized;
  const byId = ownerDocument.getElementById(id);
  if (byId) {
    return byId;
  }
  if (/^[#.\[]/.test(normalized)) {
    return ownerDocument.querySelector(normalized);
  }
  return null;
}
function resolveTriggerTarget(root, trigger, attributeName) {
  return resolveTarget(root, trigger.getAttribute(attributeName));
}
function isHidden(target) {
  return target.hasAttribute("hidden");
}
function setHidden(target, hidden) {
  target.toggleAttribute("hidden", hidden);
  target.setAttribute("aria-hidden", String(hidden));
}
function showTarget(target) {
  setHidden(target, false);
}
function hideTarget(target) {
  setHidden(target, true);
}
function isDropdownTarget(target) {
  return target?.classList?.contains("vel-dropdown-menu") === true;
}
function isModalTarget(target) {
  return target?.classList?.contains("vel-modal") === true;
}
function isToastTarget(target) {
  return target?.classList?.contains("vel-toast-stack") === true;
}
function isTooltipTarget(target) {
  return target?.classList?.contains("vel-tooltip") === true;
}
function isOffcanvasTarget(target) {
  return target?.classList?.contains("vel-offcanvas") === true;
}
function isCollapseTarget(target) {
  return target?.classList?.contains("vel-collapse") === true || target?.hasAttribute("data-vel-collapse-panel") === true;
}
function getTargetId(target) {
  return target?.id?.trim() || null;
}
function syncExpandedState(root, target, expanded) {
  const targetId = getTargetId(target);
  if (!targetId) {
    return;
  }
  const escapedId = escapeSelectorValue(targetId);
  const selectors = [
    `[data-vel-toggle="${escapedId}"]`,
    `[data-vel-open="${escapedId}"]`,
    `[data-vel-dropdown="${escapedId}"]`,
    `[data-vel-modal-open="${escapedId}"]`,
    `[data-vel-offcanvas-open="${escapedId}"]`,
    `[data-vel-collapse="${escapedId}"]`,
    `[data-vel-toast="${escapedId}"]`,
    `[data-vel-toggle="#${escapedId}"]`,
    `[data-vel-open="#${escapedId}"]`,
    `[data-vel-dropdown="#${escapedId}"]`,
    `[data-vel-modal-open="#${escapedId}"]`,
    `[data-vel-offcanvas-open="#${escapedId}"]`,
    `[data-vel-collapse="#${escapedId}"]`,
    `[data-vel-toast="#${escapedId}"]`
  ];
  queryAll(root, selectors.join(", ")).forEach((trigger) => {
    trigger.setAttribute("aria-expanded", String(expanded));
  });
}
function showWithState(root, target) {
  showTarget(target);
  syncExpandedState(root, target, true);
}
function hideWithState(root, target) {
  hideTarget(target);
  syncExpandedState(root, target, false);
}
function toggleWithState(root, target) {
  if (isHidden(target)) {
    showWithState(root, target);
    return true;
  }
  hideWithState(root, target);
  return false;
}
function getFocusableElements(container) {
  return queryAll(
    container,
    "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
  ).filter((element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true");
}
function focusSurface(target, selector) {
  const panel = target.querySelector(selector) ?? target;
  const focusable = getFocusableElements(panel)[0] ?? panel;
  if (!focusable.hasAttribute("tabindex")) {
    focusable.setAttribute("tabindex", "-1");
  }
  focusable.focus();
}
function focusModalDialog(target) {
  focusSurface(target, ".vel-modal-dialog, [role='dialog']");
}
function focusOffcanvasPanel(target) {
  focusSurface(target, ".vel-offcanvas-panel, [role='dialog']");
}
function createController(root, enabledPlugins) {
  const ownerDocument = getOwnerDocument(root);
  const modalReturnFocus = /* @__PURE__ */ new WeakMap();
  const offcanvasReturnFocus = /* @__PURE__ */ new WeakMap();
  const ownerWindow = ownerDocument.defaultView ?? window;
  const offcanvasPlacements = ["start", "end", "top", "bottom"];
  function pluginEnabled(name) {
    return enabledPlugins.has(name);
  }
  function getVisible(selector) {
    return queryAll(root, `${selector}:not([hidden])`);
  }
  function closeOpenDropdowns(exceptTarget = null) {
    if (!pluginEnabled("dropdown")) {
      return;
    }
    getVisible(".vel-dropdown-menu").forEach((target) => {
      if (target !== exceptTarget) {
        hideWithState(root, target);
      }
    });
  }
  function closeOpenTooltips(exceptTarget = null) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    getVisible(".vel-tooltip").forEach((target) => {
      if (target !== exceptTarget) {
        hideTooltip(target);
      }
    });
  }
  function closeOpenOffcanvas(exceptTarget = null) {
    if (!pluginEnabled("offcanvas")) {
      return;
    }
    getVisible(".vel-offcanvas").forEach((target) => {
      if (target !== exceptTarget) {
        closeOffcanvas(target);
      }
    });
  }
  function syncTooltipReferences() {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    queryAll(root, "[data-vel-tooltip]").forEach((trigger) => {
      const target = resolveTriggerTarget(root, trigger, "data-vel-tooltip");
      if (!isTooltipTarget(target) || !target.id) {
        return;
      }
      trigger.setAttribute("aria-describedby", target.id);
      target.setAttribute("role", "tooltip");
    });
  }
  function resolveTooltipPlacement(trigger, target) {
    return trigger.getAttribute("data-vel-tooltip-placement") || target.getAttribute("data-vel-tooltip-placement") || target.dataset.velPlacement || "top";
  }
  function positionTooltip(trigger, target) {
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = target.getBoundingClientRect();
    const placement = resolveTooltipPlacement(trigger, target);
    const offset = 10;
    const edgePadding = 8;
    let top = triggerRect.top - tooltipRect.height - offset;
    let left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
    if (placement === "bottom") {
      top = triggerRect.bottom + offset;
    } else if (placement === "start") {
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left - tooltipRect.width - offset;
    } else if (placement === "end") {
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + offset;
    }
    const maxLeft = ownerWindow.innerWidth - tooltipRect.width - edgePadding;
    const maxTop = ownerWindow.innerHeight - tooltipRect.height - edgePadding;
    left = Math.min(Math.max(edgePadding, left), Math.max(edgePadding, maxLeft));
    top = Math.min(Math.max(edgePadding, top), Math.max(edgePadding, maxTop));
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.dataset.velPlacement = placement;
  }
  function showTooltipForTrigger(trigger) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const target = resolveTriggerTarget(root, trigger, "data-vel-tooltip");
    if (!isTooltipTarget(target)) {
      return;
    }
    closeOpenTooltips(target);
    showTarget(target);
    target.style.visibility = "hidden";
    positionTooltip(trigger, target);
    target.style.visibility = "";
  }
  function hideTooltip(target) {
    if (!pluginEnabled("tooltip") || !target) {
      return;
    }
    target.style.left = "";
    target.style.top = "";
    target.style.visibility = "";
    hideTarget(target);
  }
  function handleTooltipEnter(trigger) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    showTooltipForTrigger(trigger);
  }
  function handleTooltipLeave(trigger) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const target = resolveTriggerTarget(root, trigger, "data-vel-tooltip");
    if (isTooltipTarget(target)) {
      hideTooltip(target);
    }
  }
  function resolveOffcanvasPlacement(trigger, target) {
    const placement = trigger?.getAttribute("data-vel-offcanvas-placement") || target.getAttribute("data-vel-offcanvas-placement") || target.dataset.velPlacement || offcanvasPlacements.find((candidate) => target.classList.contains(`vel-offcanvas-${candidate}`)) || "end";
    return offcanvasPlacements.includes(placement) ? placement : "end";
  }
  function applyOffcanvasPlacement(trigger, target) {
    const placement = resolveOffcanvasPlacement(trigger, target);
    offcanvasPlacements.forEach((candidate) => {
      target.classList.toggle(`vel-offcanvas-${candidate}`, candidate === placement);
    });
    target.dataset.velPlacement = placement;
    return placement;
  }
  function syncBlockingOverlayEnvironment() {
    if (root !== ownerDocument) {
      return;
    }
    const modalCount = pluginEnabled("modal") ? getVisible(".vel-modal").length : 0;
    const offcanvasCount = pluginEnabled("offcanvas") ? getVisible(".vel-offcanvas").length : 0;
    ownerDocument.body.style.overflow = modalCount + offcanvasCount > 0 ? "hidden" : "";
  }
  function openModal(target, trigger = null) {
    if (!target || !pluginEnabled("modal")) {
      return;
    }
    modalReturnFocus.set(target, trigger ?? ownerDocument.activeElement ?? null);
    showWithState(root, target);
    syncBlockingOverlayEnvironment();
    focusModalDialog(target);
  }
  function closeModal(target) {
    if (!target || !pluginEnabled("modal")) {
      return;
    }
    hideWithState(root, target);
    syncBlockingOverlayEnvironment();
    const returnFocusTarget = modalReturnFocus.get(target);
    if (returnFocusTarget?.focus) {
      returnFocusTarget.focus();
    }
  }
  function openOffcanvas(target, trigger = null) {
    if (!target || !pluginEnabled("offcanvas")) {
      return;
    }
    offcanvasReturnFocus.set(target, trigger ?? ownerDocument.activeElement ?? null);
    applyOffcanvasPlacement(trigger, target);
    closeOpenTooltips();
    closeOpenDropdowns();
    closeOpenOffcanvas(target);
    showWithState(root, target);
    syncBlockingOverlayEnvironment();
    focusOffcanvasPanel(target);
  }
  function closeOffcanvas(target) {
    if (!target || !pluginEnabled("offcanvas")) {
      return;
    }
    hideWithState(root, target);
    syncBlockingOverlayEnvironment();
    const returnFocusTarget = offcanvasReturnFocus.get(target);
    if (returnFocusTarget?.focus) {
      returnFocusTarget.focus();
    }
  }
  function toggleOffcanvas(target, trigger = null) {
    if (!target || !pluginEnabled("offcanvas")) {
      return;
    }
    if (isHidden(target)) {
      openOffcanvas(target, trigger);
      return;
    }
    closeOffcanvas(target);
  }
  function toggleDropdown(target) {
    if (!target || !pluginEnabled("dropdown")) {
      return;
    }
    const shouldOpen = isHidden(target);
    closeOpenDropdowns(shouldOpen ? target : null);
    if (shouldOpen) {
      showWithState(root, target);
      return;
    }
    hideWithState(root, target);
  }
  function toggleCollapse(target) {
    if (!target || !pluginEnabled("collapse")) {
      return;
    }
    toggleWithState(root, target);
  }
  function toggleToast(target) {
    if (!target || !pluginEnabled("toast")) {
      return;
    }
    toggleWithState(root, target);
  }
  function closeToast(target) {
    if (!target || !pluginEnabled("toast")) {
      return;
    }
    hideWithState(root, target);
  }
  function getTabGroup(trigger) {
    return trigger.closest(".vel-tabs");
  }
  function getTabs(group) {
    return queryAll(group, "[data-vel-tab], .vel-tab, [role='tab']").filter((tab) => containsNode(group, tab));
  }
  function getTabPanels(group) {
    return queryAll(group, "[data-vel-tab-panel], .vel-tab-panel, [role='tabpanel']").filter((panel) => containsNode(group, panel));
  }
  function resolveTabPanel(group, trigger, index) {
    const explicitTarget = trigger.getAttribute("data-vel-tab") || trigger.getAttribute("aria-controls");
    if (explicitTarget) {
      return resolveTarget(group, explicitTarget);
    }
    return getTabPanels(group)[index] ?? null;
  }
  function activateTab(group, trigger, shouldFocus = false) {
    if (!group || !pluginEnabled("tabs")) {
      return;
    }
    const tabs = getTabs(group);
    const index = tabs.indexOf(trigger);
    if (index === -1) {
      return;
    }
    const panelMap = tabs.map((tab, tabIndex) => resolveTabPanel(group, tab, tabIndex));
    const hasPanels = panelMap.some(Boolean);
    tabs.forEach((tab, tabIndex) => {
      const isActive = tab === trigger;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    if (hasPanels) {
      panelMap.forEach((panel, panelIndex) => {
        if (!panel) {
          return;
        }
        const isActive = panelIndex === index;
        panel.toggleAttribute("hidden", !isActive);
        panel.setAttribute("aria-hidden", String(!isActive));
      });
    }
    if (shouldFocus) {
      trigger.focus();
    }
  }
  function syncTabs() {
    if (!pluginEnabled("tabs")) {
      return;
    }
    queryAll(root, ".vel-tabs").forEach((group) => {
      const tabs = getTabs(group);
      if (tabs.length === 0) {
        return;
      }
      const activeTab = tabs.find((tab) => tab.getAttribute("aria-selected") === "true" || tab.classList.contains("is-active")) ?? tabs[0];
      activateTab(group, activeTab, false);
    });
  }
  function syncLegacyState() {
    queryAll(root, "[data-vel-toggle], [data-vel-open], [data-vel-dropdown], [data-vel-modal-open], [data-vel-offcanvas-open], [data-vel-collapse], [data-vel-toast]").forEach((trigger) => {
      const attributeName = [
        "data-vel-dropdown",
        "data-vel-modal-open",
        "data-vel-offcanvas-open",
        "data-vel-collapse",
        "data-vel-toast",
        "data-vel-open",
        "data-vel-toggle"
      ].find((name) => trigger.hasAttribute(name));
      if (!attributeName) {
        return;
      }
      const target = resolveTriggerTarget(root, trigger, attributeName);
      if (target) {
        syncExpandedState(root, target, !isHidden(target));
      }
    });
    syncTabs();
    syncTooltipReferences();
    syncBlockingOverlayEnvironment();
  }
  function handleMouseOver(event) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const trigger = closestWithin(root, event.target, "[data-vel-tooltip]");
    if (!trigger || trigger.contains(event.relatedTarget)) {
      return;
    }
    handleTooltipEnter(trigger);
  }
  function handleMouseOut(event) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const trigger = closestWithin(root, event.target, "[data-vel-tooltip]");
    if (!trigger || trigger.contains(event.relatedTarget)) {
      return;
    }
    handleTooltipLeave(trigger);
  }
  function handleFocusIn(event) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const trigger = closestWithin(root, event.target, "[data-vel-tooltip]");
    if (!trigger) {
      return;
    }
    handleTooltipEnter(trigger);
  }
  function handleFocusOut(event) {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    const trigger = closestWithin(root, event.target, "[data-vel-tooltip]");
    if (!trigger || trigger.contains(event.relatedTarget)) {
      return;
    }
    handleTooltipLeave(trigger);
  }
  function handleViewportChange() {
    if (!pluginEnabled("tooltip")) {
      return;
    }
    closeOpenTooltips();
  }
  function handleTabKeydown(event) {
    if (!pluginEnabled("tabs")) {
      return false;
    }
    const trigger = closestWithin(root, event.target, "[data-vel-tab], .vel-tab, [role='tab']");
    if (!trigger) {
      return false;
    }
    const group = getTabGroup(trigger);
    if (!group) {
      return false;
    }
    const tabs = getTabs(group);
    const currentIndex = tabs.indexOf(trigger);
    if (currentIndex === -1) {
      return false;
    }
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return false;
    }
    event.preventDefault();
    activateTab(group, tabs[nextIndex], true);
    return true;
  }
  function handleKeydown(event) {
    if (handleTabKeydown(event)) {
      return;
    }
    if (event.key !== "Escape") {
      return;
    }
    const openModals = pluginEnabled("modal") ? getVisible(".vel-modal") : [];
    if (openModals.length > 0) {
      closeModal(openModals[openModals.length - 1]);
      return;
    }
    const openOffcanvas2 = pluginEnabled("offcanvas") ? getVisible(".vel-offcanvas") : [];
    if (openOffcanvas2.length > 0) {
      closeOffcanvas(openOffcanvas2[openOffcanvas2.length - 1]);
      return;
    }
    if (pluginEnabled("dropdown")) {
      closeOpenDropdowns();
    }
    if (pluginEnabled("toast")) {
      getVisible(".vel-toast-stack").forEach(closeToast);
    }
    if (pluginEnabled("tooltip")) {
      closeOpenTooltips();
    }
  }
  function resolveOffcanvasCloseTarget(trigger) {
    return resolveTriggerTarget(root, trigger, "data-vel-offcanvas-close") ?? closestWithin(root, trigger, ".vel-offcanvas");
  }
  function handleClick(event) {
    const modalOpenTrigger = closestWithin(root, event.target, "[data-vel-modal-open]");
    if (modalOpenTrigger && pluginEnabled("modal")) {
      event.preventDefault();
      openModal(resolveTriggerTarget(root, modalOpenTrigger, "data-vel-modal-open"), modalOpenTrigger);
      return;
    }
    const modalCloseTrigger = closestWithin(root, event.target, "[data-vel-modal-close]");
    if (modalCloseTrigger && pluginEnabled("modal")) {
      event.preventDefault();
      closeModal(resolveTriggerTarget(root, modalCloseTrigger, "data-vel-modal-close"));
      return;
    }
    const offcanvasOpenTrigger = closestWithin(root, event.target, "[data-vel-offcanvas-open]");
    if (offcanvasOpenTrigger && pluginEnabled("offcanvas")) {
      event.preventDefault();
      openOffcanvas(resolveTriggerTarget(root, offcanvasOpenTrigger, "data-vel-offcanvas-open"), offcanvasOpenTrigger);
      return;
    }
    const offcanvasCloseTrigger = closestWithin(root, event.target, "[data-vel-offcanvas-close]");
    if (offcanvasCloseTrigger && pluginEnabled("offcanvas")) {
      event.preventDefault();
      closeOffcanvas(resolveOffcanvasCloseTarget(offcanvasCloseTrigger));
      return;
    }
    const dropdownTrigger = closestWithin(root, event.target, "[data-vel-dropdown]");
    if (dropdownTrigger && pluginEnabled("dropdown")) {
      event.preventDefault();
      toggleDropdown(resolveTriggerTarget(root, dropdownTrigger, "data-vel-dropdown"));
      return;
    }
    const collapseTrigger = closestWithin(root, event.target, "[data-vel-collapse]");
    if (collapseTrigger && pluginEnabled("collapse")) {
      event.preventDefault();
      toggleCollapse(resolveTriggerTarget(root, collapseTrigger, "data-vel-collapse"));
      return;
    }
    const toastTrigger = closestWithin(root, event.target, "[data-vel-toast]");
    if (toastTrigger && pluginEnabled("toast")) {
      event.preventDefault();
      toggleToast(resolveTriggerTarget(root, toastTrigger, "data-vel-toast"));
      return;
    }
    const toastCloseTrigger = closestWithin(root, event.target, "[data-vel-toast-close]");
    if (toastCloseTrigger && pluginEnabled("toast")) {
      event.preventDefault();
      closeToast(resolveTriggerTarget(root, toastCloseTrigger, "data-vel-toast-close"));
      return;
    }
    const tabTrigger = closestWithin(root, event.target, "[data-vel-tab], .vel-tab, [role='tab']");
    if (tabTrigger && pluginEnabled("tabs")) {
      const group = getTabGroup(tabTrigger);
      if (group) {
        event.preventDefault();
        activateTab(group, tabTrigger, false);
        return;
      }
    }
    const legacyOpenTrigger = closestWithin(root, event.target, "[data-vel-open]");
    if (legacyOpenTrigger && pluginEnabled("legacy-disclosure")) {
      event.preventDefault();
      const target = resolveTriggerTarget(root, legacyOpenTrigger, "data-vel-open");
      if (isModalTarget(target) && pluginEnabled("modal")) {
        openModal(target, legacyOpenTrigger);
        return;
      }
      if (isOffcanvasTarget(target) && pluginEnabled("offcanvas")) {
        openOffcanvas(target, legacyOpenTrigger);
        return;
      }
      if (target) {
        showWithState(root, target);
      }
      return;
    }
    const legacyCloseTrigger = closestWithin(root, event.target, "[data-vel-close]");
    if (legacyCloseTrigger && pluginEnabled("legacy-disclosure")) {
      event.preventDefault();
      const target = resolveTriggerTarget(root, legacyCloseTrigger, "data-vel-close");
      if (isModalTarget(target) && pluginEnabled("modal")) {
        closeModal(target);
        return;
      }
      if (isToastTarget(target) && pluginEnabled("toast")) {
        closeToast(target);
        return;
      }
      if (isOffcanvasTarget(target) && pluginEnabled("offcanvas")) {
        closeOffcanvas(target);
        return;
      }
      if (target) {
        hideWithState(root, target);
      }
      return;
    }
    const legacyToggleTrigger = closestWithin(root, event.target, "[data-vel-toggle]");
    if (legacyToggleTrigger && pluginEnabled("legacy-disclosure")) {
      event.preventDefault();
      const target = resolveTriggerTarget(root, legacyToggleTrigger, "data-vel-toggle");
      if (isDropdownTarget(target) && pluginEnabled("dropdown")) {
        toggleDropdown(target);
        return;
      }
      if (isToastTarget(target) && pluginEnabled("toast")) {
        toggleToast(target);
        return;
      }
      if (isCollapseTarget(target) && pluginEnabled("collapse")) {
        toggleCollapse(target);
        return;
      }
      if (isOffcanvasTarget(target) && pluginEnabled("offcanvas")) {
        toggleOffcanvas(target, legacyToggleTrigger);
        return;
      }
      if (target) {
        toggleWithState(root, target);
      }
      return;
    }
    if (pluginEnabled("dropdown")) {
      const clickedInsideDropdown = closestWithin(root, event.target, ".vel-dropdown") || closestWithin(root, event.target, ".vel-dropdown-menu");
      if (!clickedInsideDropdown) {
        closeOpenDropdowns();
      }
    }
  }
  function resolveRuntimeTarget(targetOrSelector) {
    if (!targetOrSelector) {
      return null;
    }
    return typeof targetOrSelector === "string" ? resolveTarget(root, targetOrSelector) : targetOrSelector;
  }
  function init() {
    root.addEventListener("click", handleClick);
    root.addEventListener("keydown", handleKeydown);
    root.addEventListener("mouseover", handleMouseOver);
    root.addEventListener("mouseout", handleMouseOut);
    root.addEventListener("focusin", handleFocusIn);
    root.addEventListener("focusout", handleFocusOut);
    ownerWindow.addEventListener("resize", handleViewportChange);
    ownerDocument.addEventListener("scroll", handleViewportChange, true);
    syncLegacyState();
  }
  function destroy() {
    root.removeEventListener("click", handleClick);
    root.removeEventListener("keydown", handleKeydown);
    root.removeEventListener("mouseover", handleMouseOver);
    root.removeEventListener("mouseout", handleMouseOut);
    root.removeEventListener("focusin", handleFocusIn);
    root.removeEventListener("focusout", handleFocusOut);
    ownerWindow.removeEventListener("resize", handleViewportChange);
    ownerDocument.removeEventListener("scroll", handleViewportChange, true);
    if (root === ownerDocument) {
      ownerDocument.body.style.overflow = "";
    }
    initializedRoots.delete(root);
  }
  return {
    plugins: [...enabledPlugins],
    init,
    destroy,
    open(targetOrSelector) {
      const target = resolveRuntimeTarget(targetOrSelector);
      if (!target) {
        return false;
      }
      if (isModalTarget(target)) {
        openModal(target);
        return true;
      }
      if (isOffcanvasTarget(target)) {
        openOffcanvas(target);
        return true;
      }
      showWithState(root, target);
      return true;
    },
    close(targetOrSelector) {
      const target = resolveRuntimeTarget(targetOrSelector);
      if (!target) {
        return false;
      }
      if (isModalTarget(target)) {
        closeModal(target);
        return true;
      }
      if (isToastTarget(target)) {
        closeToast(target);
        return true;
      }
      if (isOffcanvasTarget(target)) {
        closeOffcanvas(target);
        return true;
      }
      if (isTooltipTarget(target)) {
        hideTooltip(target);
        return true;
      }
      hideWithState(root, target);
      return true;
    },
    toggle(targetOrSelector) {
      const target = resolveRuntimeTarget(targetOrSelector);
      if (!target) {
        return false;
      }
      if (isDropdownTarget(target)) {
        toggleDropdown(target);
        return true;
      }
      if (isToastTarget(target)) {
        toggleToast(target);
        return true;
      }
      if (isCollapseTarget(target)) {
        toggleCollapse(target);
        return true;
      }
      if (isOffcanvasTarget(target)) {
        toggleOffcanvas(target);
        return true;
      }
      if (isTooltipTarget(target)) {
        target.hasAttribute("hidden") ? showTarget(target) : hideTooltip(target);
        return true;
      }
      toggleWithState(root, target);
      return true;
    },
    activateTab(target) {
      const trigger = resolveRuntimeTarget(target);
      const group = trigger ? getTabGroup(trigger) : null;
      if (!trigger || !group) {
        return false;
      }
      activateTab(group, trigger, true);
      return true;
    }
  };
}
function createVeloraRuntime({ plugins = veloraPlugins } = {}) {
  const enabledPlugins = new Set(plugins);
  return {
    init(root = document) {
      const existing = initializedRoots.get(root);
      if (existing) {
        return existing;
      }
      const controller = createController(root, enabledPlugins);
      controller.init();
      initializedRoots.set(root, controller);
      return controller;
    }
  };
}
var defaultRuntime = createVeloraRuntime();
function initVelora(root = document, options = {}) {
  if (options.plugins) {
    return createVeloraRuntime(options).init(root);
  }
  return defaultRuntime.init(root);
}
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initVelora());
  } else {
    initVelora();
  }
}
export {
  createVeloraRuntime,
  initVelora,
  veloraPlugins
};
