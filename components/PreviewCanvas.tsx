
import React from 'react';
import { CarouselConfig, SlideContent } from '../types';
import { THEMES } from '../constants';

interface PreviewCanvasProps {
  config: CarouselConfig;
  activeSlide: SlideContent;
}

const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ config, activeSlide }) => {
  const theme = THEMES[config.globalTheme];

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

      {/* Decorative Elements */}
      <div
        className="preview-decoration preview-decoration-large"
        style={{ backgroundColor: theme.primary }}
      ></div>
      <div
        className="preview-decoration preview-decoration-small"
        style={{ backgroundColor: theme.primary }}
      ></div>

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
          boxShadow: `0 30px 60px -15px rgba(0,0,0,0.3), 0 0 20px -5px ${theme.primary}20`
        }}
      >
        {activeSlide.isRecommended && (
          <div
            className="recommended-badge"
            style={{ backgroundColor: theme.primary }}
          >
            خطة موصى بها لك
          </div>
        )}

        <div className="mb-8 mt-4">
          <div
            className="recommendation-reason"
            style={{ color: theme.primary }}
          >
            {activeSlide.recommendationReason}
          </div>
          <h1
            className="plan-title"
            style={{ color: theme.text }}
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
            backgroundColor: theme.primary,
            color: config.globalTheme === 'minimalist' ? 'white' : 'black'
          }}
        >
          {activeSlide.ctaText}
        </button>
      </div>

      {/* Footer */}
      <div className="footer-new">
        <div className="footer-left">منصة المستثمر</div>
        <div className="footer-right">al_investor.com</div>
      </div>
    </div>
  );
};

export default PreviewCanvas;
