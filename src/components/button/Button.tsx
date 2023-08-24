import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
    shape?: "circle" | "rectangle" | "square";
    size?: "sm" | "md" | "lg";
};

const Button = ({
    children,
    onClick,
    shape = "rectangle",
    ...props
}: ButtonProps) => {
    const btnBorderRadius = shape === "circle" ? "rounded-full" : "rounded";
    // const fontSize =
    //     size === "sm" ? "text-base" : size === "md" ? "text-xl" : "text-2xl";
    // const btnSize =
    // size === "sm" ? "w-6 h-6" : size === "md" ? "w-10 h-10" : "w-14 h-14";
    const btnClassName = `flex items-center justify-center px-4 py-2 ${btnBorderRadius} bg-slate-700 text-white ring-2 ring-inset ring-slate-700 hover:bg-slate-600 hover:ring-slate-600 focus:outline-none focus:bg-slate-800 focus:ring-slate-800`;

    return (
        <button onClick={onClick} className={btnClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
