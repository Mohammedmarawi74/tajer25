
export enum TabType {
  CONTENT = 'content',
  THEME = 'theme',
  CSS = 'css'
}

export interface SlideContent {
  id: string;
  planName: string;
  recommendationReason: string;
  description: string;
  ctaText: string;
  isRecommended: boolean;
  backgroundImage?: string;
}

export interface CarouselConfig {
  slides: SlideContent[];
  activeSlideIndex: number;
  globalTheme: ThemeType;
  customCSS: string;
  logoUrl?: string;
  platformName: string;
  selectedLogoIndex?: number | null;
}

export type ThemeType = 'light' | 'gray' | 'electric' | 'mint' | 'purple';

export interface ThemeColors {
  primary: string;
  background: string;
  cardBg: string;
  text: string;
  secondaryText: string;
}
