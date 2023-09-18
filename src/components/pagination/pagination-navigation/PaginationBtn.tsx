import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PaginationBtnProps {
    children: ReactNode;
    disabled: boolean;
    onClick: () => void;
}
export default function PaginationBtn({
    children,
    disabled,
    onClick,
}: PaginationBtnProps) {
    return (
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
