/**
 * Design System Export Index
 * Central export point for the design system
 */

// Core tokens and components
export { designTokens, semanticTokens } from './tokens';
export { componentStyles } from './components';

// Utilities
export {
  createComponentStyle,
  cn,
  responsive,
  printOnly,
  spacing,
  layout,
  typography,
  components,
  interactions,
  a11y,
} from './utils';

// Re-export individual utility functions for convenience
export { layout as layoutUtils, typography as typographyUtils, components as componentUtils } from './utils';

// Types
export type {
  DesignToken,
  SemanticToken,
  Spacing,
  Color,
  FontSize,
} from './tokens';

export type {
  ComponentVariants,
} from './components';