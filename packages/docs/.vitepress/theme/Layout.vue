<template>
  <div class="tw-root">
    <header class="tw-nav">
      <div class="tw-nav-bar">
        <h1 class="tw-title">VeloraCSS</h1>
        <nav class="tw-nav-links">
          <a href="/guide/">Guide</a>
          <a href="/api/">API</a>
          <a href="/examples/">Examples</a>
        </nav>
      </div>
    </header>
    <div class="tw-main">
      <aside class="tw-sidebar sticky">
        <div class="tw-sidebar-group">
          <div class="tw-sidebar-title">Getting Started</div>
          <ul>
            <li><a href="/">Introduction</a></li>
            <li><a href="/guide/">Installation</a></li>
          </ul>
        </div>
        <div class="tw-sidebar-group">
          <div class="tw-sidebar-title">Core Concepts</div>
          <ul>
            <li><a href="/api/">Tokens</a></li>
            <li><a href="/examples/">Utilities</a></li>
          </ul>
        </div>
        <div class="tw-sidebar-group">
          <div class="tw-sidebar-title">Advanced</div>
          <ul>
            <li><a href="/guide/">Customization</a></li>
            <li><a href="/api/">Integrations</a></li>
          </ul>
        </div>
      </aside>
      <main class="tw-content">
        <slot />
      </main>
    </div>
    <footer class="tw-footer">
      <div class="tw-footer-bar">
        <span>© 2026 VeloraCSS · Inspired by TailwindCSS</span>
        <nav>
          <a href="https://github.com/VeloraCSS">GitHub</a>
          <a href="https://veloracss.com">Site</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No imports needed. Slot handles content.
</script>

<style scoped>
.tw-root {
  min-height: 100vh;
  background: #f8fafc;
}
.tw-nav {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}
.tw-nav-bar {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.tw-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
}
.tw-main {
  display: flex;
  width: 100vw;
  </style>
    padding: 2rem;
    margin-left: 2rem;
  }
  .tw-code-window {
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }
  .tw-code-chrome {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 1.5rem;
    margin-bottom: 1rem;
  }
  .tw-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    display: inline-block;
  }
  .tw-dot-red {
    background: #ef4444;
  }
  .tw-dot-yellow {
    background: #facc15;
  }
  .tw-dot-green {
    background: #22c55e;
  }
  .tw-footer {
    background: #fff;
    border-top: 1px solid #e2e8f0;
    box-shadow: 0 -1px 2px rgba(0,0,0,0.02);
    margin-top: auto;
  }
  .tw-footer-bar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    font-size: 0.95rem;
    color: #64748b;
  }
  .tw-footer-bar nav a {
    color: #2563eb;
    margin-left: 1rem;
    text-decoration: none;
  }
  .tw-footer-bar nav a:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    .tw-main {
      flex-direction: column;
      padding: 1rem 0;
      max-width: 100vw;
    }
    .tw-content {
      margin-left: 0;
      padding: 1rem;
      width: 100vw;
      max-width: 100vw;
    }
    .tw-code-window {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .tw-code-chrome {
      height: 1rem;
      margin-bottom: 0.5rem;
    }
    .tw-nav-bar, .tw-footer-bar {
      max-width: 100vw;
      padding: 1rem;
    }
    .tw-sidebar {
      width: 100vw;
      min-width: 0;
      padding: 1rem;
      border-right: none;
      border-bottom: 1px solid #e2e8f0;
      position: static;
      max-height: none;
      overflow-y: visible;
    }
  }
  </style>
  display: inline-block;
}
.tw-dot-red {
  background: #ef4444;
}
.tw-dot-yellow {
  background: #facc15;
}
.tw-dot-green {
  background: #22c55e;
}
@media (max-width: 1200px) {
  .tw-main {
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    padding: 1rem 0;
  }
  .tw-content {
    margin-left: 0;
    padding: 1rem;
    width: 100vw;
    max-width: 100vw;
  }
  .tw-code-window {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .tw-code-chrome {
    height: 1rem;
    margin-bottom: 0.5rem;
  }
  .tw-nav-bar {
    width: 100vw;
    max-width: 100vw;
    padding: 1rem;
  }
  .tw-sidebar {
    width: 100vw;
    min-width: 0;
    padding: 1rem;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }
}
