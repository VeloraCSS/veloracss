// Removed Bootstrap JS compatibility shim.
 *   data-bs-placement="*"       → data-vel-tooltip-placement
 *   data-bs-theme="dark/light"  → data-vel-theme
 */

const ATTR_MAP = [
  // Modal
  {
    match: (el) => el.dataset.bsToggle === "modal",
    apply(el) {
      const target = el.dataset.bsTarget || el.getAttribute("href");
      if (target) el.setAttribute("data-vel-modal-open", target.replace(/^#/, ""));
      el.setAttribute("data-vel-toggle", "modal");
    },
  },
  {
    match: (el) => el.dataset.bsDismiss === "modal",
    apply: (el) => el.setAttribute("data-vel-modal-close", ""),
  },

  // Offcanvas
  {
    match: (el) => el.dataset.bsToggle === "offcanvas",
    apply(el) {
      const target = el.dataset.bsTarget || el.getAttribute("href");
      if (target) el.setAttribute("data-vel-offcanvas-open", target.replace(/^#/, ""));
      const placement = el.dataset.bsPlacement;
      if (placement) el.setAttribute("data-vel-offcanvas-placement", placement);
    },
  },
  {
    match: (el) => el.dataset.bsDismiss === "offcanvas",
    apply: (el) => el.setAttribute("data-vel-offcanvas-close", ""),
  },

  // Collapse
  {
    match: (el) => el.dataset.bsToggle === "collapse",
    apply(el) {
      const target = el.dataset.bsTarget || el.getAttribute("href");
      if (target) el.setAttribute("data-vel-collapse", target.replace(/^#/, ""));
    },
  },

  // Tabs
  {
    match: (el) => el.dataset.bsToggle === "tab" || el.dataset.bsToggle === "pill",
    apply(el) {
      const target = el.dataset.bsTarget || el.getAttribute("href");
      if (target) el.setAttribute("data-vel-tab", target.replace(/^#/, ""));
    },
  },

  // Dropdown
  {
    match: (el) => el.dataset.bsToggle === "dropdown",
    apply: (el) => el.setAttribute("data-vel-dropdown", ""),
  },

  // Tooltip / Popover
  {
    match: (el) => el.dataset.bsToggle === "tooltip" || el.dataset.bsToggle === "popover",
    apply(el) {
      const title = el.dataset.bsTitle || el.getAttribute("title") || el.dataset.bsContent;
      if (title) el.setAttribute("data-vel-tooltip", title);
      const placement = el.dataset.bsPlacement;
      if (placement) el.setAttribute("data-vel-tooltip-placement", placement);
    },
  },

  // Theme
  {
    match: (el) => el.dataset.bsTheme != null,
    apply: (el) => el.setAttribute("data-vel-theme", el.dataset.bsTheme),
  },
];

function shimElement(el) {
  for (const rule of ATTR_MAP) {
    if (rule.match(el)) rule.apply(el);
  }
}

function shimAll(root = document) {
  const candidates = root.querySelectorAll(
    "[data-bs-toggle],[data-bs-dismiss],[data-bs-target],[data-bs-theme],[data-bs-placement]",
  );
  for (const el of candidates) shimElement(el);
}

// Run once on DOMContentLoaded, then watch for dynamic additions.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => shimAll());
} else {
  shimAll();
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType !== 1) continue;
      shimElement(node);
      if (node.querySelectorAll) shimAll(node);
    }
  }
});

observer.observe(document.body ?? document.documentElement, {
  childList: true,
  subtree: true,
});
