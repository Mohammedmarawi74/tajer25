import React from 'react';
import { CarouselConfig, SlideContent } from '../types';
import { THEMES } from '../constants';

interface PreviewCanvasProps {
  config: CarouselConfig;
  activeSlide: SlideContent;
}

const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ config, activeSlide }) => {
  const theme = THEMES[config.globalTheme];

  // Determine badge color based on theme
  const getBadgeColor = () => {
    switch (config.globalTheme) {
      case 'mint':
        return '#10B981';
      case 'purple':
        return '#8B5CF6';
      case 'electric':
        return '#2563EB';
      default:
        return '#2563EB';
    }
  };

  return (
    <div className="preview-content">
      {/* Background Layer */}
      {activeSlide.backgroundImage && (
        <div className="preview-background">
          <img
            src={activeSlide.backgroundImage}
            className="preview-background-image"
            alt="background"
          />
          <div className="preview-background-overlay"></div>
        </div>
      )}

      {/* Decorative Gradient Blobs */}
      <div
        className="preview-decoration preview-decoration-large"
        style={{
          background: config.globalTheme === 'mint' 
            ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
            : config.globalTheme === 'purple'
            ? 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
            : 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)'
        }}
      ></div>
      <div
        className="preview-decoration preview-decoration-small"
        style={{
          background: config.globalTheme === 'mint'
            ? 'linear-gradient(135deg, #34D399 0%, #6EE7B7 100%)'
            : config.globalTheme === 'purple'
            ? 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)'
            : 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
        }}
      ></div>

      {/* Bokeh Effect Circles */}
      <div className="bokeh-container">
        <div className="bokeh-circle bokeh-circle-1"></div>
        <div className="bokeh-circle bokeh-circle-2"></div>
        <div className="bokeh-circle bokeh-circle-3"></div>
        <div className="bokeh-circle bokeh-circle-4"></div>
        <div className="bokeh-circle bokeh-circle-5"></div>
        <div className="bokeh-circle bokeh-circle-6"></div>
        <div className="bokeh-circle bokeh-circle-7"></div>
        <div className="bokeh-circle bokeh-circle-8"></div>
        <div className="bokeh-circle bokeh-circle-9"></div>
        <div className="bokeh-circle bokeh-circle-10"></div>
        <div className="bokeh-circle bokeh-circle-11"></div>
        <div className="bokeh-circle bokeh-circle-12"></div>
      </div>

      {/* Logo Display - Top Center */}
      {config.logoUrl && (
        <div className="logo-display-container">
          <img src={config.logoUrl} className="logo-display-image" alt="Logo" />
        </div>
      )}

      {/* Main Content Card */}
      <div
        className="content-card"
        style={{
          backgroundColor: theme.cardBg,
        }}
      >
        {activeSlide.isRecommended && (
          <div
            className="recommended-badge"
            style={{
              background: `linear-gradient(135deg, ${getBadgeColor()} 0%, ${getBadgeColor()}DD 100%)`,
            }}
          >
             موصى بها لك
          </div>
        )}

        <div className="mb-8 mt-4">
          <div
            className="recommendation-reason"
            style={{
              color: theme.primary,
              backgroundColor: `${theme.primary}15`,
              borderColor: `${theme.primary}30`,
            }}
          >
            {activeSlide.recommendationReason}
          </div>
          <h1
            className="plan-title"
          >
            {activeSlide.planName}
          </h1>
        </div>

        <p className="slide-description">
          {activeSlide.description}
        </p>

        <button
          className="cta-button"
          style={{
            background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primary}DD 100%)`,
            boxShadow: `0 10px 40px ${theme.primary}55, 0 0 0 0 ${theme.primary}50`,
          }}
        >
          {activeSlide.ctaText}
        </button>
      </div>

      {/* Footer */}
      <div className="footer-new">
        <div className="footer-left">منصة التاجر</div>
        <div className="footer-right">dtajer</div>
      </div>
    </div>
  );
};

export default PreviewCanvas;
