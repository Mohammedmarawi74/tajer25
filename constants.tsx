
import { ThemeType, ThemeColors, SlideContent } from './types';

export const THEMES: Record<ThemeType, ThemeColors> = {
  dark: {
    primary: '#00ffa3',
    background: '#0a0a0a',
    cardBg: 'rgba(20, 20, 20, 0.8)',
    text: '#ffffff',
    secondaryText: '#9ca3af',
  },
  emerald: {
    primary: '#10b981',
    background: '#064e3b',
    cardBg: 'rgba(255, 255, 255, 0.1)',
    text: '#ffffff',
    secondaryText: '#d1fae5',
  },
  gold: {
    primary: '#fbbf24',
    background: '#1a1a1a',
    cardBg: 'rgba(30, 30, 30, 0.9)',
    text: '#fef3c7',
    secondaryText: '#d97706',
  },
  'royal-blue': {
    primary: '#3b82f6',
    background: '#1e3a8a',
    cardBg: 'rgba(15, 23, 42, 0.7)',
    text: '#f8fafc',
    secondaryText: '#93c5fd',
  },
  minimalist: {
    primary: '#111827',
    background: '#f3f4f6',
    cardBg: '#ffffff',
    text: '#111827',
    secondaryText: '#4b5563',
  }
};

export const INITIAL_SLIDES: SlideContent[] = [
  {
    id: '1',
    planName: 'الركائز الاستراتيجية للتحول الرقمي',
    recommendationReason: 'تحليل البيانات والنمو الاقتصادي',
    description: 'خطة شاملة مصممة خصيصاً للمستثمرين الباحثين عن فرص في القطاع التقني الصاعد.',
    ctaText: 'ابدأ الاستثمار الآن',
    isRecommended: true,
  },
  {
    id: '2',
    planName: 'خطة النمو المتسارع',
    recommendationReason: 'تناسب المستثمر المغامر',
    description: 'تركز هذه الخطة على الأصول عالية المخاطر والعائد، مما يضمن تدفقاً نقدياً ممتازاً.',
    ctaText: 'اكتشف الفرص',
    isRecommended: false,
  }
];
