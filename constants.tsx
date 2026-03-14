
import { ThemeType, ThemeColors, SlideContent } from './types';

export const THEMES: Record<ThemeType, ThemeColors> = {
  light: {
    primary: '#2563EB',
    background: '#FFFFFF',
    cardBg: '#F8FAFC',
    text: '#0F172A',
    secondaryText: '#4B5563',
  },
  gray: {
    primary: '#2563EB',
    background: '#F8FAFC',
    cardBg: '#FFFFFF',
    text: '#0F172A',
    secondaryText: '#4B5563',
  },
  electric: {
    primary: '#2563EB',
    background: '#FFFFFF',
    cardBg: '#EFF6FF',
    text: '#0F172A',
    secondaryText: '#4B5563',
  },
  mint: {
    primary: '#10B981',
    background: '#FFFFFF',
    cardBg: '#ECFDF5',
    text: '#0F172A',
    secondaryText: '#4B5563',
  },
  purple: {
    primary: '#8B5CF6',
    background: '#FFFFFF',
    cardBg: '#F5F3FF',
    text: '#0F172A',
    secondaryText: '#4B5563',
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
