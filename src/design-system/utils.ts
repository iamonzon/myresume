/**
 * Style Utility Functions
 * Professional utilities for generating component styles
 */

import { componentStyles, ComponentVariants } from './components';

/**
 * Class Variance Authority (CVA) inspired utility
 * Generates className strings based on component variants
 */
export function createComponentStyle<T extends keyof typeof componentStyles>(
  componentName: T,
  variants?: ComponentVariants<T>
): string {
  const component = componentStyles[componentName];
  let classes = component.base;

  if (variants && component.variants) {
    Object.entries(variants).forEach(([variantKey, variantValue]) => {
      if (variantValue && (component.variants as any)[variantKey]) {
        const variantClass = (component.variants as any)[variantKey][variantValue as string];
        if (variantClass) {
          classes += ` ${variantClass}`;
        }
      }
    });
  }

  // Apply default variants if not specified
  if ((component as any).defaultVariants) {
    Object.entries((component as any).defaultVariants).forEach(([variantKey, defaultValue]) => {
      if (!variants || !(variants as any)[variantKey]) {
        const variantClass = (component.variants as any)[variantKey]?.[defaultValue as string];
        if (variantClass) {
          classes += ` ${variantClass}`;
        }
      }
    });
  }

  return classes.trim();
}

/**
 * Utility to combine multiple class names
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Responsive utility for conditional classes
 */
export function responsive(base: string, responsive?: { [key: string]: string }): string {
  let classes = base;

  if (responsive) {
    Object.entries(responsive).forEach(([breakpoint, className]) => {
      classes += ` ${breakpoint}:${className}`;
    });
  }

  return classes;
}

/**
 * Print-specific utility
 */
export function printOnly(className: string): string {
  return `print:${className}`;
}

/**
 * Theme-aware spacing utility
 */
export function spacing(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl', type: 'margin' | 'padding' = 'margin'): string {
  const sizeMap = {
    xs: '2',
    sm: '4',
    md: '6',
    lg: '8',
    xl: '12',
  };

  const prefix = type === 'margin' ? 'm' : 'p';
  return `${prefix}-${sizeMap[size]}`;
}

/**
 * Layout utilities
 */
export const layout = {
  container: (size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md') =>
    createComponentStyle('container', { size }),

  section: (spacing: 'sm' | 'md' | 'lg' = 'md', breakBefore?: boolean) =>
    createComponentStyle('section', { spacing, breakBefore: breakBefore ? 'true' : 'false' }),

  grid: (cols: 1 | 2 | 3 | 4 = 2, gap: 'sm' | 'md' | 'lg' = 'md') =>
    createComponentStyle('grid', { cols, gap }),

  flex: (direction?: 'row' | 'col' | 'responsive', align?: 'start' | 'center' | 'end' | 'baseline', justify?: 'start' | 'center' | 'end' | 'between' | 'around') =>
    createComponentStyle('flex', { direction, align, justify }),
};

/**
 * Typography utilities
 */
export const typography = {
  heading: (level: 1 | 2 | 3 | 4 | 5 | 6 = 2, align?: 'left' | 'center' | 'right', color?: 'primary' | 'secondary' | 'accent') =>
    createComponentStyle('heading', { level, align, color }),

  text: (size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl', weight?: 'normal' | 'medium' | 'semibold' | 'bold', color?: 'primary' | 'secondary' | 'tertiary' | 'accent') =>
    createComponentStyle('text', { size, weight, color }),
};

/**
 * Component utilities
 */
export const components = {
  card: (padding?: 'sm' | 'md' | 'lg', shadow?: 'none' | 'sm' | 'md' | 'lg') =>
    createComponentStyle('card', { padding, shadow }),

  skillItem: (interactive: boolean = false) =>
    createComponentStyle('skillItem', { interactive: interactive ? 'true' : 'false' }),

  list: (variant?: 'disc' | 'none' | 'decimal', spacing?: 'tight' | 'normal' | 'relaxed') =>
    createComponentStyle('list', { variant, spacing }),

  badge: (variant?: 'default' | 'primary' | 'success' | 'warning' | 'error') =>
    createComponentStyle('badge', { variant }),

  divider: (color?: 'light' | 'medium' | 'dark', spacing?: 'sm' | 'md' | 'lg') =>
    createComponentStyle('divider', { color, spacing }),
};

/**
 * Animation and interaction utilities
 */
export const interactions = {
  hover: (className: string) => `hover:${className}`,
  focus: (className: string) => `focus:${className}`,
  active: (className: string) => `active:${className}`,
  transition: (property: 'all' | 'colors' | 'opacity' | 'transform' = 'all') =>
    `transition-${property} duration-200 ease-in-out`,
};

/**
 * Accessibility utilities
 */
export const a11y = {
  srOnly: 'sr-only',
  focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  skipToContent: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50',
};