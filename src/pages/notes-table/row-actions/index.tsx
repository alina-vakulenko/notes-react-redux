import { useLocation, useNavigate } from "react-router-dom";
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
import { useRowActions } from "@/hooks/useRowActions";
import type { Note } from "@/redux/notes/types";

interface TableRowActionsProps {
    data: Note;
}

export default function TableRowActions({ data }: TableRowActionsProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const { onRemove, onArchived, onUnarchived } = useRowActions();

    const handleEditClick = () => {
        navigate(`/edit/${data.id}`, {
            state: { backgroundLocation: location },
        });
    };

    const handleDeleteNote = () => {
        onRemove(data.id);
    };

    const handleArchiveNote = () => {
        onArchived(data.id);
    };

    const handleUnarchiveNote = () => {
        onUnarchived(data.id);
    };

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
            <DropdownMenuContent align="end" className="bg-popover w-[160px]">
                {!data.archived && (
                    <DropdownMenuItem
                        onClick={handleEditClick}
                        className="flex justify-between items-center"
                    >
                        Edit
                        <RxPencil1 />
                    </DropdownMenuItem>
                )}
                {!data.archived && (
                    <DropdownMenuItem
                        onClick={handleArchiveNote}
                        className="flex justify-between items-center"
                    >
                        Archive
                        <RxPinBottom />
                    </DropdownMenuItem>
                )}
                {data.archived && (
                    <DropdownMenuItem
                        onClick={handleUnarchiveNote}
                        className="flex justify-between items-center"
                    >
                        Unarchive
                        <RxPinTop />
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem
                    onClick={handleDeleteNote}
                    className="flex justify-between items-center"
                >
                    Delete
                    <RxTrash className="text-destructive" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
