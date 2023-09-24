import { Column } from "@tanstack/react-table";
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

import { useReactTableColumnActions } from "@/hooks/useReactTableColumnActions";

interface TableColumnHeaderProps<TData>
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    column: Column<TData>;
    className?: string;
}

export default function TableColumnHeader<TData>({
    column,
    title,
    className,
}: TableColumnHeaderProps<TData>) {
    const {
        sortable,
        hideable,
        isSorted,
        isVisible,
        sortColumn,
        toggleColumnVisibility,
    } = useReactTableColumnActions(column);

    if (!sortable && !hideable) {
        return <div className={cn("px-4", className)}>{title}</div>;
    }

    return (
        <div className={cn("flex items-center", className)}>
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
                <DropdownMenuContent align="start" className="bg-popover">
                    {sortable ? (
                        <>
                            <DropdownMenuItem onClick={() => sortColumn("asc")}>
                                <RxArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                Asc
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => sortColumn("desc")}
                            >
                                <RxArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                Desc
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </>
                    ) : null}

                    {hideable ? (
                        <DropdownMenuItem
                            onClick={() => toggleColumnVisibility(!isVisible)}
                        >
                            <RxEyeNone className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Hide
                        </DropdownMenuItem>
                    ) : null}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
