import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { RxMixerHorizontal } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface TableViewOptionsProps {
    isVisible: boolean;
    toggleColumnVisibility: (isVisible: boolean) => void;
    columnIds: string[];
}

export default function TableViewOptions({
    columnIds,
    isVisible,
    toggleColumnVisibility,
}: TableViewOptionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <RxMixerHorizontal className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {columnIds.map((columnId) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={columnId}
                            className="capitalize"
                            checked={isVisible}
                            onCheckedChange={(isVisible) =>
                                toggleColumnVisibility(!isVisible)
                            }
                        >
                            {columnId}
                        </DropdownMenuCheckboxItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
