import { cn } from "@/lib/utils";

interface ITitleGradient {
    text: string;
    className?: string;
}

export const TitleGradient = ({ text, className }: ITitleGradient) => {
    return (
        <h3 className={cn("bg-gradient-to-r from-[#000] to-[#999] bg-clip-text text-transparent font-semibold text-xl px-5 pt-5 pb-2 dark:from-[#fff]", className)}>
            {text}
        </h3>
    )
}
