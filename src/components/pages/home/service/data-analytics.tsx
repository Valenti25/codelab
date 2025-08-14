'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TTextAnimate } from './type'
import { TitleGradient } from '@/components/ui/title-gradient'
// import { LuChartNoAxesColumnIncreasing, LuClock } from 'react-icons/lu'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
// import { FaArrowTrendUp } from 'react-icons/fa6'
import { getRandomNumber } from '@/utils/number'
import { Counter } from '@/components/ui/counter'

import { Area, AreaChart, XAxis } from 'recharts'
import { useMemo } from 'react'

export const DataAnalytics = ({ textAnimate }: TTextAnimate) => {
   const { t } = useTranslation()

   return (
      <>
         <TitleGradient text="Data Analytics" className="px-6" />
         <div className="p-6 pt-0">
            <p className="text-gray h-[40px] text-sm dark:text-white/60">{t('service.analytics')}</p>
         </div>
         <div className="flex w-full gap-6">
            <div className="w-6/12 pl-6 text-sm">
               <motion.p
                  layout="position"
                  layoutId="data-analytics-big-data"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 100,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  Big data
               </motion.p>
               <motion.p
                  layout="position"
                  layoutId="data-analytics-ai"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 150,
                     damping: 10,
                  }}
                  className="border-b border-black/10 py-2 dark:border-neutral-200/20"
               >
                  AI
               </motion.p>
               <motion.p
                  layout="position"
                  layoutId="data-analytics-machine-learning"
                  {...textAnimate}
                  transition={{
                     type: 'spring',
                     stiffness: 200,
                     damping: 10,
                  }}
                  className="py-2"
               >
                  Machine Learning
               </motion.p>
            </div>
            <div className="w-6/12">
               <Contents />
            </div>
         </div>
      </>
   )
}

const generateChartData = () => {
   const startDate = new Date('2024-04-01')
   const endDate = new Date('2024-04-30')
   // const endDate = new Date('2024-06-30')
   const data = []

   const currentDate = new Date(startDate)
   while (currentDate <= endDate) {
      data.push({
         date: currentDate.toISOString().split('T')[0],
         desktop: getRandomNumber(50, 500),
         mobile: getRandomNumber(50, 500),
         // desktop: getRandomNumber(50, 1000),
         // mobile: getRandomNumber(50, 1000),
      })

      currentDate.setDate(currentDate.getDate() + 1)
   }

   return data
}

const staticChartData = generateChartData()

const ChartSection = () => {
   const chartData = useMemo(() => staticChartData, [])

   const chartConfig: ChartConfig = {
      visitors: { label: 'Visitors' },
      desktop: { label: 'AI', color: 'hsl(263, 89%, 48%)' },
      mobile: { label: 'Big data', color: 'hsl(237, 10%, 42%)' },
   }

   return (
      // <ChartContainer config={chartConfig} className="-mt-4 aspect-auto h-[170px] w-[1000%] pb-2 md:h-[250px] lg:w-[500%]">
      <ChartContainer config={chartConfig} className="aspect-auto h-[170px] w-full pb-2 md:h-[250px]">
         <AreaChart data={chartData}>
            <defs>
               <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
               </linearGradient>
               <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
               </linearGradient>
            </defs>
            <XAxis
               dataKey="date"
               tickLine={false}
               axisLine={false}
               tickMargin={8}
               minTickGap={32}
               tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString('en-US', {
                     month: 'short',
                     day: 'numeric',
                  })
               }}
            />
            <ChartTooltip
               cursor={false}
               content={
                  <ChartTooltipContent
                     labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString('en-US', {
                           month: 'short',
                           day: 'numeric',
                        })
                     }}
                     indicator="dot"
                  />
               }
            />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" strokeWidth={1.5} />
            <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" strokeWidth={1.5} />
         </AreaChart>
      </ChartContainer>
   )
}

const Contents = () => {
   return (
      <div className="flex h-[215px] items-end justify-start gap-6 duration-300">
         <div className="relative w-full">
            <div className="space-y-2">
               <p className="text-sm font-semibold">Data Analytics</p>
               <div className="flex flex-wrap items-center justify-start gap-1.5">
                  <div className="flex items-center justify-start gap-1 rounded-full border border-black/10 px-2 py-1 text-[10px] dark:border-white/10">
                     {/* <LuChartNoAxesColumnIncreasing />  */}
                     <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <line x1="12" x2="12" y1="20" y2="10"></line>
                        <line x1="18" x2="18" y1="20" y2="4"></line>
                        <line x1="6" x2="6" y1="20" y2="16"></line>
                     </svg>
                     <p>Monthly Visits</p>
                  </div>
                  <div className="flex items-center justify-start gap-1 rounded-full border border-black/10 px-2 py-1 text-[10px] dark:border-white/10">
                     {/* <LuClock />  */}
                     <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                     </svg>
                     <p>Last 24hrs</p>
                  </div>
                  <p className="pl-4 text-sm font-semibold text-green-600 dark:text-white">
                     +
                     {
                        <Counter
                           from={0}
                           to={85}
                           // to={getRandomNumber(25, 100)}
                           animationOptions={{ duration: 1 }}
                           className=""
                        />
                     }
                     %
                  </p>
                  {/* <FaArrowTrendUp className="text-green-600 dark:text-white" /> */}
                  <svg
                     stroke="currentColor"
                     fill="currentColor"
                     strokeWidth="0"
                     viewBox="0 0 576 512"
                     className="text-green-600 dark:text-white"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                  </svg>
               </div>
            </div>

            <div className="absolute top-1/2 left-4 z-10 rounded-full border-2 border-black/5 bg-white px-3 py-1 text-xs font-medium backdrop-blur-3xl md:left-[70px] dark:border-white/5 dark:bg-white/10">
               <p>Real-Time Insights ✨</p>
            </div>

            <ChartSection />
         </div>
      </div>
   )
}
