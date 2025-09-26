/**
 * Component Style Definitions
 * Professional component variants with proper TypeScript support
 */

// import { semanticTokens } from './tokens';

// Base component styles with variants
export const componentStyles = {
  // Layout Components
  container: {
    base: 'mx-auto px-8',
    variants: {
      size: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },

  // Card Components
  card: {
    base: 'bg-white rounded-xl shadow-sm',
    variants: {
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    },
    defaultVariants: {
      padding: 'md',
      shadow: 'sm',
    },
  },

  // Section Components
  section: {
    base: '',
    variants: {
      spacing: {
        sm: 'mb-6',
        md: 'mb-8',
        lg: 'mb-12',
      },
      breakBefore: {
        'true': 'page-break-before print:break-before-page',
        'false': '',
      },
    },
    defaultVariants: {
      spacing: 'md',
      breakBefore: 'false',
    },
  },

  // Typography Components
  heading: {
    base: 'font-bold text-gray-800',
    variants: {
      level: {
        1: 'text-4xl',
        2: 'text-2xl',
        3: 'text-xl',
        4: 'text-lg',
        5: 'text-base',
        6: 'text-sm',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      color: {
        primary: 'text-gray-800',
        secondary: 'text-gray-600',
        accent: 'text-gray-700',
      },
    },
    defaultVariants: {
      level: 2,
      align: 'left',
      color: 'primary',
    },
  },

  text: {
    base: 'text-gray-800',
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      color: {
        primary: 'text-gray-800',
        secondary: 'text-gray-600',
        tertiary: 'text-gray-500',
        accent: 'text-gray-700',
      },
      leading: {
        tight: 'leading-tight',
        normal: 'leading-normal',
        relaxed: 'leading-relaxed',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      color: 'primary',
      leading: 'normal',
    },
  },

  // Grid and Layout
  grid: {
    base: 'grid gap-6',
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      },
      gap: {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
      },
    },
    defaultVariants: {
      cols: 2,
      gap: 'md',
    },
  },

  // Interactive Components
  skillItem: {
    base: 'p-4 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors space-y-4',
    variants: {
      interactive: {
        'true': 'cursor-pointer hover:shadow-sm',
        'false': '',
      },
    },
    defaultVariants: {
      interactive: 'false',
    },
  },

  // List Components
  list: {
    base: 'space-y-1',
    variants: {
      variant: {
        disc: 'list-disc ml-4',
        none: 'list-none',
        decimal: 'list-decimal ml-4',
      },
      spacing: {
        tight: 'space-y-0.5',
        normal: 'space-y-1',
        relaxed: 'space-y-2',
      },
    },
    defaultVariants: {
      variant: 'disc',
      spacing: 'normal',
    },
  },

  // Badge/Tag Components
  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },

  // Divider Components
  divider: {
    base: 'border-b-2 pb-2',
    variants: {
      color: {
        light: 'border-gray-200',
        medium: 'border-gray-300',
        dark: 'border-gray-400',
      },
      spacing: {
        sm: 'mb-4',
        md: 'mb-6',
        lg: 'mb-8',
      },
    },
    defaultVariants: {
      color: 'light',
      spacing: 'md',
    },
  },

  // Flex Components
  flex: {
    base: 'flex',
    variants: {
      direction: {
        row: 'flex-row',
        col: 'flex-col',
        responsive: 'flex-col md:flex-row',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
      },
      gap: {
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
      },
    },
    defaultVariants: {
      direction: 'row',
      align: 'center',
      justify: 'start',
      gap: 'md',
    },
  },
} as const;

// Helper type for component variants
export type ComponentVariants<T extends keyof typeof componentStyles> = {
  [K in keyof typeof componentStyles[T]['variants']]?: keyof typeof componentStyles[T]['variants'][K];
};