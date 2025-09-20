import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;      // ความหนาของขอบด้านใน (inner cut)
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",                 // มุมกางของ conic
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          // พื้นฐานปุ่ม
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          "border border-white/10 px-6 py-3 [background:var(--bg)] [border-radius:var(--radius)]",
          "text-white",                          // ปล่อยให้เป็นขาวทั้งสองธีม
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container (ให้อยู่เหนือ backdrop แต่ใต้ content) */}
        <div
          className={cn(
            "absolute inset-0 z-10 overflow-visible [container-type:size]" // z-10 (เดิม -z-30 ทำให้มองไม่เห็น)
          )}
          style={{ pointerEvents: "none" }}
        >
          {/* Spark ตัววิ่ง */}
          <div
            className="absolute inset-0 h-full w-full animate-shimmer-slide"
            style={{ animationDuration: "var(--speed)" }}
          >
            {/* แท่งแสงแบบกราดโค้ง (conic) */}
            <div
              className={cn(
                "absolute -inset-[40%] rotate-0 animate-spin-around", // ใช้ค่ากำหนดเองแทน -inset-full
                "[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
              )}
              style={{ animationDuration: "calc(var(--speed) * 2)" }}
            />
          </div>
        </div>

        {/* เนื้อหา */}
        <span className="relative z-20">{children}</span>

        {/* Highlight ด้านบน (แก้ insert-0 -> inset-0) */}
        <div
          className={cn(
            "absolute inset-0 z-20 rounded-2xl",
            "shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
          style={{ pointerEvents: "none" }}
        />

        {/* Backdrop (พื้นหลังชั้นใน) */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
          )}
          style={{ pointerEvents: "none" }}
        />

        {/* Keyframes เผื่อยังไม่ได้ตั้งใน tailwind.config */}
        <style jsx global>{`
          @keyframes shimmer-slide {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(50%);
            }
          }
          @keyframes spin-around {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-shimmer-slide {
            animation-name: shimmer-slide;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-spin-around {
            animation-name: spin-around;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
