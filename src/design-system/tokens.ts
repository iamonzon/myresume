/**
 * Design System Tokens
 * Following professional design system standards with semantic naming
 */

// Core Design Tokens
export const designTokens = {
  // Spacing Scale (8px base unit)
  spacing: {
    none: '0',
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
      base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // Color Palette
  colors: {
    // Neutral scale
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Semantic colors
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
    },
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    medium: '250ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Semantic Design Tokens (theme-aware)
export const semanticTokens = {
  colors: {
    text: {
      primary: designTokens.colors.neutral[800],
      secondary: designTokens.colors.neutral[600],
      tertiary: designTokens.colors.neutral[500],
      inverse: designTokens.colors.neutral[50],
    },
    background: {
      primary: '#ffffff',
      secondary: designTokens.colors.neutral[50],
      tertiary: designTokens.colors.neutral[100],
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    border: {
      default: designTokens.colors.neutral[200],
      subtle: designTokens.colors.neutral[100],
      strong: designTokens.colors.neutral[300],
    },
    surface: {
      default: '#ffffff',
      raised: '#ffffff',
      overlay: designTokens.colors.neutral[50],
    },
  },
  spacing: {
    component: {
      xs: designTokens.spacing.sm,    // 8px
      sm: designTokens.spacing.md,    // 16px
      md: designTokens.spacing.lg,    // 24px
      lg: designTokens.spacing.xl,    // 32px
      xl: designTokens.spacing['2xl'], // 48px
    },
    layout: {
      xs: designTokens.spacing.md,    // 16px
      sm: designTokens.spacing.lg,    // 24px
      md: designTokens.spacing.xl,    // 32px
      lg: designTokens.spacing['2xl'], // 48px
      xl: designTokens.spacing['3xl'], // 64px
    },
  },
} as const;

// Type definitions for better TypeScript support
export type DesignToken = typeof designTokens;
export type SemanticToken = typeof semanticTokens;
export type Spacing = keyof typeof designTokens.spacing;
export type Color = keyof typeof designTokens.colors.neutral;
export type FontSize = keyof typeof designTokens.typography.fontSize;