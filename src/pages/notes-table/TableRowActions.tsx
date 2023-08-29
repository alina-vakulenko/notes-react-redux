import { Link, useLocation } from "react-router-dom";
import { Row } from "@tanstack/react-table";
import {
    RxDotsHorizontal,
    RxTrash,
    RxPencil1,
    RxPinBottom,
    RxPinTop,
} from "react-icons/rx";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNoteTableActions } from "@/hooks/useNoteTableActions";

interface TableRowActionsProps<TData> {
    row: Row<TData>;
}

export default function TableRowActions<Note>({
    row,
}: TableRowActionsProps<Note>) {
    const location = useLocation();
    const note = row.original;
    const { onRemove, onArchived, onUnarchived } = useNoteTableActions();
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
                <DropdownMenuItem className="flex justify-between items-center">
                    <Link
                        to={`/edit/${note.id}`}
                        state={{ backgroundLocation: location }}
                    >
                        Edit
                        <RxPencil1 />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onArchived(note.id)}
                    className="flex justify-between items-center"
                >
                    Archive
                    <RxPinBottom />
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onUnarchived(note.id)}
                    className="flex justify-between items-center"
                >
                    Unarchive
                    <RxPinTop />
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onRemove(note.id)}
                    className="flex justify-between items-center"
                >
                    Delete
                    <RxTrash />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
