import { cn } from '@/lib/utils'

export interface OrbitingCirclesProps {
   className?: string
   children?: React.ReactNode
   reverse?: boolean
   duration?: number
   delay?: number
   radius?: number
   radiusStart?: number
   radiusEnd?: number
}

export function OrbitingCircles({
   className,
   children,
   reverse,
   duration = 20,
   delay = 10,
   radius = 50,
   radiusStart = 0,
   radiusEnd = 360,
}: OrbitingCirclesProps) {
   return (
      <div
         style={
            {
               '--duration': duration,
               '--radius': radius,
               '--delay': -delay,
               '--radiusStart': `${radiusStart}deg`,
               '--radiusEnd': `${radiusEnd}deg`,
            } as React.CSSProperties
         }
         className={cn(
            'animate-orbit absolute flex size-full transform-gpu items-center justify-center [animation-delay:calc(var(--delay)*1000ms)]',
            { '[animation-direction:reverse]': reverse },
            className,
         )}
      >
         {children}
      </div>
   )
}
