import { RxDotsHorizontal } from "react-icons/rx";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTableActions } from "@/hooks/useTableActions";

interface TableRowActionsProps<TData> {
    row: Row<TData>;
}

export default function TableRowActions<Note>({
    row,
}: TableRowActionsProps<Note>) {
    const note = row.original;
    const { openEditForm, onRemove, onArchived } = useTableActions();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <RxDotsHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-[160px]">
                <DropdownMenuItem onClick={() => openEditForm(note.id)}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onArchived(note.id)}>
                    Archive
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onRemove(note.id)}>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
