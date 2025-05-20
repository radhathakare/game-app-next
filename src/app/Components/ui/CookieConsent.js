"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cc-window">
      <span className="cc-message">
        This website uses cookies to ensure you get the best experience on our website.{' '}
        <Link href="/about/privacy_page" className="cc-link">
          Learn more
        </Link>
      </span>
      <div className="cc-compliance">
        <button onClick={handleAccept} className="cc-btn">
          Got it!
        </button>
      </div>
    </div>
  );
}
