'use client'

import { FlipWordsInView } from '@/components/ui/flip-words-in-view'
import Image from 'next/image'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { useTranslation } from 'react-i18next'
import { TagHeading } from '@/components/ui/tag-heading'

export const HomeStack = () => {
  const { t } = useTranslation()

  function findAngle(index: number, total: number) {
    return (360 / total) * (index - 1)
  }

  // ===== ปรับความเร็วที่นี่ (วินาที/รอบ) =====
  const SPEED_SEC = 6

  const langsImages: string[] = [
    'js-logo.svg','go-logo.svg','swift-logo.svg','typescript-logo.svg',
    'python-logo.svg','kotlin-logo.svg','c-sharp-logo.svg','cplusplus-logo.svg',
  ]
  const stackImages: string[] = [
    'figma-logo.svg','redis-logo.svg','tailwind-logo.svg','git-logo.svg','mongodb-logo.svg',
    'node-js-logo.svg','digital-ocean-logo.svg','amazon-logo.svg','docker-logo.svg','swc-logo.svg',
    'react-logo.svg','google-cloud-logo.svg','kubernetes-logo.svg','npm-logo.svg','jest-logo.svg',
  ]

  return (
    <section className="relative z-20 py-20 lg:pt-10 mb-0">
      <div>
        <div className="flex justify-center">
          <TagHeading label="Tech Stack" maxWidth={130} />
        </div>

        <div className="flex flex-col justify-center pt-6 pb-4">
          <FlipWordsInView
            words={[t('stack')]}
            className="text-center text-3xl font-extrabold drop-shadow-sm [text-shadow:1px_1px_2px_#fff,_0_0_1em_#fff,_0_0_0.2em_#fff] md:text-5xl dark:[text-shadow:1px_1px_2px_#000,_0_0_1em_#000,_0_0_0.2em_#000]"
          />
        </div>

        <p className="px-20 text-center text-sm text-black/60 md:text-base dark:text-white/60">
          {t('stackDetail')}
        </p>

        {/* === เวทีหลัก === */}
        <div className="relative mt-10 flex h-[600px] flex-col items-center justify-center overflow-hidden">
          {/* เฟดล่าง: light = ไล่เป็นสีขาว + ฮาโลขาว / dark = ไล่เป็นสีดำ */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0b0b0b] transition-colors duration-300" />
            <div className="absolute left-1/2 -bottom-8 h-56 w-[75%] -translate-x-1/2 rounded-[999px] bg-white/60 blur-3xl dark:hidden" />
          </div>

          {/* วงโค้งพื้นหลัง */}
          {Array.from({ length: 4 }).map((_, index) => (
            <svg key={index} className="pointer-events-none absolute inset-0 size-full z-0" aria-hidden>
              <circle
                // ❗ ทำเป็นสตริงบรรทัดเดียว ห้ามขึ้นบรรทัดกลางสตริง
                className="fill-current stroke-black/5 stroke-1 text-[rgba(0,0,0,0.02)] dark:stroke-white/5 dark:text-[rgba(255,255,255,0.008)]"
                cx="50%" cy="50%" r={80 + index * 60}
              />
            </svg>
          ))}

          {/* การ์ดกลาง */}
          <div className="relative z-30 grid place-content-center duration-300 hover:scale-110">
            <div className="relative grid place-content-center rounded-[1.85rem] border border-white/25 p-1.5 dark:border-white/20 dark:bg-white/5">
              {/* light = ฮาโลขาว / dark = เงาดำ */}
              <div
                className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-white/70 mix-blend-screen dark:bg-black/70 dark:mix-blend-normal transition-colors duration-300"
                aria-hidden
              />
              <div className="relative grid h-[90px] w-[90px] place-content-center rounded-[1.5rem] border border-black/10 shadow-lg dark:border-white/10 dark:bg-white">
                <Image alt="" src={`/svg/new-logo.svg`} width={64} height={64} unoptimized />
              </div>
            </div>
          </div>

          {/* ชั้นโคจร + มาสก์เฟดเฉพาะครึ่งล่าง */}
          <div className="absolute inset-0 z-20 pointer-events-none bottom-half-mask">
            {langsImages.map((img, index) => (
              <OrbitingCircles
                key={img}
                duration={50}
                delay={0}
                radius={140}
                radiusStart={findAngle(index, langsImages.length)}
                radiusEnd={findAngle(index, langsImages.length) + 360}
                className="pointer-events-none animate-orbitNoRotate"
              >
                <div style={{ borderRadius: '0.75rem' }} className="grid h-16 w-16 place-content-center border border-neutral-200 bg-neutral-100 dark:border-neutral-800/50 dark:bg-neutral-900">
                  <Image alt="" src={`/svg/${img}`} width={30} height={30} unoptimized />
                </div>
              </OrbitingCircles>
            ))}

            {stackImages.map((img, index) => (
              <OrbitingCircles
                key={img}
                duration={80}
                delay={0}
                radius={260}
                radiusStart={findAngle(index, stackImages.length)}
                radiusEnd={findAngle(index, stackImages.length) + 360}
                className="pointer-events-none animate-orbitNoRotate"
                reverse
              >
                <div style={{ borderRadius: '0.75rem' }} className="grid h-16 w-16 place-content-center border border-neutral-200/70 bg-neutral-50 dark:border-neutral-800/50 dark:bg-neutral-900">
                  <Image alt="" src={`/svg/${img}`} width={30} height={30} unoptimized />
                </div>
              </OrbitingCircles>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CSS animation & masks ===== */}
      <style jsx>{`
        .runner { animation-name: dash-run; animation-timing-function: linear; animation-iteration-count: infinite; }
        @keyframes dash-run { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -1000; } }

        /* มาสก์เฟดเฉพาะครึ่งล่าง (ใช้กับชั้นโคจร) */
        .bottom-half-mask{
          -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,1) 50%,
            rgba(0,0,0,0.6) 70%,
            rgba(0,0,0,0) 92%
          );
                  mask-image: linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,1) 50%,
            rgba(0,0,0,0.6) 70%,
            rgba(0,0,0,0) 92%
          );
          -webkit-mask-size: 100% 100%;
                  mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
                  mask-repeat: no-repeat;
        }

        @media (prefers-reduced-motion: reduce) {
          .runner { animation-duration: ${SPEED_SEC * 2}s !important; }
        }
      `}</style>
    </section>
  )
}
