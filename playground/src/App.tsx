import { useState, useCallback, useEffect, useRef } from 'react'
import LZString from 'lz-string'
import CodeEditor from './components/Editor'
import Preview from './components/Preview'
import veloraCss from '../../dist/velora.css?raw'
import logoUrl from './assets/velora_actual.png'

const LOGO_URL = logoUrl

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'html' | 'css'
type Device = 'full' | 'desktop' | 'tablet' | 'mobile'

interface GalleryItem {
  id: string
  label: string
  html: string
  css?: string
}

interface GalleryCategory {
  id: string
  label: string
  items: GalleryItem[]
}

interface TokenState {
  hue: number
  radius: number
  spacingScale: number
}

// ─── Gallery Data ─────────────────────────────────────────────────────────────

const GALLERY: GalleryCategory[] = [
  {
    id: 'elements',
    label: 'Elements',
    items: [
      {
        id: 'badge',
        label: 'Badge',
        html: `<div class="vel-p-8 vel-flex vel-gap-3 vel-flex-wrap">
  <span class="vel-badge">Default</span>
  <span class="vel-badge vel-badge-primary">Primary</span>
  <span class="vel-badge vel-badge-success">Success</span>
  <span class="vel-badge vel-badge-warning">Warning</span>
  <span class="vel-badge vel-badge-danger">Danger</span>
  <span class="vel-badge vel-badge-outline">Outline</span>
</div>`,
      },
      {
        id: 'avatar',
        label: 'Avatar',
        html: `<div class="vel-p-8 vel-flex vel-gap-4 vel-items-center vel-flex-wrap">
  <div class="vel-avatar vel-avatar-sm">A</div>
  <div class="vel-avatar">B</div>
  <div class="vel-avatar vel-avatar-lg">C</div>
  <div class="vel-avatar vel-avatar-xl vel-avatar-primary">VX</div>
  <div class="vel-avatar vel-avatar-rounded">D</div>
</div>`,
      },
      {
        id: 'spinner',
        label: 'Spinner',
        html: `<div class="vel-p-8 vel-flex vel-gap-6 vel-items-center">
  <div class="vel-spinner vel-spinner-sm"></div>
  <div class="vel-spinner"></div>
  <div class="vel-spinner vel-spinner-lg"></div>
  <div class="vel-spinner vel-spinner-primary"></div>
</div>`,
      },
      {
        id: 'skeleton',
        label: 'Skeleton',
        html: `<div class="vel-p-8 vel-max-w-sm vel-flex vel-flex-col vel-gap-3">
  <div class="vel-skeleton vel-h-6 vel-w-48"></div>
  <div class="vel-skeleton vel-h-4 vel-w-full"></div>
  <div class="vel-skeleton vel-h-4 vel-w-4/5"></div>
  <div class="vel-skeleton vel-h-32 vel-w-full vel-rounded-lg"></div>
</div>`,
      },
      {
        id: 'divider',
        label: 'Divider',
        html: `<div class="vel-p-8 vel-max-w-md vel-flex vel-flex-col vel-gap-4">
  <p class="vel-text-muted">Section one</p>
  <div class="vel-divider"></div>
  <p class="vel-text-muted">Section two</p>
  <div class="vel-divider vel-divider-primary">OR</div>
  <p class="vel-text-muted">Section three</p>
</div>`,
      },
      {
        id: 'kbd',
        label: 'Kbd',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4">
  <p>Press <kbd class="vel-kbd">Ctrl</kbd> + <kbd class="vel-kbd">C</kbd> to copy</p>
  <p>Open palette: <kbd class="vel-kbd">⌘</kbd> <kbd class="vel-kbd">K</kbd></p>
</div>`,
      },
      {
        id: 'progress',
        label: 'Progress',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4 vel-max-w-md">
  <div class="vel-progress"><div class="vel-progress-bar" style="width:40%"></div></div>
  <div class="vel-progress vel-progress-primary"><div class="vel-progress-bar" style="width:70%"></div></div>
  <div class="vel-progress vel-progress-success"><div class="vel-progress-bar" style="width:90%"></div></div>
  <div class="vel-progress vel-progress-sm"><div class="vel-progress-bar" style="width:55%"></div></div>
</div>`,
      },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',
    items: [
      {
        id: 'input',
        label: 'Input',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4 vel-max-w-sm">
  <div class="vel-input-group">
    <label class="vel-label">Email</label>
    <input type="email" class="vel-input" placeholder="you@example.com" />
  </div>
  <div class="vel-input-group">
    <label class="vel-label">Password</label>
    <input type="password" class="vel-input vel-input-error" value="bad" />
    <span class="vel-input-hint vel-text-danger">Password is too short</span>
  </div>
  <div class="vel-input-group">
    <label class="vel-label">Username</label>
    <input type="text" class="vel-input vel-input-success" value="velora_dev" />
    <span class="vel-input-hint vel-text-success">Username available!</span>
  </div>
  <select class="vel-select"><option>Option 1</option><option>Option 2</option></select>
  <textarea class="vel-textarea" placeholder="Write something..." rows="3"></textarea>
</div>`,
      },
      {
        id: 'file-upload',
        label: 'File Upload',
        html: `<div class="vel-p-8 vel-max-w-md">
  <div class="vel-file-upload">
    <div class="vel-file-upload-icon">📁</div>
    <p class="vel-file-upload-text">Drop files here or <span class="vel-text-primary">browse</span></p>
    <p class="vel-file-upload-hint">PNG, JPG, PDF up to 10MB</p>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'typography',
    label: 'Typography',
    items: [
      {
        id: 'typography',
        label: 'Typography',
        html: `<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-2">Typography</h1>
    <p class="vel-text-xl vel-text-neutral-400 vel-mb-10">Font sizes, weights, and text utilities.</p>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <p class="vel-text-xs vel-text-neutral-700 vel-mb-1">vel-text-xs — The quick brown fox</p>
      <p class="vel-text-sm vel-text-neutral-700 vel-mb-1">vel-text-sm — The quick brown fox</p>
      <p class="vel-text-base vel-text-neutral-700 vel-mb-1">vel-text-base — The quick brown fox</p>
      <p class="vel-text-lg vel-text-neutral-700 vel-mb-1">vel-text-lg — The quick brown fox</p>
      <p class="vel-text-xl vel-text-neutral-700 vel-mb-1">vel-text-xl — The quick brown fox</p>
      <p class="vel-text-2xl vel-text-neutral-700 vel-mb-1">vel-text-2xl — The quick brown fox</p>
      <p class="vel-text-3xl vel-text-neutral-700 vel-mb-1">vel-text-3xl — The quick brown fox</p>
      <p class="vel-text-4xl vel-text-neutral-700 vel-mb-1">vel-text-4xl — Fox</p>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Weights</h2>
      <p class="vel-text-xl vel-font-thin vel-text-neutral-800 vel-mb-1">Thin — 100</p>
      <p class="vel-text-xl vel-font-light vel-text-neutral-800 vel-mb-1">Light — 300</p>
      <p class="vel-text-xl vel-font-normal vel-text-neutral-800 vel-mb-1">Normal — 400</p>
      <p class="vel-text-xl vel-font-medium vel-text-neutral-800 vel-mb-1">Medium — 500</p>
      <p class="vel-text-xl vel-font-semibold vel-text-neutral-800 vel-mb-1">Semibold — 600</p>
      <p class="vel-text-xl vel-font-bold vel-text-neutral-800 vel-mb-1">Bold — 700</p>
      <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800 vel-mb-1">Extrabold — 800</p>
      <p class="vel-text-xl vel-font-black vel-text-neutral-800 vel-mb-1">Black — 900</p>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Colors</h2>
      <p class="vel-text-primary vel-text-lg vel-font-medium vel-mb-1">vel-text-primary</p>
      <p class="vel-text-success vel-text-lg vel-font-medium vel-mb-1">vel-text-success</p>
      <p class="vel-text-danger vel-text-lg vel-font-medium vel-mb-1">vel-text-danger</p>
      <p class="vel-text-warning vel-text-lg vel-font-medium vel-mb-1">vel-text-warning</p>
      <p class="vel-text-info vel-text-lg vel-font-medium vel-mb-1">vel-text-info</p>
      <p class="vel-text-neutral-400 vel-text-lg vel-font-medium">vel-text-neutral-400</p>
    </section>

  </div>
</div>`,
      },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    items: [
      {
        id: 'button',
        label: 'Button',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4">
  <div class="vel-flex vel-gap-3 vel-flex-wrap">
    <button class="vel-btn vel-btn-primary">Primary</button>
    <button class="vel-btn vel-btn-secondary">Secondary</button>
    <button class="vel-btn vel-btn-success">Success</button>
    <button class="vel-btn vel-btn-danger">Danger</button>
    <button class="vel-btn vel-btn-warning">Warning</button>
  </div>
  <div class="vel-flex vel-gap-3 vel-flex-wrap">
    <button class="vel-btn vel-btn-outline vel-btn-primary">Outline</button>
    <button class="vel-btn vel-btn-ghost">Ghost</button>
    <button class="vel-btn vel-btn-link">Link</button>
  </div>
  <div class="vel-flex vel-gap-3 vel-items-center vel-flex-wrap">
    <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
    <button class="vel-btn vel-btn-primary">Default</button>
    <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
    <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
  </div>
</div>`,
      },
      {
        id: 'alert',
        label: 'Alert',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4 vel-max-w-lg">
  <div class="vel-alert vel-alert-info">
    <strong>Info:</strong> Your session expires in 10 minutes.
  </div>
  <div class="vel-alert vel-alert-success">
    <strong>Success:</strong> Profile updated successfully!
  </div>
  <div class="vel-alert vel-alert-warning">
    <strong>Warning:</strong> API rate limit approaching.
  </div>
  <div class="vel-alert vel-alert-danger">
    <strong>Error:</strong> Failed to save changes. Try again.
  </div>
</div>`,
      },
      {
        id: 'card',
        label: 'Card',
        html: `<div class="vel-p-8 vel-grid vel-grid-cols-2 vel-gap-4 vel-max-w-2xl">
  <div class="vel-card">
    <div class="vel-card-header">Default Card</div>
    <div class="vel-card-body">Standard card with header and body content.</div>
    <div class="vel-card-footer"><button class="vel-btn vel-btn-primary vel-btn-sm">Action</button></div>
  </div>
  <div class="vel-card vel-card-elevated">
    <div class="vel-card-header">Elevated</div>
    <div class="vel-card-body">Elevated card with stronger shadow.</div>
  </div>
  <div class="vel-card vel-card-primary">
    <div class="vel-card-body">Primary accent card for featured content.</div>
  </div>
  <div class="vel-card vel-card-hover">
    <div class="vel-card-body">Hover me — interactive card.</div>
  </div>
</div>`,
      },
      {
        id: 'modal',
        label: 'Modal',
        html: `<div class="vel-p-8">
  <!-- Trigger -->
  <label for="demo-modal" class="vel-btn vel-btn-primary">Open Modal</label>
  <!-- Modal using CSS state machine -->
  <input type="checkbox" id="demo-modal" class="vel-hidden" />
  <div class="vel-modal-overlay">
    <div class="vel-modal">
      <div class="vel-modal-header">
        <h3>Modal Title</h3>
        <label for="demo-modal" class="vel-modal-close">✕</label>
      </div>
      <div class="vel-modal-body">
        <p>This modal uses pure CSS — no JavaScript required.</p>
        <p class="vel-text-muted vel-mt-2">Built with the VeloraCSS CSS state machine system.</p>
      </div>
      <div class="vel-modal-footer">
        <label for="demo-modal" class="vel-btn vel-btn-ghost">Cancel</label>
        <button class="vel-btn vel-btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dropdown',
        label: 'Dropdown',
        html: `<div class="vel-p-8 vel-flex vel-gap-4">
  <div class="vel-dropdown">
    <button class="vel-btn vel-btn-primary vel-dropdown-trigger">Options ▾</button>
    <div class="vel-dropdown-menu">
      <a class="vel-dropdown-item">Edit</a>
      <a class="vel-dropdown-item">Duplicate</a>
      <div class="vel-divider"></div>
      <a class="vel-dropdown-item vel-text-danger">Delete</a>
    </div>
  </div>
</div>`,
      },
      {
        id: 'tooltip',
        label: 'Tooltip',
        html: `<div class="vel-p-8 vel-flex vel-gap-6 vel-flex-wrap vel-items-center">
  <div class="vel-tooltip" data-tip="Top tooltip">
    <button class="vel-btn vel-btn-secondary">Hover me</button>
  </div>
  <div class="vel-tooltip vel-tooltip-right" data-tip="Right side">
    <button class="vel-btn vel-btn-secondary">Right</button>
  </div>
  <div class="vel-tooltip vel-tooltip-bottom" data-tip="Below the button">
    <button class="vel-btn vel-btn-secondary">Bottom</button>
  </div>
</div>`,
      },
      {
        id: 'toast',
        label: 'Toast',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-3 vel-max-w-sm">
  <div class="vel-toast vel-toast-show">
    <span>Default notification</span>
    <button class="vel-toast-close">✕</button>
  </div>
  <div class="vel-toast vel-toast-success vel-toast-show">
    <span>✓ Changes saved!</span>
    <button class="vel-toast-close">✕</button>
  </div>
  <div class="vel-toast vel-toast-danger vel-toast-show">
    <span>✕ Upload failed</span>
    <button class="vel-toast-close">✕</button>
  </div>
  <div class="vel-toast vel-toast-warning vel-toast-show">
    <span>⚠ Storage almost full</span>
    <button class="vel-toast-close">✕</button>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      {
        id: 'navbar',
        label: 'Navbar',
        html: `<div>
  <nav class="vel-navbar">
    <a class="vel-navbar-brand">VeloraCSS</a>
    <div class="vel-navbar-menu">
      <a class="vel-navbar-item vel-active">Home</a>
      <a class="vel-navbar-item">Docs</a>
      <a class="vel-navbar-item">Components</a>
    </div>
    <div class="vel-navbar-end">
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get Started</button>
    </div>
  </nav>
  <div class="vel-p-8 vel-text-muted">Page content below the navbar.</div>
</div>`,
      },
      {
        id: 'breadcrumb',
        label: 'Breadcrumb',
        html: `<div class="vel-p-8">
  <nav class="vel-breadcrumb">
    <a class="vel-breadcrumb-item">Home</a>
    <span class="vel-breadcrumb-sep">/</span>
    <a class="vel-breadcrumb-item">Docs</a>
    <span class="vel-breadcrumb-sep">/</span>
    <span class="vel-breadcrumb-item vel-active">Components</span>
  </nav>
</div>`,
      },
      {
        id: 'menu',
        label: 'Menu',
        html: `<div class="vel-p-8 vel-max-w-xs">
  <ul class="vel-menu">
    <li class="vel-menu-title">Navigation</li>
    <li><a class="vel-menu-item vel-active">Dashboard</a></li>
    <li><a class="vel-menu-item">Projects</a></li>
    <li><a class="vel-menu-item">Team</a></li>
    <li class="vel-menu-title">Account</li>
    <li><a class="vel-menu-item">Settings</a></li>
    <li><a class="vel-menu-item vel-text-danger">Sign out</a></li>
  </ul>
</div>`,
      },
      {
        id: 'tabs',
        label: 'Tabs',
        html: `<div class="vel-p-8 vel-max-w-lg">
  <div class="vel-tabs">
    <input type="radio" name="demo-tabs" id="t1" checked class="vel-hidden"/>
    <input type="radio" name="demo-tabs" id="t2" class="vel-hidden"/>
    <input type="radio" name="demo-tabs" id="t3" class="vel-hidden"/>
    <div class="vel-tabs-list">
      <label for="t1" class="vel-tab">Overview</label>
      <label for="t2" class="vel-tab">Details</label>
      <label for="t3" class="vel-tab">Settings</label>
    </div>
    <div class="vel-tab-content" data-tab="t1">
      <p class="vel-p-4 vel-text-muted">Overview content — no JavaScript required.</p>
    </div>
    <div class="vel-tab-content" data-tab="t2">
      <p class="vel-p-4 vel-text-muted">Detailed information goes here.</p>
    </div>
    <div class="vel-tab-content" data-tab="t3">
      <p class="vel-p-4 vel-text-muted">Settings and configuration panel.</p>
    </div>
  </div>
</div>`,
      },
      {
        id: 'pagination',
        label: 'Pagination',
        html: `<div class="vel-p-8 vel-flex vel-justify-center">
  <nav class="vel-pagination">
    <a class="vel-page-item vel-disabled">‹</a>
    <a class="vel-page-item vel-active">1</a>
    <a class="vel-page-item">2</a>
    <a class="vel-page-item">3</a>
    <span class="vel-page-item">...</span>
    <a class="vel-page-item">10</a>
    <a class="vel-page-item">›</a>
  </nav>
</div>`,
      },
      {
        id: 'steps',
        label: 'Steps',
        html: `<div class="vel-p-8 vel-max-w-lg">
  <ol class="vel-steps">
    <li class="vel-step vel-step-complete">Account created</li>
    <li class="vel-step vel-step-complete">Email verified</li>
    <li class="vel-step vel-step-active">Profile setup</li>
    <li class="vel-step">Choose plan</li>
    <li class="vel-step">Launch!</li>
  </ol>
</div>`,
      },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    items: [
      {
        id: 'table',
        label: 'Table',
        html: `<div class="vel-p-8 vel-overflow-x-auto">
  <table class="vel-table">
    <thead>
      <tr>
        <th>Name</th><th>Role</th><th>Status</th><th>Joined</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice Chen</td><td>Designer</td><td><span class="vel-badge vel-badge-success">Active</span></td><td>Jan 2024</td></tr>
      <tr><td>Bob Smith</td><td>Engineer</td><td><span class="vel-badge vel-badge-success">Active</span></td><td>Feb 2024</td></tr>
      <tr><td>Carol White</td><td>PM</td><td><span class="vel-badge vel-badge-warning">Away</span></td><td>Mar 2024</td></tr>
    </tbody>
  </table>
</div>`,
      },
      {
        id: 'charts',
        label: 'Charts',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-6">
  <div class="vel-chart-bar-group">
    <div class="vel-chart-bar-item">
      <div class="vel-chart-bar" style="--bar-height: 70%"></div>
      <span class="vel-chart-label">Jan</span>
    </div>
    <div class="vel-chart-bar-item">
      <div class="vel-chart-bar" style="--bar-height: 45%"></div>
      <span class="vel-chart-label">Feb</span>
    </div>
    <div class="vel-chart-bar-item">
      <div class="vel-chart-bar" style="--bar-height: 90%"></div>
      <span class="vel-chart-label">Mar</span>
    </div>
    <div class="vel-chart-bar-item">
      <div class="vel-chart-bar" style="--bar-height: 60%"></div>
      <span class="vel-chart-label">Apr</span>
    </div>
    <div class="vel-chart-bar-item">
      <div class="vel-chart-bar" style="--bar-height: 80%"></div>
      <span class="vel-chart-label">May</span>
    </div>
  </div>
  <!-- Progress rings -->
  <div class="vel-flex vel-gap-6">
    <div class="vel-progress-ring" style="--ring-value: 72">
      <svg viewBox="0 0 36 36" class="vel-ring-svg">
        <circle class="vel-ring-track" cx="18" cy="18" r="15.9"/>
        <circle class="vel-ring-fill" cx="18" cy="18" r="15.9"/>
      </svg>
      <span class="vel-ring-label">72%</span>
    </div>
    <div class="vel-progress-ring" style="--ring-value: 48">
      <svg viewBox="0 0 36 36" class="vel-ring-svg">
        <circle class="vel-ring-track" cx="18" cy="18" r="15.9"/>
        <circle class="vel-ring-fill" cx="18" cy="18" r="15.9"/>
      </svg>
      <span class="vel-ring-label">48%</span>
    </div>
  </div>
</div>`,
      },
      {
        id: 'calendar',
        label: 'Calendar',
        html: `<div class="vel-p-8 vel-max-w-sm">
  <div class="vel-calendar">
    <div class="vel-calendar-header">
      <button class="vel-calendar-nav">‹</button>
      <span class="vel-calendar-title">March 2026</span>
      <button class="vel-calendar-nav">›</button>
    </div>
    <div class="vel-calendar-grid">
      <span class="vel-calendar-day-label">Su</span>
      <span class="vel-calendar-day-label">Mo</span>
      <span class="vel-calendar-day-label">Tu</span>
      <span class="vel-calendar-day-label">We</span>
      <span class="vel-calendar-day-label">Th</span>
      <span class="vel-calendar-day-label">Fr</span>
      <span class="vel-calendar-day-label">Sa</span>
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <button class="vel-calendar-date">1</button>
      <button class="vel-calendar-date">2</button>
      <button class="vel-calendar-date vel-calendar-date-today">3</button>
      <button class="vel-calendar-date">4</button>
      <button class="vel-calendar-date vel-calendar-date-selected">5</button>
      <button class="vel-calendar-date">6</button>
      <button class="vel-calendar-date">7</button>
      <button class="vel-calendar-date">8</button>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    items: [
      {
        id: 'hero',
        label: 'Hero',
        html: `<div class="vel-hero">
  <div class="vel-hero-content">
    <p class="vel-badge vel-badge-primary vel-mb-4">New — v1.0 Released</p>
    <h1 class="vel-text-5xl vel-font-bold vel-mb-4">Build faster<br/>with VeloraCSS</h1>
    <p class="vel-text-muted vel-text-lg vel-mb-8">A utility-first CSS framework with no JavaScript. Pure CSS state machines, container queries, and fluid scaling.</p>
    <div class="vel-flex vel-gap-4">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Get Started</button>
      <button class="vel-btn vel-btn-outline vel-btn-lg">View Docs</button>
    </div>
  </div>
</div>`,
      },
      {
        id: 'feature-list',
        label: 'Feature List',
        html: `<div class="vel-p-8 vel-max-w-2xl vel-grid vel-grid-cols-2 vel-gap-4">
  <div class="vel-feature">
    <div class="vel-feature-icon">⚡</div>
    <h3 class="vel-feature-title">Zero JS</h3>
    <p class="vel-feature-desc">Components built with pure CSS state machines.</p>
  </div>
  <div class="vel-feature">
    <div class="vel-feature-icon">🎨</div>
    <h3 class="vel-feature-title">Color Genetics</h3>
    <p class="vel-feature-desc">One hue value drives your entire color universe.</p>
  </div>
  <div class="vel-feature">
    <div class="vel-feature-icon">📐</div>
    <h3 class="vel-feature-title">Fluid Scale</h3>
    <p class="vel-feature-desc">All spacing and type uses clamp() — no breakpoints.</p>
  </div>
  <div class="vel-feature">
    <div class="vel-feature-icon">📦</div>
    <h3 class="vel-feature-title">Container Smart</h3>
    <p class="vel-feature-desc">Components adapt to their container, not viewport.</p>
  </div>
</div>`,
      },
      {
        id: 'pricing',
        label: 'Pricing',
        html: `<div class="vel-p-8 vel-grid vel-grid-cols-3 vel-gap-4 vel-max-w-3xl">
  <div class="vel-pricing-card">
    <div class="vel-pricing-tier">Free</div>
    <div class="vel-pricing-price">$0<span class="vel-pricing-period">/mo</span></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature">5 projects</li>
      <li class="vel-pricing-feature">1GB storage</li>
      <li class="vel-pricing-feature vel-text-muted">No custom domain</li>
    </ul>
    <button class="vel-btn vel-btn-outline vel-btn-sm">Get started</button>
  </div>
  <div class="vel-pricing-card vel-pricing-card-featured">
    <div class="vel-pricing-badge">Popular</div>
    <div class="vel-pricing-tier">Pro</div>
    <div class="vel-pricing-price">$12<span class="vel-pricing-period">/mo</span></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature">Unlimited projects</li>
      <li class="vel-pricing-feature">50GB storage</li>
      <li class="vel-pricing-feature">Custom domain</li>
    </ul>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Upgrade</button>
  </div>
  <div class="vel-pricing-card">
    <div class="vel-pricing-tier">Team</div>
    <div class="vel-pricing-price">$49<span class="vel-pricing-period">/mo</span></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature">Everything in Pro</li>
      <li class="vel-pricing-feature">10 team members</li>
      <li class="vel-pricing-feature">Priority support</li>
    </ul>
    <button class="vel-btn vel-btn-outline vel-btn-sm">Contact sales</button>
  </div>
</div>`,
      },
      {
        id: 'carousel',
        label: 'Carousel',
        html: `<div class="vel-p-8 vel-max-w-lg">
  <div class="vel-carousel">
    <input type="radio" name="c1" id="s1" checked class="vel-hidden"/>
    <input type="radio" name="c1" id="s2" class="vel-hidden"/>
    <input type="radio" name="c1" id="s3" class="vel-hidden"/>
    <div class="vel-carousel-track">
      <div class="vel-carousel-slide vel-bg-primary vel-p-8 vel-text-center vel-rounded-lg">
        <h3 class="vel-text-xl vel-font-bold">Slide One</h3>
        <p class="vel-text-muted vel-mt-2">Pure CSS carousel — no JavaScript.</p>
      </div>
      <div class="vel-carousel-slide vel-bg-surface-2 vel-p-8 vel-text-center vel-rounded-lg">
        <h3 class="vel-text-xl vel-font-bold">Slide Two</h3>
        <p class="vel-text-muted vel-mt-2">Driven by radio inputs and sibling selectors.</p>
      </div>
      <div class="vel-carousel-slide vel-bg-surface-3 vel-p-8 vel-text-center vel-rounded-lg">
        <h3 class="vel-text-xl vel-font-bold">Slide Three</h3>
        <p class="vel-text-muted vel-mt-2">Smooth scroll snap transitions.</p>
      </div>
    </div>
    <div class="vel-carousel-dots">
      <label for="s1" class="vel-carousel-dot"></label>
      <label for="s2" class="vel-carousel-dot"></label>
      <label for="s3" class="vel-carousel-dot"></label>
    </div>
  </div>
</div>`,
      },
      {
        id: 'chat-bubble',
        label: 'Chat Bubble',
        html: `<div class="vel-p-8 vel-flex vel-flex-col vel-gap-4 vel-max-w-sm">
  <div class="vel-chat vel-chat-start">
    <div class="vel-chat-bubble">Hey! Have you seen the new VeloraCSS?</div>
    <div class="vel-chat-meta">Alex · 2:31 PM</div>
  </div>
  <div class="vel-chat vel-chat-end">
    <div class="vel-chat-bubble vel-chat-bubble-primary">Yes! I love the Color Genetics system 🎨</div>
    <div class="vel-chat-meta">You · 2:32 PM</div>
  </div>
  <div class="vel-chat vel-chat-start">
    <div class="vel-chat-bubble">Pure CSS modals blew my mind honestly</div>
    <div class="vel-chat-meta">Alex · 2:33 PM</div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'code',
    label: 'Code',
    items: [
      {
        id: 'code-block',
        label: 'Code Block',
        html: `<div class="vel-p-8 vel-max-w-lg">
  <div class="vel-code-block">
    <div class="vel-code-header">
      <span class="vel-code-lang">CSS</span>
      <button class="vel-code-copy">Copy</button>
    </div>
    <pre class="vel-code"><code><span class="vel-code-comment">/* One hue. 50+ colors. */</span>
<span class="vel-code-prop">--vel-dna-hue</span>: <span class="vel-code-num">258</span>;
<span class="vel-code-prop">--vel-color-primary</span>: <span class="vel-code-fn">oklch</span>(<span class="vel-code-num">65%</span> <span class="vel-code-num">0.21</span> <span class="vel-code-kw">var</span>(--vel-dna-hue));</code></pre>
  </div>
</div>`,
      },
    ],
  },
]

// ─── Default HTML (Starter) ───────────────────────────────────────────────────

const DEFAULT_HTML = `<!--
  Welcome to VeloraCSS Playground!
  Edit this HTML to start building — changes appear live in the preview.
  Or pick a component from the gallery panel on the left.
-->
<div style="min-height:100vh;background:#0b1120;background-image:radial-gradient(circle,#1e293b 1px,transparent 1px);background-size:30px 30px;display:flex;align-items:center;justify-content:center;padding:40px 20px;font-family:system-ui,sans-serif">
  <div style="background:#111827;border:1px solid #1e2d45;border-radius:20px;padding:44px 48px;max-width:540px;width:100%;box-shadow:0 32px 64px rgba(0,0,0,.6)">

    <!-- Heading -->
    <h1 style="color:#f1f5f9;font-size:1.375rem;font-weight:700;margin:0 0 10px;letter-spacing:-0.02em">
      Welcome to the VeloraCSS Playground
    </h1>
    <p style="color:#64748b;font-size:0.9rem;line-height:1.7;margin:0 0 30px">
      An online playground for <strong style="color:#c4b5fd">VeloraCSS</strong> — a fully original
      utility-first CSS framework with rich components and zero dependencies.
      Edit the HTML on the left and see changes instantly.
    </p>

    <!-- Feature list -->
    <ul style="list-style:none;padding:0;margin:0 0 34px;display:flex;flex-direction:column;gap:14px">
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#7c5cfc20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Utility-first classes</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-flex, vel-p-4, vel-text-lg and hundreds more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#0ecb8120;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Rich components</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-btn, vel-card, vel-badge, vel-alert, vel-navbar &amp; more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#2ebde520;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Color Genetics</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">One --vel-dna-hue value drives 50+ colors — try the Token Controls panel</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#ff9d0020;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Animation utilities</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-animate-fade-in · vel-animate-slide-up · vel-animate-pulse</span>
        </div>
      </li>
    </ul>

    <!-- Prompt box -->
    <div style="background:#0b1120;border:1px solid #1e2d45;border-radius:12px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px">
      <span style="color:#7c5cfc;font-size:20px;margin-top:-2px">←</span>
      <p style="color:#475569;font-size:0.8rem;line-height:1.6;margin:0">
        Pick a component from the <strong style="color:#94a3b8">Gallery</strong> panel on the left,
        or edit the HTML directly. Use <strong style="color:#94a3b8">Token Controls</strong> to
        restyle everything with a single hue slider.
      </p>
    </div>

  </div>
</div>`

const DEFAULT_CSS = `/* Add your custom CSS here */\n`

const DEFAULT_TOKENS: TokenState = {
  hue: 258,
  radius: 0.5,
  spacingScale: 1,
}

// ─── Devices ──────────────────────────────────────────────────────────────────

const DEVICES: { id: Device; label: string; width: number | null }[] = [
  { id: 'full',    label: 'Full',   width: null },
  { id: 'desktop', label: '1280',   width: 1280 },
  { id: 'tablet',  label: '768',    width: 768  },
  { id: 'mobile',  label: '375',    width: 375  },
]

// ─── Colors ───────────────────────────────────────────────────────────────────

const C = {
  bg:          '#0a0f1e',
  header:      '#060b17',
  surface:     '#131929',
  surface2:    '#1a2236',
  surface3:    '#0d1322',
  border:      '#1e2d45',
  borderLight: '#253450',
  text:        '#e2e8f0',
  muted:       '#64748b',
  mutedLight:  '#8899b0',
  accent:      '#7c5cfc',
  accentHov:   '#6b46f0',
  accentDim:   '#7c5cfc22',
  success:     '#0ecb81',
  danger:      '#ef4444',
  gallery:     '#0b1120',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function encode(str: string): string {
  return LZString.compressToEncodedURIComponent(str)
}

function decode(str: string): string {
  try {
    return LZString.decompressFromEncodedURIComponent(str) ?? ''
  } catch { return '' }
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const el = document.createElement('textarea')
    el.value = text
    el.style.cssText = 'position:fixed;top:0;left:0;opacity:0'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
}

function buildTokenCss(tokens: TokenState): string {
  return `:root {
  --vel-dna-hue: ${tokens.hue};
  --vel-color-primary: oklch(65% 0.21 ${tokens.hue});
  --vel-color-primary-dark: oklch(55% 0.21 ${tokens.hue});
  --vel-surface-bg: oklch(7% 0.02 ${tokens.hue});
  --vel-surface-0: oklch(7% 0.02 ${tokens.hue});
  --vel-surface-1: oklch(11% 0.025 ${tokens.hue});
  --vel-surface-2: oklch(14% 0.03 ${tokens.hue});
  --vel-surface-3: oklch(18% 0.035 ${tokens.hue});
  --vel-border-base: oklch(22% 0.04 ${tokens.hue});
  --vel-radius-base: ${tokens.radius}rem;
}`
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeaderBtn({
  onClick, children, active, title,
}: { onClick: () => void; children: React.ReactNode; active?: boolean; title?: string }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
        fontWeight: 500, cursor: 'pointer',
        background: active ? C.accent : C.surface2,
        color: active ? '#fff' : C.muted,
        border: `1px solid ${active ? C.accent : C.border}`,
        transition: 'all .15s',
      }}
    >
      {children}
    </button>
  )
}

function DeviceBtn({
  device, current, onClick,
}: { device: typeof DEVICES[number]; current: Device; onClick: () => void }) {
  const active = device.id === current
  return (
    <button
      onClick={onClick}
      title={device.label === 'Full' ? 'Full width' : `${device.label}px`}
      style={{
        padding: '4px 10px', borderRadius: '5px', fontSize: '11px',
        fontWeight: 500, cursor: 'pointer',
        background: active ? C.accent : 'transparent',
        color: active ? '#fff' : C.muted,
        border: `1px solid ${active ? C.accent : 'transparent'}`,
        transition: 'all .15s',
      }}
    >
      {device.label === 'Full' ? 'Full' : `${device.label}px`}
    </button>
  )
}

// ─── Gallery Panel ────────────────────────────────────────────────────────────

interface GalleryPanelProps {
  activeItemId: string | null
  onSelect: (item: GalleryItem) => void
}

function GalleryPanel({ activeItemId, onSelect }: GalleryPanelProps) {
  const [activeCat, setActiveCat] = useState(GALLERY[0].id)
  const category = GALLERY.find(c => c.id === activeCat) ?? GALLERY[0]

  return (
    <div style={{
      width: '220px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      borderRight: `1px solid ${C.border}`,
      background: C.gallery,
      overflow: 'hidden',
    }}>
      {/* Panel header */}
      <div style={{
        padding: '10px 12px 8px',
        borderBottom: `1px solid ${C.border}`,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted }}>
          Component Gallery
        </span>
      </div>

      {/* Category list */}
      <div style={{ flexShrink: 0, padding: '6px 0', borderBottom: `1px solid ${C.border}` }}>
        {GALLERY.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '6px 14px', fontSize: '12px', fontWeight: activeCat === cat.id ? 600 : 400,
              cursor: 'pointer', border: 'none',
              background: activeCat === cat.id ? C.accentDim : 'transparent',
              color: activeCat === cat.id ? '#c4b5fd' : C.muted,
              borderLeft: activeCat === cat.id ? `2px solid ${C.accent}` : '2px solid transparent',
              transition: 'all .1s',
            }}
          >
            {cat.label}
            <span style={{ float: 'right', opacity: 0.45, fontWeight: 400, fontSize: '11px' }}>
              {cat.items.length}
            </span>
          </button>
        ))}
      </div>

      {/* Component items */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 0' }}>
        {category.items.map(item => {
          const isActive = item.id === activeItemId
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '7px 14px 7px 20px', fontSize: '12px',
                cursor: 'pointer', border: 'none',
                background: isActive ? C.surface2 : 'transparent',
                color: isActive ? C.text : C.mutedLight,
                fontWeight: isActive ? 600 : 400,
                borderLeft: isActive ? `2px solid ${C.accent}` : '2px solid transparent',
                transition: 'all .1s',
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Token Controls ───────────────────────────────────────────────────────────

interface TokenControlsProps {
  tokens: TokenState
  onChange: (t: TokenState) => void
}

function TokenControls({ tokens, onChange }: TokenControlsProps) {
  const set = (key: keyof TokenState, val: number) =>
    onChange({ ...tokens, [key]: val })

  const sliderStyle: React.CSSProperties = {
    width: '100%', height: '4px', cursor: 'pointer',
    accentColor: C.accent,
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '11px', color: C.muted, fontWeight: 500, letterSpacing: '0.04em',
    marginBottom: '4px', display: 'block',
  }

  const valStyle: React.CSSProperties = {
    fontSize: '11px', color: C.accent, fontWeight: 600,
    background: C.accentDim, padding: '1px 6px', borderRadius: '4px',
    border: `1px solid ${C.accent}44`,
    minWidth: '44px', textAlign: 'center',
  }

  return (
    <div style={{
      borderTop: `1px solid ${C.border}`,
      background: C.surface3,
      padding: '12px 16px',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted }}>
          Token Controls
        </span>
        <button
          onClick={() => onChange(DEFAULT_TOKENS)}
          style={{
            fontSize: '10px', color: C.muted, background: 'transparent', border: 'none',
            cursor: 'pointer', padding: '2px 6px', borderRadius: '4px',
          }}
        >
          Reset
        </button>
      </div>

      {/* Hue slider */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={labelStyle}>--vel-dna-hue</span>
          <span style={valStyle}>{tokens.hue}</span>
        </div>
        <input
          type="range" min="0" max="360" step="1"
          value={tokens.hue}
          onChange={e => set('hue', Number(e.target.value))}
          style={{
            ...sliderStyle,
            background: `linear-gradient(to right,
              oklch(65% 0.21 0),oklch(65% 0.21 45),oklch(65% 0.21 90),
              oklch(65% 0.21 135),oklch(65% 0.21 180),oklch(65% 0.21 225),
              oklch(65% 0.21 270),oklch(65% 0.21 315),oklch(65% 0.21 360))`,
            borderRadius: '4px', appearance: 'auto',
          }}
        />
      </div>

      {/* Radius slider */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={labelStyle}>--vel-radius-base</span>
          <span style={valStyle}>{tokens.radius}rem</span>
        </div>
        <input
          type="range" min="0" max="2" step="0.05"
          value={tokens.radius}
          onChange={e => set('radius', Number(e.target.value))}
          style={sliderStyle}
        />
      </div>

      {/* Spacing scale slider */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={labelStyle}>Spacing scale</span>
          <span style={valStyle}>{tokens.spacingScale}x</span>
        </div>
        <input
          type="range" min="0.5" max="2" step="0.05"
          value={tokens.spacingScale}
          onChange={e => set('spacingScale', Number(e.target.value))}
          style={sliderStyle}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3px' }}>
          <span style={{ fontSize: '10px', color: C.muted }}>0.5x</span>
          <span style={{ fontSize: '10px', color: C.muted }}>2x</span>
        </div>
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [html, setHtml]           = useState(DEFAULT_HTML)
  const [customCss, setCustomCss] = useState(DEFAULT_CSS)
  const [activeTab, setActiveTab] = useState<Tab>('html')
  const [device, setDevice]       = useState<Device>('full')
  const [copied, setCopied]       = useState(false)
  const [shared, setShared]       = useState(false)
  const [showGallery, setShowGallery]   = useState(true)
  const [showTokens, setShowTokens]     = useState(false)
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const [tokens, setTokens]             = useState<TokenState>(DEFAULT_TOKENS)

  // Load from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash
    // Legacy single-value code= format
    const legacyMatch = hash.match(/[#&]code=([^&]+)/)
    if (legacyMatch) {
      const decoded = decode(legacyMatch[1])
      if (decoded) {
        try {
          // Try to parse as JSON (new format)
          const parsed = JSON.parse(decoded)
          if (parsed.html) setHtml(parsed.html)
          if (parsed.css) setCustomCss(parsed.css)
          if (parsed.tokens) setTokens({ ...DEFAULT_TOKENS, ...parsed.tokens })
        } catch {
          // Plain HTML (legacy)
          setHtml(decoded)
        }
        setActiveItemId(null)
      }
    }
  }, [])

  const handleCopy = useCallback(() => {
    copyToClipboard(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [html])

  const handleShare = useCallback(() => {
    const payload = JSON.stringify({ html, css: customCss, tokens })
    const compressed = encode(payload)
    const url = `${window.location.origin}${window.location.pathname}#code=${compressed}`
    copyToClipboard(url)
    window.history.replaceState(null, '', `#code=${compressed}`)
    setShared(true)
    setTimeout(() => setShared(false), 2500)
  }, [html, customCss, tokens])

  const handleSelectGalleryItem = useCallback((item: GalleryItem) => {
    setHtml(item.html)
    if (item.css) setCustomCss(item.css)
    setActiveItemId(item.id)
    setActiveTab('html')
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  const currentDevice = DEVICES.find(d => d.id === device)!

  // Build token CSS — always inject (even defaults keep hue coherent)
  const tokenCss = buildTokenCss(tokens)

  // Wrap HTML with spacing scale if not 1x
  const previewHtml = tokens.spacingScale !== 1
    ? `<div style="--vel-space-scale:${tokens.spacingScale}">${html}</div>`
    : html

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: C.bg, color: C.text, fontFamily: 'system-ui, sans-serif',
      overflow: 'hidden',
    }}>

      {/* ── Header ── */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 12px', height: '48px', flexShrink: 0,
        background: C.header, borderBottom: `1px solid ${C.border}`,
        gap: '8px',
      }}>

        {/* Left: Logo + toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <img src={LOGO_URL} alt="VeloraCSS" style={{ height: '28px', width: 'auto' }} />

          <div style={{ width: '1px', height: '20px', background: C.border }} />

          <span style={{
            fontSize: '11px', color: C.muted, background: C.surface2,
            padding: '2px 7px', borderRadius: '4px', border: `1px solid ${C.border}`,
          }}>v1.0.0</span>

          <div style={{ width: '1px', height: '20px', background: C.border }} />

          {/* Gallery toggle */}
          <button
            onClick={() => setShowGallery(v => !v)}
            title="Toggle component gallery"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '5px 10px', borderRadius: '6px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer',
              background: showGallery ? C.accentDim : 'transparent',
              color: showGallery ? '#c4b5fd' : C.muted,
              border: `1px solid ${showGallery ? C.accent + '55' : 'transparent'}`,
              transition: 'all .15s',
            }}
          >
            <span style={{ fontSize: '14px', lineHeight: 1 }}>▤</span>
            Gallery
          </button>

          {/* Token controls toggle */}
          <button
            onClick={() => setShowTokens(v => !v)}
            title="Toggle token controls"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '5px 10px', borderRadius: '6px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer',
              background: showTokens ? C.accentDim : 'transparent',
              color: showTokens ? '#c4b5fd' : C.muted,
              border: `1px solid ${showTokens ? C.accent + '55' : 'transparent'}`,
              transition: 'all .15s',
            }}
          >
            <span style={{ fontSize: '14px', lineHeight: 1 }}>◈</span>
            Tokens
          </button>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {/* Device toggle */}
          <div style={{
            display: 'flex', gap: '2px', background: C.surface,
            padding: '2px', borderRadius: '7px', border: `1px solid ${C.border}`,
            marginRight: '4px',
          }}>
            {DEVICES.map(d => (
              <DeviceBtn key={d.id} device={d} current={device} onClick={() => setDevice(d.id)} />
            ))}
          </div>

          <HeaderBtn onClick={handleCopy}>
            {copied ? '✓ Copied' : 'Copy HTML'}
          </HeaderBtn>
          <HeaderBtn onClick={handleShare} active={shared}>
            {shared ? '✓ Link copied!' : '⇱ Share'}
          </HeaderBtn>
          <a
            href={window.location.hostname === 'localhost' ? 'http://localhost:3000/docs' : `${window.location.origin}/veloracss/docs`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
              background: C.surface2, color: '#c4b5fd',
              border: `1px solid ${C.border}`,
            }}
          >
            Docs
          </a>
          <a
            href={window.location.hostname === 'localhost' ? 'http://localhost:3000' : `${window.location.origin}/veloracss`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
              background: C.surface2, color: C.muted,
              border: `1px solid ${C.border}`,
            }}
          >
            Demo
          </a>
        </div>
      </header>

      {/* ── Main area ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ── Gallery panel ── */}
        {showGallery && (
          <GalleryPanel activeItemId={activeItemId} onSelect={handleSelectGalleryItem} />
        )}

        {/* ── Editor + token controls stack (left half) ── */}
        <div style={{
          width: '50%',
          minWidth: '280px',
          display: 'flex',
          flexDirection: 'column',
          borderRight: `1px solid ${C.border}`,
          overflow: 'hidden',
          flex: showGallery ? 'none' : '0 0 50%',
        }}>
          {/* Tab bar */}
          <div style={{
            display: 'flex', alignItems: 'center',
            borderBottom: `1px solid ${C.border}`, flexShrink: 0,
            background: C.header, height: '38px',
          }}>
            {(['html', 'css'] as Tab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0 18px', height: '38px', fontSize: '12px', fontWeight: 500,
                  background: 'transparent', cursor: 'pointer', border: 'none',
                  color: activeTab === tab ? C.text : C.muted,
                  borderBottom: activeTab === tab ? `2px solid ${C.accent}` : '2px solid transparent',
                  letterSpacing: '0.04em',
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Monaco editor — takes remaining height */}
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            {activeTab === 'html' ? (
              <CodeEditor key="html" value={html} onChange={v => setHtml(v ?? '')} language="html" />
            ) : (
              <CodeEditor key="css" value={customCss} onChange={v => setCustomCss(v ?? '')} language="css" />
            )}
          </div>

          {/* Token controls panel — collapsible */}
          {showTokens && (
            <TokenControls tokens={tokens} onChange={setTokens} />
          )}
        </div>

        {/* ── Preview panel ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          {/* Preview toolbar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 12px', height: '38px', flexShrink: 0,
            background: C.header, borderBottom: `1px solid ${C.border}`,
          }}>
            <span style={{ fontSize: '11px', color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Preview
            </span>
            {tokens.hue !== DEFAULT_TOKENS.hue && (
              <span style={{
                fontSize: '11px', color: '#c4b5fd',
                background: C.accentDim, padding: '2px 8px', borderRadius: '4px',
                border: `1px solid ${C.accent}33`,
              }}>
                hue {tokens.hue}
              </span>
            )}
          </div>

          {/* Preview viewport */}
          <div style={{
            flex: 1, overflow: 'auto',
            display: 'flex', justifyContent: 'center',
            background: device === 'full' ? 'transparent' : '#0d1422',
            padding: device === 'full' ? '0' : '20px',
          }}>
            <div style={{
              width: currentDevice.width ? `${currentDevice.width}px` : '100%',
              height: device === 'full' ? '100%' : 'calc(100vh - 130px)',
              flexShrink: 0,
              borderRadius: device === 'full' ? '0' : '8px',
              overflow: 'hidden',
              boxShadow: device === 'full' ? 'none' : '0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.6)',
            }}>
              <Preview
                html={previewHtml}
                customCss={customCss}
                veloraCss={veloraCss}
                tokenCss={tokenCss}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
