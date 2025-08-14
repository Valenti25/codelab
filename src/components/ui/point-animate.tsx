import { ReactNode } from "react"


export const PointAnimate = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <div className="ai-points-wrapper">
                {Array.from({ length: 10 }).map((_, i) => (
                    <i key={i} className="point" />
                ))}
            </div>
            {children}
        </>
    )
}
