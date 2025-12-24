'use client';

import Image from 'next/image';
import React from 'react';

type XPromoDiagramProps = {
  leftBubbleContent?: React.ReactNode;
  rightTopBubbleContent?: React.ReactNode;
  bottomBubbleContent?: React.ReactNode;
  businessIconSrc: string;
  saasIconSrc: string;
  userIconSrc: string;
  centerLogoSrc: string;
};

export const XPromoDiagram: React.FC<XPromoDiagramProps> = ({
  leftBubbleContent,
  rightTopBubbleContent,
  bottomBubbleContent,
  businessIconSrc,
  saasIconSrc,
  userIconSrc,
  centerLogoSrc,
}) => {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto h-[420px]">
      {/* Top-left speech bubble */}
      <div className="absolute top-4 left-0 w-[380px] h-[190px] border-2 border-[#9C5CFF] rounded-[24px] bg-transparent">
        <div className="absolute -bottom-[18px] left-[140px] w-9 h-9 bg-[#060415] rotate-45 border-b-2 border-r-2 border-[#9C5CFF]" />
        <div className="absolute inset-[16px] text-sm leading-relaxed text-white/90">
          {leftBubbleContent}
        </div>
      </div>

      {/* Top-right speech bubble */}
      <div className="absolute top-0 right-0 w-[420px] h-[190px] border-2 border-[#9C5CFF] rounded-[24px] bg-transparent">
        <div className="absolute -bottom-[18px] right-[140px] w-9 h-9 bg-[#060415] rotate-45 border-b-2 border-l-2 border-[#9C5CFF]" />
        <div className="absolute inset-[16px] text-sm leading-relaxed text-white/90 text-right">
          {rightTopBubbleContent}
        </div>
      </div>

      {/* Bottom-center speech bubble */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[150px] border-2 border-[#9C5CFF] rounded-[24px] bg-transparent">
        <div className="absolute -top-[18px] right-[80px] w-9 h-9 bg-[#060415] rotate-45 border-t-2 border-l-2 border-[#9C5CFF]" />
        <div className="absolute inset-[16px] text-sm leading-relaxed text-white/90">
          {bottomBubbleContent}
        </div>
      </div>

      {/* Center line content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left: Doanh nghiệp */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-[140px] h-[140px] rounded-full bg-[#02A6E7] flex items-center justify-center shadow-[0_0_0_6px_rgba(2,166,231,0.35)]">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src={businessIconSrc}
                  alt="Doanh nghiệp"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white/90">
              Doanh nghiệp
            </span>
          </div>

          {/* Arrow to center */}
          <div className="flex items-center">
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-[#9C5CFF] to-[#02A6E7]" />
            <div className="ml-1 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#02A6E7]" />
          </div>
        </div>

        {/* Center: XPROMO */}
        <div className="mx-10 flex items-center">
          <div className="relative w-[100px] h-[70px]">
            <Image
              src={centerLogoSrc}
              alt="XPROMO"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side: SaaS + Người dùng */}
        <div className="flex items-center gap-10">
          {/* Arrow from center to SaaS/User column */}
          <div className="flex items-center">
            <div className="mr-1 w-0 h-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-[#9C5CFF]" />
            <div className="h-[2px] w-[80px] bg-gradient-to-r from-[#02A6E7] to-[#9C5CFF]" />
          </div>

          {/* SaaS & User column */}
          <div className="flex flex-col items-center gap-10">
            {/* Đơn vị SaaS */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[140px] h-[140px] rounded-full bg-[#02A6E7] flex items-center justify-center shadow-[0_0_0_6px_rgba(2,166,231,0.35)]">
                <div className="relative w-[90px] h-[90px]">
                  <Image
                    src={saasIconSrc}
                    alt="Đơn vị SaaS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold tracking-tight text-white/90">
                Đơn vị SaaS
              </span>
            </div>

            {/* Vertical connector */}
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-[70px] bg-gradient-to-b from-[#9C5CFF] to-[#02A6E7]" />
            </div>

            {/* Người dùng */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[140px] h-[140px] rounded-full bg-[#02A6E7] flex items-center justify-center shadow-[0_0_0_6px_rgba(2,166,231,0.35)]">
                <div className="relative w-[90px] h-[90px]">
                  <Image
                    src={userIconSrc}
                    alt="Người dùng"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold tracking-tight text-white/90">
                Người dùng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};