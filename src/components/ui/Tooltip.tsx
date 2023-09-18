import { ReactNode } from "react";

interface TooltipProps {
    message: string;
    children: ReactNode;
}

const Tooltip = ({ message, children }: TooltipProps) => {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute top-8 scale-0 transition-all rounded bg-accent p-2 text-xs text-foreground group-hover:scale-100">
                {message}
            </span>
        </div>
    );
};

export default Tooltip;
