import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DeviceFrameProps {
  children: React.ReactNode;
  variant?: 'phone' | 'laptop';
  className?: string;
}

export const MobileDeviceFrame = ({
  children,
  variant = 'phone',
  className,
}: DeviceFrameProps) => {
  if (variant === 'laptop') {
    return (
      <div className={cn('relative w-full', className)}>
        <div className="relative aspect-[16/10] rounded-xl bg-gray-800 border border-gray-700 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-5 bg-gray-900/80 flex items-center px-3 gap-1.5 z-20 border-b border-gray-700/50">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <div className="absolute inset-0 pt-5 overflow-hidden bg-black">
            {children}
          </div>
        </div>
        <div className="mx-auto h-[6px] w-[55%] rounded-b-[10px] bg-gray-800 border-x border-b border-gray-700" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative mx-auto bg-gray-800 border-[10px] border-gray-800 rounded-[2rem] shadow-xl aspect-[9/19] w-full max-w-[260px]',
        className
      )}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[16px] bg-gray-800 rounded-b-[14px] z-20" />
      <div className="absolute -start-[13px] top-[15%] h-[7%] w-[3px] bg-gray-800 rounded-s-lg" />
      <div className="absolute -start-[13px] top-[26%] h-[9%] w-[3px] bg-gray-800 rounded-s-lg" />
      <div className="absolute -start-[13px] top-[37%] h-[9%] w-[3px] bg-gray-800 rounded-s-lg" />
      <div className="absolute -end-[13px] top-[30%] h-[13%] w-[3px] bg-gray-800 rounded-e-lg" />
      <div className="absolute inset-0 rounded-[1.4rem] overflow-hidden bg-black">
        {children}
      </div>
    </div>
  );
};
