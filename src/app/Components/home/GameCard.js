"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import lazy from "../../../../public/images/lazy.png";

function formatIconFileName(title) {
  return `${title}_icon.png`;
}

export default function GameCard({ title, link }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const imageSrc =
    isVisible && !imageError
      ? `/images/${formatIconFileName(title)}`
      : "/images/lazy.png";

  return (
    <div className="dicegamessos_game_list_card" ref={containerRef}>
      <Link href={link} className="dicegamessos_game_card_body">
        <div className="dicegamessos_game_card_img relative w-[100px] h-[100px]">
          <Image
            src={isVisible ? `/images/${formatIconFileName(title)}` : lazy}
            alt={title}
            fill
            sizes="100px"
            className={`object-cover rounded-lg ${
              isVisible ? "" : "lazy-load"
            }`}
            onError={() => setImageError(true)}
            priority={false}
          />
          {imageError && (
            <div className="text-red-500 text-xs mt-1">Image not found</div>
          )}
        </div>
        <div className="dicegamessos_game_card_hover">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}