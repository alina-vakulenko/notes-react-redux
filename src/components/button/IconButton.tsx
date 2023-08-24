import { ReactElement, ReactNode, MouseEvent } from "react";

type IconProps = {
    fontSize?: string;
    color?: string;
};

type ButtonProps = {
    children: ReactNode;
    icon: ReactElement<IconProps>;
    onClick: () => void;
};

const IconButton = ({ children, icon, onClick, ...args }: ButtonProps) => {
    return (
        <button
            onClick={(e): MouseEvent<HTMLButtonElement> => onClick(e)}
            className="rounded text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
            {...args}
        >
            {icon}
            {children}
        </button>
    );
};

export default IconButton;
