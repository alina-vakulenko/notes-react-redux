import { ColumnDef } from "@tanstack/react-table";
import { NoteStats } from "@/api/schemas";

export const columns: ColumnDef<NoteStats>[] = [
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "active",
        header: "Active",
        cell: ({ row }) => (
            <div className="text-center">{row.getValue("active")}</div>
        ),
    },
    {
        accessorKey: "archived",
        header: "Archived",
        cell: ({ row }) => (
            <div className="text-center">{row.getValue("archived")}</div>
        ),
    },
];
