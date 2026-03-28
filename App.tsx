
import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  Settings,
  Layers,
  Palette,
  Code,
  Plus,
  Trash2,
  Image as ImageIcon,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Share2,
  Upload,
  X
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { TabType, CarouselConfig, SlideContent, ThemeType } from './types';
import { INITIAL_SLIDES, THEMES } from './constants';
import PreviewCanvas from './components/PreviewCanvas';
import './styles.css';

// Import logo images
import logo1 from './logooo/logo-1.png';
import logo2 from './logooo/logo-2.png';
import logo3 from './logooo/logo-3.png';
import logo4 from './logooo/logo-4.png';

const LOGO_OPTIONS = [
  { id: 0, src: logo1, name: 'شعار 1' },
  { id: 1, src: logo2, name: 'شعار 2' },
  { id: 2, src: logo3, name: 'شعار 3' },
  { id: 3, src: logo4, name: 'شعار 4' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.CONTENT);
  const [config, setConfig] = useState<CarouselConfig>({
    slides: INITIAL_SLIDES,
    activeSlideIndex: 0,
    globalTheme: 'light',
    customCSS: '',
    platformName: 'رادار المستثمر',
    selectedLogoIndex: null,
  });
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const activeSlide = config.slides[config.activeSlideIndex];

  const updateActiveSlide = (updates: Partial<SlideContent>) => {
    const newSlides = [...config.slides];
    newSlides[config.activeSlideIndex] = { ...activeSlide, ...updates };
    setConfig({ ...config, slides: newSlides });
  };

  const handleLogoSelect = (logoId: number) => {
    const selectedLogo = LOGO_OPTIONS.find(logo => logo.id === logoId);
    if (selectedLogo) {
      setConfig(prev => ({ 
        ...prev, 
        logoUrl: selectedLogo.src,
        selectedLogoIndex: logoId
      }));
    }
  };

  const handleRemoveLogo = () => {
    setConfig(prev => ({ 
      ...prev, 
      logoUrl: undefined,
      selectedLogoIndex: null
    }));
  };

  const handleSlideImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateActiveSlide({ backgroundImage: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSlide = () => {
    const newSlide: SlideContent = {
      id: Math.random().toString(36).substr(2, 9),
      planName: 'خطة جديدة',
      recommendationReason: 'لماذا هذه الخطة؟',
      description: 'وصف تفصيلي للخطة الجديدة المقترحة للمستثمر.',
      ctaText: 'اشترك الآن',
      isRecommended: false,
    };
    setConfig({ 
      ...config, 
      slides: [...config.slides, newSlide],
      activeSlideIndex: config.slides.length 
    });
  };

  const deleteSlide = (index: number) => {
    if (config.slides.length <= 1) return;
    const newSlides = config.slides.filter((_, i) => i !== index);
    setConfig({ 
      ...config, 
      slides: newSlides, 
      activeSlideIndex: Math.min(config.activeSlideIndex, newSlides.length - 1) 
    });
  };

  const downloadImage = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    
    // Exact dimensions from CSS
    const width = 720;
    const height = 650;
    
    try {
      // Ensure fonts are ready
      if (document.fonts) {
        await document.fonts.ready;
      }
      
      // Wait for any UI settling
      await new Promise(r => setTimeout(r, 800));

      const dataUrl = await htmlToImage.toPng(canvasRef.current, {
        quality: 1.0,
        pixelRatio: 2, // 2 is great for high-quality sharing
        width: width,
        height: height,
        style: {
          transform: 'none',
          transition: 'none',
          margin: '0',
          padding: '0',
          borderRadius: '0'
        },
        // Force the element to stay at its true size during capture
        canvasWidth: width * 2,
        canvasHeight: height * 2
      });

      const fileName = `dtajer-carousel-${Date.now()}.png`;
      const downloader = document.createElement('a');
      downloader.download = fileName;
      downloader.href = dataUrl;
      downloader.click();
      
    } catch (err) {
      console.error('Export failed', err);
      // Try a secondary approach or alert
      alert('نعتذر، حدث خطأ. جرب إعادة المحاولة مرة أخرى.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="app-container" dir="rtl">
      {/* Custom Global CSS Injection */}
      <style>{config.customCSS}</style>

      {/* Sidebar Navigation (Icons) */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          ت
        </div>
        <button
          onClick={() => setActiveTab(TabType.CONTENT)}
          className={`sidebar-button ${activeTab === TabType.CONTENT ? 'active' : 'inactive'}`}
          title="المحتوى"
        >
          <Layers size={24} />
        </button>
        <button
          onClick={() => setActiveTab(TabType.THEME)}
          className={`sidebar-button ${activeTab === TabType.THEME ? 'active' : 'inactive'}`}
          title="الثيمات"
        >
          <Palette size={24} />
        </button>
        <button
          onClick={() => setActiveTab(TabType.CSS)}
          className={`sidebar-button ${activeTab === TabType.CSS ? 'active' : 'inactive'}`}
          title="تخصيص CSS"
        >
          <Code size={24} />
        </button>
        <div className="sidebar-settings">
          <Settings size={24} />
        </div>
      </aside>

      {/* Panel Controls */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">
            {activeTab === TabType.CONTENT ? 'محتوى الشريحة' :
             activeTab === TabType.THEME ? 'أنماط التصميم' : 'محرر CSS المخصص'}
          </h2>
        </div>

        <div className="panel-content">
          {activeTab === TabType.CONTENT && (
            <>
              {/* Layout Toggle */}
              <div>
                <label className="form-label">تخطيط الشريحة</label>
                <div className="layout-toggle">
                  <button className="layout-button primary">الرئيسية</button>
                  <button className="layout-button secondary">خطة</button>
                  <button className="layout-button secondary">مقارنة</button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="form-group-container">
                <div className="form-group">
                  <label className="form-label">اسم الخطة / العنوان</label>
                  <textarea
                    value={activeSlide.planName}
                    onChange={(e) => updateActiveSlide({ planName: e.target.value })}
                    className="form-textarea"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">سبب التوصية</label>
                  <input
                    type="text"
                    value={activeSlide.recommendationReason}
                    onChange={(e) => updateActiveSlide({ recommendationReason: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">وصف الخطة</label>
                  <textarea
                    value={activeSlide.description}
                    onChange={(e) => updateActiveSlide({ description: e.target.value })}
                    className="form-textarea large"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">نص زر الإجراء</label>
                  <input
                    type="text"
                    value={activeSlide.ctaText}
                    onChange={(e) => updateActiveSlide({ ctaText: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Badge Toggle */}
                <div className="badge-toggle">
                  <span className="badge-label">إظهار شعار "موصى بها"</span>
                  <button
                    onClick={() => updateActiveSlide({ isRecommended: !activeSlide.isRecommended })}
                    className={`toggle-switch ${activeSlide.isRecommended ? 'active' : 'inactive'}`}
                  >
                    <div className={`toggle-knob ${activeSlide.isRecommended ? 'active' : 'inactive'}`} />
                  </button>
                </div>

                {/* Media Section */}
                <div className="media-section">
                  <label className="form-label">الوسائط والشعارات</label>
                  <div className="media-grid">
                    <label className="media-upload">
                      <ImageIcon className="media-upload-icon" size={20} />
                      <span className="media-upload-label">خلفية الشريحة</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleSlideImageUpload} />
                    </label>
                  </div>
                  
                  {/* Logo Selection */}
                  <div className="logo-selection-section">
                    <label className="form-label">اختر شعارًا</label>
                    <div className="logo-options-grid">
                      {LOGO_OPTIONS.map((logo) => (
                        <button
                          key={logo.id}
                          onClick={() => handleLogoSelect(logo.id)}
                          className={`logo-option ${config.selectedLogoIndex === logo.id ? 'selected' : ''}`}
                        >
                          <img src={logo.src} alt={logo.name} className="logo-option-image" />
                          <span className="logo-option-name">{logo.name}</span>
                          {config.selectedLogoIndex === logo.id && (
                            <div className="logo-selected-badge">
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {/* Remove Logo Button */}
                    {config.logoUrl && (
                      <button
                        onClick={handleRemoveLogo}
                        className="remove-logo-button"
                      >
                        <X size={16} />
                        إزالة الشعار
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === TabType.THEME && (
            <div className="theme-grid">
              {Object.keys(THEMES).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => setConfig({ ...config, globalTheme: themeKey as ThemeType })}
                  className={`theme-card ${config.globalTheme === themeKey ? 'selected' : ''}`}
                  style={{ backgroundColor: THEMES[themeKey as ThemeType].background }}
                >
                  <div className="theme-card-content">
                    <span className="theme-card-name" style={{ color: THEMES[themeKey as ThemeType].text }}>{themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}</span>
                    <div className="theme-card-colors">
                      <div className="theme-color-dot" style={{ backgroundColor: THEMES[themeKey as ThemeType].primary }}></div>
                      <div className="theme-color-dot" style={{ backgroundColor: THEMES[themeKey as ThemeType].cardBg }}></div>
                    </div>
                  </div>
                  {config.globalTheme === themeKey && (
                    <div className="theme-card-badge">
                      <CheckCircle2 size={12} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {activeTab === TabType.CSS && (
            <div className="css-editor">
              <p className="css-editor-hint">يمكنك كتابة كود CSS مخصص هنا لتغيير مظهر أي عنصر في التصميم. استخدم محرر الكود بحرص لتخصيص الألوان والخطوط والعناصر.</p>
              <textarea
                dir="ltr"
                value={config.customCSS}
                onChange={(e) => setConfig({ ...config, customCSS: e.target.value })}
                placeholder=".card { border-radius: 50px; }"
                className="css-editor-textarea"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Preview Area */}
      <main className="main-preview">
        <header className="preview-header">
          <div className="header-title">
            <h1 className="header-title-text">
              <span className="header-title-accent italic">التاجر</span> الرقمية
            </h1>
            <div className="header-divider"></div>
            <span className="header-project">مشروع: كاروسيل الخطط الذكية 2030</span>
          </div>

          <div className="header-actions">
            <button className="header-button">
              <Share2 size={16} />
              مشاركة
            </button>
            <button
              disabled={isExporting}
              onClick={downloadImage}
              className={`header-button primary ${isExporting ? 'disabled' : ''}`}
            >
              <Download size={18} />
              {isExporting ? 'جاري التصدير...' : 'تصدير الشريحة (PNG)'}
            </button>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="canvas-area">
          <div className="canvas-wrapper scale-90 lg:scale-100 transition-transform duration-500">
            <div
              id="export-canvas"
              ref={canvasRef}
              className="export-canvas"
              style={{
                backgroundColor: THEMES[config.globalTheme].background,
                color: THEMES[config.globalTheme].text
              }}
            >
              <PreviewCanvas config={config} activeSlide={activeSlide} />
            </div>
          </div>
        </div>

        {/* Bottom Slide Manager */}
        <div className="slide-manager">
          {config.slides.map((slide, index) => (
            <div key={slide.id} className="slide-item">
              <button
                onClick={() => setConfig({ ...config, activeSlideIndex: index })}
                className={`slide-thumbnail ${config.activeSlideIndex === index ? 'active' : 'inactive'}`}
              >
                {slide.backgroundImage ? (
                  <img src={slide.backgroundImage} className="slide-thumbnail-image" />
                ) : (
                  <span className="text-gray-500 font-bold">{index + 1}</span>
                )}
              </button>
              <button
                onClick={() => deleteSlide(index)}
                className="slide-delete"
              >
                <Trash2 size={10} />
              </button>
            </div>
          ))}
          <button
            onClick={addSlide}
            className="slide-add"
          >
            <Plus size={20} />
            <span className="slide-add-text">إضافة</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
