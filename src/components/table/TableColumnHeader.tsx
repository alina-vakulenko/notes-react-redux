import { RxArrowDown, RxArrowUp, RxCaretSort, RxEyeNone } from "react-icons/rx";
import { cn } from "@/utils/mergeClassnames";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SortDirection } from "@/hooks/useColumnActions";

interface TableColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    canBeSorted: boolean;
    isSorted: false | SortDirection;
    isVisible: boolean;
    toggleColumnVisibility: (isVisible: boolean) => void;
    sortColumn: (direction: SortDirection) => void;
    className?: string;
}

export default function TableColumnHeader({
    title,
    canBeSorted,
    isSorted,
    isVisible,
    className,
    sortColumn,
    toggleColumnVisibility,
}: TableColumnHeaderProps) {
    if (!canBeSorted) {
        return <div className={cn(className)}>{title}</div>;
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 data-[state=open]:bg-accent"
                    >
                        <span>{title}</span>
                        {isSorted === "desc" ? (
                            <RxArrowDown className="ml-2 h-4 w-4" />
                        ) : isSorted === "asc" ? (
                            <RxArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <RxCaretSort className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white">
                    <DropdownMenuItem onClick={() => sortColumn("asc")}>
                        <RxArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortColumn("desc")}>
                        <RxArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => toggleColumnVisibility(!isVisible)}
                    >
                        <RxEyeNone className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
