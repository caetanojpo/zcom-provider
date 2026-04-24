// Viewport trigger configuration — controls when scroll-based animations fire
export const VIEWPORT_ANIMATE_ONCE = true;
export const VIEWPORT_AMOUNT_DEFAULT = 0.3;
export const VIEWPORT_AMOUNT_ELEMENT = 0.5;
export const VIEWPORT_AMOUNT_SOME = 'some' as const;

// Spring animation physics parameters for Framer Motion
export const SPRING_STIFFNESS_SOFT = 80;
export const SPRING_STIFFNESS_MEDIUM = 90;
export const SPRING_STIFFNESS_FIRM = 100;
export const SPRING_DAMPING_LIGHT = 15;
export const SPRING_DAMPING_MEDIUM = 20;

// Animation duration presets in seconds
export const ANIMATION_DURATION_HOVER = 0.3;
export const ANIMATION_DURATION_ELEMENT = 0.6;
export const ANIMATION_DURATION_PRICE_CARD = 0.7;
export const ANIMATION_DURATION_BACKGROUND = 1;
export const ANIMATION_DURATION_BACKGROUND_SLOW = 1.2;
export const ANIMATION_DURATION_STAGGER_CONTAINER = 0.8;

// Stagger timing for Framer Motion parent variants
export const ANIMATION_STAGGER_ITEMS = 0.1;
export const ANIMATION_STAGGER_FAST = 0.2;
export const ANIMATION_STAGGER_DEFAULT = 0.3;
export const ANIMATION_STAGGER_SLOW = 0.4;
export const ANIMATION_DELAY_CHILDREN_DEFAULT = 0.3;

// Initial scale for background entrance animations — slight zoom-out effect on enter
export const ANIMATION_SCALE_OVERSHOOT = 1.1;

// Hover effect CSS values for interactive image elements
export const HOVER_BRIGHTNESS_FILTER = 'brightness(1.2) contrast(1.1)';
export const GLOW_BOX_SHADOW = '0 0 15px 3px var(--glow-color)';

// Map pulsing point animation
export const MAP_POINT_PULSE_DURATION = 1.3;
export const MAP_POINT_MAX_RANDOM_DELAY = 0.5;

// Per-item delay multipliers for staggered list animations
export const PLAN_CARD_STAGGER_DELAY_MULTIPLIER = 0.2;
export const PARTNER_GRID_STAGGER_DELAY_MULTIPLIER = 0.1;
