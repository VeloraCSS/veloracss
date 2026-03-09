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
        html: `<div style="padding:2rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
  <span class="vel-badge">Default</span>
  <span class="vel-badge vel-badge-primary">Primary</span>
  <span class="vel-badge vel-badge-success">Success</span>
  <span class="vel-badge vel-badge-danger">Danger</span>
  <span class="vel-badge vel-badge-warning">Warning</span>
  <span class="vel-badge vel-badge-info">Info</span>
  <span class="vel-badge vel-badge-solid-primary">Solid</span>
  <span class="vel-badge vel-badge-dot vel-badge-success">Online</span>
  <span class="vel-badge vel-badge-sm vel-badge-neutral">Small</span>
  <span class="vel-badge vel-badge-lg vel-badge-primary">Large</span>
</div>`,
      },
      {
        id: 'avatar',
        label: 'Avatar',
        html: `<div style="padding:2rem;display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
  <div class="vel-avatar vel-avatar-xs vel-avatar-neutral">XS</div>
  <div class="vel-avatar vel-avatar-sm vel-avatar-neutral">SM</div>
  <div class="vel-avatar vel-avatar-neutral">MD</div>
  <div class="vel-avatar vel-avatar-lg vel-avatar-primary">LG</div>
  <div class="vel-avatar vel-avatar-xl vel-avatar-success">XL</div>
  <div class="vel-avatar vel-avatar-xl vel-avatar-aurora vel-avatar-rounded">AU</div>
  <div class="vel-avatar vel-avatar-lg vel-avatar-primary vel-avatar-ring">VX</div>
</div>`,
      },
      {
        id: 'spinner',
        label: 'Spinner',
        html: `<div style="padding:2rem;display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
  <div class="vel-spinner vel-spinner-xs"></div>
  <div class="vel-spinner vel-spinner-sm"></div>
  <div class="vel-spinner vel-spinner-md vel-spinner-primary"></div>
  <div class="vel-spinner vel-spinner-lg vel-spinner-success"></div>
  <div class="vel-spinner vel-spinner-xl vel-spinner-danger"></div>
  <div class="vel-spinner-dots vel-spinner-primary"><span></span></div>
</div>`,
      },
      {
        id: 'skeleton',
        label: 'Skeleton',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;max-width:24rem">
  <div style="display:flex;gap:1rem;align-items:center">
    <div class="vel-skeleton vel-skeleton-avatar-lg"></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:0.5rem">
      <div class="vel-skeleton vel-skeleton-text vel-skeleton-md" style="width:60%"></div>
      <div class="vel-skeleton vel-skeleton-text vel-skeleton-sm" style="width:40%"></div>
    </div>
  </div>
  <div class="vel-skeleton vel-skeleton-rect vel-skeleton-3xl" style="width:100%;border-radius:0.5rem"></div>
  <div class="vel-skeleton vel-skeleton-text" style="width:100%"></div>
  <div class="vel-skeleton vel-skeleton-text" style="width:80%"></div>
  <div class="vel-skeleton vel-skeleton-text" style="width:50%"></div>
</div>`,
      },
      {
        id: 'divider',
        label: 'Divider',
        html: `<div style="padding:2rem;max-width:28rem;display:flex;flex-direction:column;gap:1rem">
  <p style="color:var(--vel-color-muted)">Above the line</p>
  <div class="vel-divider"></div>
  <p style="color:var(--vel-color-muted)">Simple divider</p>
  <div class="vel-divider">OR</div>
  <p style="color:var(--vel-color-muted)">With label</p>
  <div class="vel-divider vel-divider-primary">Primary</div>
  <p style="color:var(--vel-color-muted)">Primary colored</p>
  <div class="vel-divider vel-divider-left">Left label</div>
</div>`,
      },
      {
        id: 'kbd',
        label: 'Kbd',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1rem">
  <p style="color:var(--vel-color-text)">Save: <kbd class="vel-kbd">Ctrl</kbd> + <kbd class="vel-kbd">S</kbd></p>
  <p style="color:var(--vel-color-text)">Command palette: <kbd class="vel-kbd">⌘</kbd> <kbd class="vel-kbd">K</kbd></p>
  <p style="color:var(--vel-color-text)">Small: <kbd class="vel-kbd vel-kbd-sm">Esc</kbd></p>
  <p style="color:var(--vel-color-text)">Large: <kbd class="vel-kbd vel-kbd-lg">Enter ↵</kbd></p>
</div>`,
      },
      {
        id: 'progress',
        label: 'Progress',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1rem;max-width:28rem">
  <div class="vel-progress vel-progress-lg">
    <div class="vel-progress-bar" style="width:35%"></div>
  </div>
  <div class="vel-progress vel-progress-primary vel-progress-lg">
    <div class="vel-progress-bar" style="width:65%"></div>
  </div>
  <div class="vel-progress vel-progress-success vel-progress-lg">
    <div class="vel-progress-bar" style="width:80%"></div>
  </div>
  <div class="vel-progress vel-progress-danger vel-progress-lg">
    <div class="vel-progress-bar" style="width:50%"></div>
  </div>
  <div class="vel-progress vel-progress-primary vel-progress-lg vel-progress-glow">
    <div class="vel-progress-bar" style="width:72%"></div>
  </div>
  <div class="vel-progress vel-progress-striped vel-progress-primary vel-progress-xl">
    <div class="vel-progress-bar" style="width:55%"></div>
  </div>
  <div class="vel-progress vel-progress-primary vel-progress-md vel-progress-indeterminate">
    <div class="vel-progress-bar"></div>
  </div>
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
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1.25rem;max-width:26rem">
  <div style="display:flex;flex-direction:column;gap:0.375rem">
    <label style="font-size:0.875rem;font-weight:500;color:var(--vel-color-text)">Email address</label>
    <input type="email" class="vel-input" placeholder="you@example.com" />
  </div>
  <div style="display:flex;flex-direction:column;gap:0.375rem">
    <label style="font-size:0.875rem;font-weight:500;color:var(--vel-color-text)">Username</label>
    <input type="text" class="vel-input vel-input-success" value="velora_dev" />
    <p style="font-size:0.75rem;color:var(--vel-color-success)">✓ Username is available</p>
  </div>
  <div style="display:flex;flex-direction:column;gap:0.375rem">
    <label style="font-size:0.875rem;font-weight:500;color:var(--vel-color-text)">Password</label>
    <input type="password" class="vel-input vel-input-danger" value="abc" />
    <p style="font-size:0.75rem;color:var(--vel-color-danger)">✗ Password must be 8+ characters</p>
  </div>
  <select class="vel-select">
    <option>Select a framework</option>
    <option selected>VeloraCSS</option>
    <option>Other</option>
  </select>
  <textarea class="vel-textarea" placeholder="Tell us about your project..." rows="3"></textarea>
  <div style="display:flex;gap:0.5rem">
    <input type="text" class="vel-input vel-input-sm" placeholder="Small input" />
    <input type="text" class="vel-input vel-input-lg" placeholder="Large" />
  </div>
</div>`,
      },
      {
        id: 'file-upload',
        label: 'File Upload',
        html: `<div style="padding:2rem;max-width:26rem;display:flex;flex-direction:column;gap:1rem">
  <div class="vel-dropzone">
    <div class="vel-dropzone-icon">
      <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
    </div>
    <p class="vel-dropzone-text">Drop files here or <span style="color:var(--vel-color-primary);font-weight:500">browse</span></p>
    <p class="vel-dropzone-hint">PNG, JPG, PDF · Max 10MB</p>
  </div>
  <div class="vel-file-list">
    <div class="vel-file-item">
      <span class="vel-file-item-name">design-system.pdf</span>
      <span class="vel-file-item-size">2.4 MB</span>
      <button class="vel-file-item-remove">✕</button>
    </div>
    <div class="vel-file-item">
      <span class="vel-file-item-name">logo-final.png</span>
      <span class="vel-file-item-size">480 KB</span>
      <button class="vel-file-item-remove">✕</button>
    </div>
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
        html: `<div style="padding:2.5rem;max-width:42rem">
  <h1 style="color:var(--vel-color-text);font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;margin:0 0 0.5rem;letter-spacing:-0.03em">Typography Scale</h1>
  <p style="color:var(--vel-color-muted);font-size:1rem;margin:0 0 2rem">Font sizes, weights, and text utilities.</p>

  <div style="margin-bottom:2rem">
    <p style="font-size:0.65rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--vel-color-muted);margin:0 0 0.75rem">Sizes</p>
    <p class="vel-text-xs" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-xs — The quick brown fox</p>
    <p class="vel-text-sm" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-sm — The quick brown fox</p>
    <p class="vel-text-base" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-base — The quick brown fox</p>
    <p class="vel-text-lg" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-lg — The quick brown fox</p>
    <p class="vel-text-xl" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-xl — The quick brown fox</p>
    <p class="vel-text-2xl" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-2xl — Brown fox</p>
    <p class="vel-text-3xl" style="color:var(--vel-color-text);margin:0 0 0.375rem">vel-text-3xl — Fox</p>
  </div>

  <div style="margin-bottom:2rem">
    <p style="font-size:0.65rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--vel-color-muted);margin:0 0 0.75rem">Weights</p>
    <p class="vel-text-xl vel-font-thin" style="color:var(--vel-color-text);margin:0 0 0.25rem">Thin — 100</p>
    <p class="vel-text-xl vel-font-light" style="color:var(--vel-color-text);margin:0 0 0.25rem">Light — 300</p>
    <p class="vel-text-xl vel-font-normal" style="color:var(--vel-color-text);margin:0 0 0.25rem">Normal — 400</p>
    <p class="vel-text-xl vel-font-medium" style="color:var(--vel-color-text);margin:0 0 0.25rem">Medium — 500</p>
    <p class="vel-text-xl vel-font-semibold" style="color:var(--vel-color-text);margin:0 0 0.25rem">Semibold — 600</p>
    <p class="vel-text-xl vel-font-bold" style="color:var(--vel-color-text);margin:0 0 0.25rem">Bold — 700</p>
    <p class="vel-text-xl vel-font-extrabold" style="color:var(--vel-color-text);margin:0 0 0.25rem">Extrabold — 800</p>
    <p class="vel-text-xl vel-font-black" style="color:var(--vel-color-text);margin:0">Black — 900</p>
  </div>

  <div>
    <p style="font-size:0.65rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--vel-color-muted);margin:0 0 0.75rem">Colors</p>
    <p class="vel-text-primary vel-text-lg vel-font-medium" style="margin:0 0 0.25rem">vel-text-primary</p>
    <p class="vel-text-success vel-text-lg vel-font-medium" style="margin:0 0 0.25rem">vel-text-success</p>
    <p class="vel-text-danger vel-text-lg vel-font-medium" style="margin:0 0 0.25rem">vel-text-danger</p>
    <p class="vel-text-warning vel-text-lg vel-font-medium" style="margin:0 0 0.25rem">vel-text-warning</p>
    <p class="vel-text-info vel-text-lg vel-font-medium" style="margin:0 0 0.25rem">vel-text-info</p>
    <p class="vel-text-muted vel-text-lg vel-font-medium" style="margin:0">vel-text-muted</p>
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
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1rem">
  <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
    <button class="vel-btn vel-btn-primary">Primary</button>
    <button class="vel-btn vel-btn-secondary">Secondary</button>
    <button class="vel-btn vel-btn-success">Success</button>
    <button class="vel-btn vel-btn-danger">Danger</button>
    <button class="vel-btn vel-btn-warning">Warning</button>
    <button class="vel-btn vel-btn-info">Info</button>
  </div>
  <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
    <button class="vel-btn vel-btn-outline vel-btn-primary">Outline</button>
    <button class="vel-btn vel-btn-ghost">Ghost</button>
    <button class="vel-btn vel-btn-link">Link style</button>
    <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
  </div>
  <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap">
    <button class="vel-btn vel-btn-primary vel-btn-xs">XS</button>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
    <button class="vel-btn vel-btn-primary">Default</button>
    <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
    <button class="vel-btn vel-btn-primary vel-btn-xl">X-Large</button>
  </div>
</div>`,
      },
      {
        id: 'alert',
        label: 'Alert',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:0.75rem;max-width:32rem">
  <div class="vel-alert vel-alert-info">
    <strong class="vel-alert-title">Info</strong> Your session will expire in 15 minutes.
  </div>
  <div class="vel-alert vel-alert-success">
    <strong class="vel-alert-title">Success</strong> Your profile has been updated.
  </div>
  <div class="vel-alert vel-alert-warning">
    <strong class="vel-alert-title">Warning</strong> API rate limit at 90%. Slow down requests.
  </div>
  <div class="vel-alert vel-alert-danger">
    <strong class="vel-alert-title">Error</strong> Failed to save. Please try again.
  </div>
  <div class="vel-alert vel-alert-filled-primary">
    <strong class="vel-alert-title">Filled</strong> This is a filled primary alert variant.
  </div>
</div>`,
      },
      {
        id: 'card',
        label: 'Card',
        html: `<div style="padding:2rem;display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;max-width:40rem">
  <div class="vel-card">
    <div class="vel-card-header">Default Card</div>
    <div class="vel-card-body">Standard surface card with header, body, and footer sections.</div>
    <div class="vel-card-footer"><button class="vel-btn vel-btn-primary vel-btn-sm">Action</button></div>
  </div>
  <div class="vel-card vel-card-elevated">
    <div class="vel-card-header">Elevated</div>
    <div class="vel-card-body">Elevated card with enhanced shadow depth.</div>
  </div>
  <div class="vel-card vel-card-primary">
    <div class="vel-card-body">Primary accent card — great for featured content or callouts.</div>
  </div>
  <div class="vel-card vel-card-glass">
    <div class="vel-card-body">Glass card with backdrop blur and translucent background.</div>
  </div>
</div>`,
      },
      {
        id: 'accordion',
        label: 'Accordion',
        html: `<div style="padding:2rem;max-width:30rem">
  <div class="vel-accordion">
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        What is Color Genetics?
        <span class="vel-accordion-trigger-icon">▾</span>
      </button>
      <div class="vel-accordion-content">
        Color Genetics derives all 50+ framework colors from a single --vel-dna-hue value using oklch(). Change one number and your entire UI recolors instantly.
      </div>
    </div>
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        Does VeloraCSS require JavaScript?
        <span class="vel-accordion-trigger-icon">▾</span>
      </button>
      <div class="vel-accordion-content">
        No. Modals, tabs, dropdowns, carousels, and accordions all work via CSS :has() and radio input state machines. Zero JavaScript required.
      </div>
    </div>
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        How do I install VeloraCSS?
        <span class="vel-accordion-trigger-icon">▾</span>
      </button>
      <div class="vel-accordion-content">
        Run: npm install veloracss — then @import 'veloracss' in your CSS. Or link the CDN directly. That's it.
      </div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'modal',
        label: 'Modal',
        html: `<!-- Modal shown open for demo purposes -->
<div style="padding:2rem;position:relative;height:26rem;overflow:hidden">
  <div style="position:absolute;inset:0;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center">
    <div class="vel-modal" style="position:relative;animation:none">
      <div class="vel-modal-header">
        Confirm Delete
        <button class="vel-modal-close">✕</button>
      </div>
      <div class="vel-modal-body">
        <p>Are you sure you want to delete <strong>project-alpha</strong>? This action cannot be undone and all associated data will be permanently removed.</p>
      </div>
      <div class="vel-modal-footer">
        <button class="vel-btn vel-btn-ghost vel-btn-sm">Cancel</button>
        <button class="vel-btn vel-btn-danger vel-btn-sm">Delete project</button>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'dropdown',
        label: 'Dropdown',
        html: `<div style="padding:2rem;display:flex;gap:2rem">
  <div class="vel-dropdown">
    <button class="vel-btn vel-btn-secondary vel-dropdown-trigger">Options ▾</button>
    <div class="vel-dropdown-menu">
      <span class="vel-dropdown-header">Account</span>
      <a class="vel-dropdown-item">View profile</a>
      <a class="vel-dropdown-item">Settings</a>
      <a class="vel-dropdown-item">Billing</a>
      <div class="vel-dropdown-divider"></div>
      <a class="vel-dropdown-item vel-dropdown-item-danger">Sign out</a>
    </div>
  </div>
  <div class="vel-dropdown">
    <button class="vel-btn vel-btn-primary vel-dropdown-trigger">Actions ▾</button>
    <div class="vel-dropdown-menu">
      <a class="vel-dropdown-item">Edit</a>
      <a class="vel-dropdown-item">Duplicate</a>
      <a class="vel-dropdown-item">Export</a>
      <div class="vel-dropdown-divider"></div>
      <a class="vel-dropdown-item vel-dropdown-item-danger">Delete</a>
    </div>
  </div>
</div>`,
      },
      {
        id: 'tooltip',
        label: 'Tooltip',
        html: `<div style="padding:3rem;display:flex;gap:2rem;justify-content:center;align-items:center;flex-wrap:wrap">
  <div class="vel-tooltip">
    <button class="vel-btn vel-btn-secondary">Default</button>
    <span class="vel-tooltip-content">This is a tooltip</span>
  </div>
  <div class="vel-tooltip">
    <button class="vel-btn vel-btn-primary">Hover me</button>
    <span class="vel-tooltip-content">Built with pure CSS</span>
  </div>
</div>`,
      },
      {
        id: 'toast',
        label: 'Toast',
        html: `<div style="padding:2rem;position:relative;height:22rem;overflow:hidden">
  <div class="vel-toast-container vel-toast-top-right" style="position:absolute">
    <div class="vel-toast vel-toast-success">
      <span class="vel-toast-icon">✓</span>
      <div class="vel-toast-content">
        <div class="vel-toast-title">Saved successfully</div>
        Changes have been persisted.
      </div>
      <button class="vel-toast-close">✕</button>
    </div>
    <div class="vel-toast vel-toast-info">
      <span class="vel-toast-icon">ℹ</span>
      <div class="vel-toast-content">
        <div class="vel-toast-title">Update available</div>
        VeloraCSS v1.1 is ready.
      </div>
      <button class="vel-toast-close">✕</button>
    </div>
    <div class="vel-toast vel-toast-danger">
      <span class="vel-toast-icon">✕</span>
      <div class="vel-toast-content">
        <div class="vel-toast-title">Upload failed</div>
        File exceeds size limit.
      </div>
      <button class="vel-toast-close">✕</button>
    </div>
    <div class="vel-toast vel-toast-warning">
      <span class="vel-toast-icon">⚠</span>
      <div class="vel-toast-content">
        <div class="vel-toast-title">Rate limit warning</div>
        90% of API quota used.
      </div>
      <button class="vel-toast-close">✕</button>
    </div>
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
    <a class="vel-navbar-brand">⬡ VeloraCSS</a>
    <div class="vel-navbar-nav">
      <a class="vel-navbar-link vel-active">Docs</a>
      <a class="vel-navbar-link">Components</a>
      <a class="vel-navbar-link">Playground</a>
      <a class="vel-navbar-link">Community</a>
    </div>
    <div class="vel-navbar-end">
      <span class="vel-badge vel-badge-solid-primary vel-badge-sm">v1.0</span>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get started</button>
    </div>
  </nav>
  <nav class="vel-navbar vel-navbar-glass" style="margin-top:1rem">
    <a class="vel-navbar-brand">⬡ Glass Navbar</a>
    <div class="vel-navbar-nav">
      <a class="vel-navbar-link vel-active">Home</a>
      <a class="vel-navbar-link">About</a>
    </div>
  </nav>
</div>`,
      },
      {
        id: 'breadcrumb',
        label: 'Breadcrumb',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem">
  <nav class="vel-breadcrumb">
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Home</a>
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Docs</a>
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Components</a>
    <span class="vel-breadcrumb-item vel-breadcrumb-active">Breadcrumb</span>
  </nav>
  <nav class="vel-breadcrumb vel-breadcrumb-chevron">
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Dashboard</a>
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Projects</a>
    <span class="vel-breadcrumb-item vel-breadcrumb-active">velora-ui</span>
  </nav>
  <nav class="vel-breadcrumb vel-breadcrumb-dot">
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Settings</a>
    <a class="vel-breadcrumb-item vel-breadcrumb-link">Account</a>
    <span class="vel-breadcrumb-item vel-breadcrumb-active">Security</span>
  </nav>
</div>`,
      },
      {
        id: 'menu',
        label: 'Menu',
        html: `<div style="padding:2rem;display:flex;gap:2rem">
  <div class="vel-menu" style="width:13rem">
    <div class="vel-menu-label">Main</div>
    <ul class="vel-menu-list">
      <li class="vel-menu-item">
        <a class="vel-menu-link vel-menu-link-active">
          <span class="vel-menu-link-icon">⊞</span> Dashboard
        </a>
      </li>
      <li class="vel-menu-item">
        <a class="vel-menu-link">
          <span class="vel-menu-link-icon">◫</span> Projects
        </a>
      </li>
      <li class="vel-menu-item">
        <a class="vel-menu-link">
          <span class="vel-menu-link-icon">◎</span> Analytics
        </a>
      </li>
    </ul>
    <div class="vel-menu-label">Account</div>
    <ul class="vel-menu-list">
      <li class="vel-menu-item"><a class="vel-menu-link">Settings</a></li>
      <li class="vel-menu-item"><a class="vel-menu-link" style="color:var(--vel-color-danger)">Sign out</a></li>
    </ul>
  </div>
</div>`,
      },
      {
        id: 'tabs',
        label: 'Tabs',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem">
  <!-- Underline tabs (default) -->
  <div>
    <div class="vel-tabs">
      <button class="vel-tab vel-active">Overview</button>
      <button class="vel-tab">Details</button>
      <button class="vel-tab">Activity</button>
      <button class="vel-tab">Settings</button>
    </div>
    <div class="vel-tab-panel vel-active">
      <p style="color:var(--vel-color-muted);padding-top:0.5rem">Overview content — no JavaScript required for styling.</p>
    </div>
  </div>
  <!-- Pill tabs -->
  <div>
    <div class="vel-tabs-pill">
      <button class="vel-tab">All</button>
      <button class="vel-tab vel-active">Published</button>
      <button class="vel-tab">Drafts</button>
      <button class="vel-tab">Archived</button>
    </div>
  </div>
  <!-- Boxed tabs -->
  <div>
    <div class="vel-tabs-boxed">
      <button class="vel-tab vel-active">HTML</button>
      <button class="vel-tab">CSS</button>
      <button class="vel-tab">Preview</button>
    </div>
  </div>
</div>`,
      },
      {
        id: 'pagination',
        label: 'Pagination',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;align-items:center">
  <nav class="vel-pagination">
    <li class="vel-page-item"><a class="vel-page-link vel-page-link-disabled">‹ Prev</a></li>
    <li class="vel-page-item"><a class="vel-page-link vel-page-link-active">1</a></li>
    <li class="vel-page-item"><a class="vel-page-link">2</a></li>
    <li class="vel-page-item"><a class="vel-page-link">3</a></li>
    <li class="vel-page-ellipsis">…</li>
    <li class="vel-page-item"><a class="vel-page-link">12</a></li>
    <li class="vel-page-item"><a class="vel-page-link">Next ›</a></li>
  </nav>
  <nav class="vel-pagination vel-pagination-sm">
    <li class="vel-page-item"><a class="vel-page-link">1</a></li>
    <li class="vel-page-item"><a class="vel-page-link vel-page-link-active">2</a></li>
    <li class="vel-page-item"><a class="vel-page-link">3</a></li>
  </nav>
  <nav class="vel-pagination vel-pagination-lg">
    <li class="vel-page-item"><a class="vel-page-link">Prev</a></li>
    <li class="vel-page-item"><a class="vel-page-link vel-page-link-active">1</a></li>
    <li class="vel-page-item"><a class="vel-page-link">2</a></li>
    <li class="vel-page-item"><a class="vel-page-link">Next</a></li>
  </nav>
</div>`,
      },
      {
        id: 'steps',
        label: 'Steps',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:2.5rem">
  <!-- Horizontal -->
  <div class="vel-steps">
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">✓</div>
      <div class="vel-step-label">Account</div>
    </div>
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">✓</div>
      <div class="vel-step-label">Verify</div>
    </div>
    <div class="vel-step vel-step-active">
      <div class="vel-step-indicator">3</div>
      <div class="vel-step-label">Profile</div>
    </div>
    <div class="vel-step">
      <div class="vel-step-indicator">4</div>
      <div class="vel-step-label">Plan</div>
    </div>
    <div class="vel-step">
      <div class="vel-step-indicator">5</div>
      <div class="vel-step-label">Done</div>
    </div>
  </div>
  <!-- Vertical -->
  <div class="vel-steps vel-steps-vertical" style="max-width:20rem">
    <div class="vel-step vel-step-complete">
      <div class="vel-step-indicator">✓</div>
      <div class="vel-step-content">
        <div class="vel-step-label">Repository created</div>
        <div class="vel-step-description">veloracss/veloracss initialized</div>
      </div>
    </div>
    <div class="vel-step vel-step-active">
      <div class="vel-step-indicator">2</div>
      <div class="vel-step-content">
        <div class="vel-step-label">Running CI</div>
        <div class="vel-step-description">Build and tests in progress…</div>
      </div>
    </div>
    <div class="vel-step">
      <div class="vel-step-indicator">3</div>
      <div class="vel-step-content">
        <div class="vel-step-label">Deploy to production</div>
        <div class="vel-step-description">GitHub Pages deployment</div>
      </div>
    </div>
  </div>
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
        html: `<div style="padding:2rem">
  <div class="vel-table-wrapper">
    <table class="vel-table vel-table-hover vel-table-striped">
      <thead>
        <tr>
          <th data-sortable>Name</th>
          <th data-sortable>Role</th>
          <th data-sortable>Status</th>
          <th data-sortable>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Alice Chen</strong></td>
          <td>Lead Designer</td>
          <td><span class="vel-badge vel-badge-solid-success">Active</span></td>
          <td>Jan 2024</td>
          <td><button class="vel-btn vel-btn-ghost vel-btn-xs">Edit</button></td>
        </tr>
        <tr>
          <td><strong>Bob Smith</strong></td>
          <td>Senior Engineer</td>
          <td><span class="vel-badge vel-badge-solid-success">Active</span></td>
          <td>Feb 2024</td>
          <td><button class="vel-btn vel-btn-ghost vel-btn-xs">Edit</button></td>
        </tr>
        <tr class="vel-tr-warning">
          <td><strong>Carol White</strong></td>
          <td>Product Manager</td>
          <td><span class="vel-badge vel-badge-warning">Away</span></td>
          <td>Mar 2024</td>
          <td><button class="vel-btn vel-btn-ghost vel-btn-xs">Edit</button></td>
        </tr>
        <tr class="vel-tr-danger">
          <td><strong>Dan Torres</strong></td>
          <td>QA Engineer</td>
          <td><span class="vel-badge vel-badge-danger">Suspended</span></td>
          <td>Apr 2024</td>
          <td><button class="vel-btn vel-btn-ghost vel-btn-xs">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
      },
      {
        id: 'charts',
        label: 'Charts',
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:2rem">
  <!-- Bar chart -->
  <div class="vel-chart-bar">
    <div class="vel-chart-axis-y"></div>
    <div class="vel-chart-grid">
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
      <div class="vel-chart-grid-line"></div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-primary">
      <div class="vel-chart-bar-value">42k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:55%"></div>
      <div class="vel-chart-bar-label">Jan</div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-primary">
      <div class="vel-chart-bar-value">58k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:70%"></div>
      <div class="vel-chart-bar-label">Feb</div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-success">
      <div class="vel-chart-bar-value">81k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:90%"></div>
      <div class="vel-chart-bar-label">Mar</div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-primary">
      <div class="vel-chart-bar-value">63k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:72%"></div>
      <div class="vel-chart-bar-label">Apr</div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-warning">
      <div class="vel-chart-bar-value">39k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:45%"></div>
      <div class="vel-chart-bar-label">May</div>
    </div>
    <div class="vel-chart-bar-group vel-chart-bar-primary">
      <div class="vel-chart-bar-value">74k</div>
      <div class="vel-chart-bar-fill" style="--vel-bar-h:82%"></div>
      <div class="vel-chart-bar-label">Jun</div>
    </div>
  </div>
  <!-- Progress rings -->
  <div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap">
    <div class="vel-chart-ring vel-chart-ring-primary">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill" cx="50" cy="50" r="42" style="--vel-ring-pct:72"/>
      </svg>
      <div class="vel-chart-ring-label">72%<span class="vel-chart-ring-label-sub">Revenue</span></div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-success">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill" cx="50" cy="50" r="42" style="--vel-ring-pct:88"/>
      </svg>
      <div class="vel-chart-ring-label">88%<span class="vel-chart-ring-label-sub">Uptime</span></div>
    </div>
    <div class="vel-chart-ring vel-chart-ring-danger vel-chart-ring-lg">
      <svg class="vel-chart-ring-svg" viewBox="0 0 100 100">
        <circle class="vel-chart-ring-track" cx="50" cy="50" r="42"/>
        <circle class="vel-chart-ring-fill" cx="50" cy="50" r="42" style="--vel-ring-pct:34"/>
      </svg>
      <div class="vel-chart-ring-label">34%<span class="vel-chart-ring-label-sub">Errors</span></div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'calendar',
        label: 'Calendar',
        html: `<div style="padding:2rem;display:flex;justify-content:center">
  <div class="vel-calendar" style="width:22rem">
    <div class="vel-calendar-header">
      <button class="vel-calendar-nav-btn">‹</button>
      <span class="vel-calendar-title">March 2026</span>
      <button class="vel-calendar-nav-btn">›</button>
    </div>
    <div class="vel-calendar-weekdays">
      <span class="vel-calendar-weekday">Su</span>
      <span class="vel-calendar-weekday">Mo</span>
      <span class="vel-calendar-weekday">Tu</span>
      <span class="vel-calendar-weekday">We</span>
      <span class="vel-calendar-weekday">Th</span>
      <span class="vel-calendar-weekday">Fr</span>
      <span class="vel-calendar-weekday">Sa</span>
    </div>
    <div class="vel-calendar-grid">
      <button class="vel-calendar-day vel-calendar-day-disabled" tabindex="-1"></button>
      <button class="vel-calendar-day">1</button>
      <button class="vel-calendar-day">2</button>
      <button class="vel-calendar-day">3</button>
      <button class="vel-calendar-day">4</button>
      <button class="vel-calendar-day">5</button>
      <button class="vel-calendar-day">6</button>
      <button class="vel-calendar-day">7</button>
      <button class="vel-calendar-day vel-calendar-day-today">8</button>
      <button class="vel-calendar-day vel-calendar-day-range">9</button>
      <button class="vel-calendar-day vel-calendar-day-range">10</button>
      <button class="vel-calendar-day vel-calendar-day-selected">11</button>
      <button class="vel-calendar-day">12</button>
      <button class="vel-calendar-day">13</button>
      <button class="vel-calendar-day">14</button>
      <button class="vel-calendar-day">15</button>
      <button class="vel-calendar-day">16</button>
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
        html: `<div class="vel-hero vel-hero-gradient">
  <div class="vel-hero-content">
    <p class="vel-hero-eyebrow">New — v1.0 Released</p>
    <h1 class="vel-hero-title">Build interfaces<br>at the speed of thought</h1>
    <p class="vel-hero-subtitle">VeloraCSS — utility-first, component-rich, zero JavaScript. One hue value drives your entire color universe.</p>
    <div class="vel-hero-actions">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Get started free</button>
      <button class="vel-btn vel-btn-ghost vel-btn-lg">View on GitHub ↗</button>
    </div>
  </div>
</div>`,
      },
      {
        id: 'feature-list',
        label: 'Feature List',
        html: `<div class="vel-features">
  <div class="vel-features-grid">
    <div class="vel-feature-card">
      <div class="vel-feature-icon vel-feature-icon-primary">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <div class="vel-feature-title">Zero JavaScript</div>
      <div class="vel-feature-text">Modals, tabs, dropdowns, carousels — all pure CSS state machines using :has() and radio inputs.</div>
    </div>
    <div class="vel-feature-card">
      <div class="vel-feature-icon vel-feature-icon-success">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
      </div>
      <div class="vel-feature-title">Color Genetics</div>
      <div class="vel-feature-text">Set --vel-dna-hue once. Fifty+ colors, all surfaces, all states — derived automatically via oklch().</div>
    </div>
    <div class="vel-feature-card">
      <div class="vel-feature-icon vel-feature-icon-info">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      </div>
      <div class="vel-feature-title">Container Intelligence</div>
      <div class="vel-feature-text">@container queries let components respond to their own size, not the viewport. No breakpoint hell.</div>
    </div>
    <div class="vel-feature-card">
      <div class="vel-feature-icon vel-feature-icon-warning">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div class="vel-feature-title">Fluid Scale</div>
      <div class="vel-feature-text">Every spacing and type token uses clamp(). Scale beautifully from mobile to 4K without a single breakpoint.</div>
    </div>
  </div>
</div>`,
      },
      {
        id: 'pricing',
        label: 'Pricing',
        html: `<div class="vel-pricing-grid" style="padding:2rem">
  <div class="vel-pricing-card">
    <div class="vel-pricing-name">Starter</div>
    <div class="vel-pricing-price">$0<span class="vel-pricing-period">/mo</span></div>
    <p class="vel-pricing-description">Everything you need to get started.</p>
    <div class="vel-pricing-divider"></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> 5 projects</li>
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> 1 GB storage</li>
      <li class="vel-pricing-feature" style="opacity:.45"><span class="vel-pricing-feature-check">—</span> Custom domain</li>
    </ul>
    <div class="vel-pricing-cta"><button class="vel-btn vel-btn-outline vel-btn-block">Get started</button></div>
  </div>
  <div class="vel-pricing-card vel-pricing-card-featured">
    <div class="vel-pricing-badge">Most popular</div>
    <div class="vel-pricing-name">Pro</div>
    <div class="vel-pricing-price">$12<span class="vel-pricing-period">/mo</span></div>
    <p class="vel-pricing-description">For teams building serious products.</p>
    <div class="vel-pricing-divider"></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> Unlimited projects</li>
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> 50 GB storage</li>
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> Custom domain</li>
    </ul>
    <div class="vel-pricing-cta"><button class="vel-btn vel-btn-primary vel-btn-block">Upgrade to Pro</button></div>
  </div>
  <div class="vel-pricing-card">
    <div class="vel-pricing-name">Team</div>
    <div class="vel-pricing-price">$49<span class="vel-pricing-period">/mo</span></div>
    <p class="vel-pricing-description">For growing teams and organizations.</p>
    <div class="vel-pricing-divider"></div>
    <ul class="vel-pricing-features">
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> Everything in Pro</li>
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> 10 team seats</li>
      <li class="vel-pricing-feature"><span class="vel-pricing-feature-check">✓</span> Priority support</li>
    </ul>
    <div class="vel-pricing-cta"><button class="vel-btn vel-btn-outline vel-btn-block">Contact sales</button></div>
  </div>
</div>`,
      },
      {
        id: 'carousel',
        label: 'Carousel',
        html: `<div style="padding:2rem;max-width:36rem">
  <div class="vel-carousel">
    <input type="radio" name="demo-carousel" id="vel-slide-1" checked />
    <input type="radio" name="demo-carousel" id="vel-slide-2" />
    <input type="radio" name="demo-carousel" id="vel-slide-3" />
    <div class="vel-carousel-track">
      <div class="vel-carousel-slide">
        <div class="vel-card vel-card-primary" style="margin:0;border-radius:0;min-height:12rem;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:0.5rem;padding:2rem">
          <h3 style="font-size:1.25rem;font-weight:700;color:var(--vel-color-text)">Color Genetics</h3>
          <p style="color:var(--vel-color-muted)">One hue. Fifty+ colors. All derived via oklch().</p>
        </div>
      </div>
      <div class="vel-carousel-slide">
        <div class="vel-card vel-card-filled" style="margin:0;border-radius:0;min-height:12rem;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:0.5rem;padding:2rem">
          <h3 style="font-size:1.25rem;font-weight:700;color:var(--vel-color-text)">Zero JS</h3>
          <p style="color:var(--vel-color-muted)">Modals, tabs, carousels — pure CSS state machines.</p>
        </div>
      </div>
      <div class="vel-carousel-slide">
        <div class="vel-card vel-card-glass" style="margin:0;border-radius:0;min-height:12rem;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:0.5rem;padding:2rem">
          <h3 style="font-size:1.25rem;font-weight:700;color:var(--vel-color-text)">Container Smart</h3>
          <p style="color:var(--vel-color-muted)">Components adapt to their container, not the viewport.</p>
        </div>
      </div>
    </div>
    <div class="vel-carousel-arrows">
      <label for="vel-slide-3" class="vel-carousel-prev">‹</label>
      <label for="vel-slide-2" class="vel-carousel-next">›</label>
    </div>
    <div class="vel-carousel-dots">
      <label for="vel-slide-1" class="vel-carousel-dot">1</label>
      <label for="vel-slide-2" class="vel-carousel-dot">2</label>
      <label for="vel-slide-3" class="vel-carousel-dot">3</label>
    </div>
  </div>
</div>`,
      },
      {
        id: 'chat-bubble',
        label: 'Chat Bubble',
        html: `<div style="padding:2rem;max-width:28rem;display:flex;flex-direction:column;gap:0.75rem">
  <div class="vel-chat vel-chat-start">
    <div class="vel-chat-bubble">Hey, I just installed VeloraCSS — this is wild.</div>
    <div class="vel-chat-meta">Alex · 2:31 PM</div>
  </div>
  <div class="vel-chat vel-chat-end">
    <div class="vel-chat-bubble vel-chat-bubble-primary">Right? Color Genetics is insane. One CSS variable = full theme.</div>
    <div class="vel-chat-meta">You · 2:32 PM</div>
  </div>
  <div class="vel-chat vel-chat-start">
    <div class="vel-chat-bubble">And all those components with zero JS? How??</div>
    <div class="vel-chat-meta">Alex · 2:33 PM</div>
  </div>
  <div class="vel-chat vel-chat-end">
    <div class="vel-chat-bubble vel-chat-bubble-info">:has() selector + radio inputs. CSS state machines. It's all in the docs.</div>
    <div class="vel-chat-meta">You · 2:34 PM</div>
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
        html: `<div style="padding:2rem;display:flex;flex-direction:column;gap:1.5rem;max-width:36rem">
  <div class="vel-code-block">
    <div class="vel-code-block-header">
      <span class="vel-code-block-lang">CSS</span>
      <span class="vel-code-block-filename">tokens.css</span>
      <button class="vel-code-block-copy">Copy</button>
    </div>
    <div class="vel-code-block-body">
      <pre><code>/* Color Genetics — one hue, 50+ colors */
--vel-dna-hue: 258;
--vel-color-primary: oklch(65% 0.21 var(--vel-dna-hue));
--vel-surface-0:     oklch(7%  0.02 var(--vel-dna-hue));
--vel-surface-1:     oklch(11% 0.025 var(--vel-dna-hue));</code></pre>
    </div>
  </div>
  <div class="vel-code-block vel-code-block-terminal">
    <div class="vel-code-block-header">
      <span class="vel-code-block-filename">Terminal</span>
    </div>
    <div class="vel-code-block-body">
      <pre><code>npm install veloracss

# Import in your CSS
@import 'veloracss';</code></pre>
    </div>
  </div>
</div>`,
      },
    ],
  },
]

// ─── Default HTML (Starter) ───────────────────────────────────────────────────

const DEFAULT_HTML = `<!-- VeloraCSS Playground — edit this HTML and see changes live -->
<div style="min-height:100vh;background:var(--vel-surface-bg,#060b17);padding:0;font-family:system-ui,sans-serif">

  <!-- Navbar -->
  <nav class="vel-navbar">
    <span class="vel-navbar-brand">⬡ VeloraCSS</span>
    <div class="vel-navbar-nav">
      <a class="vel-navbar-link vel-active">Docs</a>
      <a class="vel-navbar-link">Components</a>
      <a class="vel-navbar-link">Community</a>
    </div>
    <div class="vel-navbar-end">
      <span class="vel-badge vel-badge-solid-primary vel-badge-sm">v1.0</span>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get started</button>
    </div>
  </nav>

  <!-- Hero eyebrow + headline -->
  <div style="padding:3rem 2rem 1.5rem;max-width:52rem;margin:0 auto">
    <p class="vel-hero-eyebrow" style="margin-bottom:0.75rem">AI-designed. Human-shipped.</p>
    <h1 style="color:var(--vel-color-text);font-size:clamp(2rem,5vw,3.25rem);font-weight:800;line-height:1.1;letter-spacing:-0.04em;margin:0 0 1rem">
      Build interfaces<br>at the speed of thought
    </h1>
    <p style="color:var(--vel-color-muted);font-size:1.0625rem;line-height:1.7;margin:0 0 2rem;max-width:36rem">
      VeloraCSS — utility-first, component-rich. One CSS variable drives your entire color universe. Zero JavaScript required.
    </p>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:2.5rem">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Get started free</button>
      <button class="vel-btn vel-btn-ghost vel-btn-lg">View docs ↗</button>
    </div>

    <!-- Badge cluster -->
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2.5rem">
      <span class="vel-badge vel-badge-solid-primary">Utility-first</span>
      <span class="vel-badge vel-badge-success">Zero JS</span>
      <span class="vel-badge vel-badge-info">Container queries</span>
      <span class="vel-badge vel-badge-warning">Fluid scale</span>
      <span class="vel-badge vel-badge-neutral">oklch colors</span>
    </div>
  </div>

  <!-- Card grid -->
  <div style="padding:0 2rem 3rem;max-width:52rem;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem">

    <div class="vel-card vel-card-elevated">
      <div class="vel-card-header" style="display:flex;justify-content:space-between;align-items:center">
        Color Genetics
        <span class="vel-badge vel-badge-primary vel-badge-sm">New</span>
      </div>
      <div class="vel-card-body">Set <code style="color:var(--vel-color-primary);background:var(--vel-surface-2);padding:1px 5px;border-radius:4px">--vel-dna-hue</code> once. 50+ colors derived automatically via oklch().</div>
      <div class="vel-card-footer">
        <div class="vel-progress vel-progress-primary vel-progress-sm">
          <div class="vel-progress-bar" style="width:100%"></div>
        </div>
      </div>
    </div>

    <div class="vel-card vel-card-elevated">
      <div class="vel-card-header" style="display:flex;justify-content:space-between;align-items:center">
        Zero JS
        <span class="vel-badge vel-badge-success vel-badge-sm">Pure CSS</span>
      </div>
      <div class="vel-card-body">Modals, tabs, carousels, and dropdowns all work via CSS :has() and radio input state machines.</div>
      <div class="vel-card-footer">
        <button class="vel-btn vel-btn-ghost vel-btn-sm">See examples →</button>
      </div>
    </div>

    <div class="vel-card vel-card-elevated">
      <div class="vel-card-header" style="display:flex;justify-content:space-between;align-items:center">
        Fluid Scale
        <span class="vel-badge vel-badge-info vel-badge-sm">clamp()</span>
      </div>
      <div class="vel-card-body">Every spacing and type token uses clamp(). Scales from mobile to 4K without a single breakpoint.</div>
      <div class="vel-card-footer">
        <div style="display:flex;gap:0.5rem">
          <div class="vel-avatar vel-avatar-xs vel-avatar-primary">A</div>
          <div class="vel-avatar vel-avatar-xs vel-avatar-success">B</div>
          <div class="vel-avatar vel-avatar-xs vel-avatar-neutral">C</div>
        </div>
      </div>
    </div>

    <div class="vel-card vel-card-primary">
      <div class="vel-card-body">
        <p style="font-size:0.875rem;font-weight:600;margin:0 0 0.5rem">Try Token Controls</p>
        <p style="color:var(--vel-color-muted);font-size:0.8125rem;line-height:1.5;margin:0">Click the Tokens button in the header to adjust hue, radius, and spacing live.</p>
      </div>
    </div>

  </div>

  <!-- Alert strip -->
  <div style="padding:0 2rem 3rem;max-width:52rem;margin:0 auto;display:flex;flex-direction:column;gap:0.625rem">
    <div class="vel-alert vel-alert-success"><strong class="vel-alert-title">Launched</strong> VeloraCSS v1.0 is now available on npm — zero dependencies.</div>
    <div class="vel-alert vel-alert-info"><strong class="vel-alert-title">Tip</strong> Pick any component from the Gallery panel on the left to load a live demo.</div>
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

// ─── Surface colors (used only for structural chrome that can't use vel- classes) ──

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
    const legacyMatch = hash.match(/[#&]code=([^&]+)/)
    if (legacyMatch) {
      const decoded = decode(legacyMatch[1])
      if (decoded) {
        try {
          const parsed = JSON.parse(decoded)
          if (parsed.html) setHtml(parsed.html)
          if (parsed.css) setCustomCss(parsed.css)
          if (parsed.tokens) setTokens({ ...DEFAULT_TOKENS, ...parsed.tokens })
        } catch {
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

  const tokenCss = buildTokenCss(tokens)

  const previewHtml = tokens.spacingScale !== 1
    ? `<div style="--vel-space-scale:${tokens.spacingScale}">${html}</div>`
    : html

  // Active / inactive styles for header toggle buttons
  const toggleBtnStyle = (active: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: '5px',
    padding: '5px 10px', borderRadius: '6px', fontSize: '12px',
    fontWeight: 500, cursor: 'pointer',
    background: active ? C.accentDim : 'transparent',
    color: active ? '#c4b5fd' : C.muted,
    border: `1px solid ${active ? C.accent + '55' : 'transparent'}`,
    transition: 'all .15s',
  })

  const headerBtnStyle = (active?: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: '6px',
    padding: '5px 12px', borderRadius: '6px', fontSize: '12px',
    fontWeight: 500, cursor: 'pointer',
    background: active ? C.accent : C.surface2,
    color: active ? '#fff' : C.muted,
    border: `1px solid ${active ? C.accent : C.border}`,
    transition: 'all .15s',
  })

  const deviceBtnStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '4px 10px', borderRadius: '5px', fontSize: '11px',
    fontWeight: 500, cursor: 'pointer',
    background: isActive ? C.accent : 'transparent',
    color: isActive ? '#fff' : C.muted,
    border: `1px solid ${isActive ? C.accent : 'transparent'}`,
    transition: 'all .15s',
  })

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

          <button
            onClick={() => setShowGallery(v => !v)}
            title="Toggle component gallery"
            style={toggleBtnStyle(showGallery)}
          >
            <span style={{ fontSize: '14px', lineHeight: 1 }}>▤</span>
            Gallery
          </button>

          <button
            onClick={() => setShowTokens(v => !v)}
            title="Toggle token controls"
            style={toggleBtnStyle(showTokens)}
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
              <button
                key={d.id}
                onClick={() => setDevice(d.id)}
                title={d.label === 'Full' ? 'Full width' : `${d.label}px`}
                style={deviceBtnStyle(d.id === device)}
              >
                {d.label === 'Full' ? 'Full' : `${d.label}px`}
              </button>
            ))}
          </div>

          <button onClick={handleCopy} style={headerBtnStyle()}>
            {copied ? '✓ Copied' : 'Copy HTML'}
          </button>
          <button onClick={handleShare} style={headerBtnStyle(shared)}>
            {shared ? '✓ Link copied!' : '⇱ Share'}
          </button>
          <a
            href={window.location.hostname === 'localhost' ? 'http://localhost:3000/docs' : `${window.location.origin}/veloracss/docs`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...headerBtnStyle(),
              textDecoration: 'none',
              color: '#c4b5fd',
            }}
          >
            Docs
          </a>
          <a
            href={window.location.hostname === 'localhost' ? 'http://localhost:3000' : `${window.location.origin}/veloracss`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...headerBtnStyle(),
              textDecoration: 'none',
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

          {/* Monaco editor */}
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
            {activeTab === 'html' ? (
              <CodeEditor key="html" value={html} onChange={v => setHtml(v ?? '')} language="html" />
            ) : (
              <CodeEditor key="css" value={customCss} onChange={v => setCustomCss(v ?? '')} language="css" />
            )}
          </div>

          {/* Token controls panel */}
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
