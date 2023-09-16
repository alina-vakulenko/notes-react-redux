import { ColumnDef } from "@tanstack/react-table";
import { CategoryEnum } from "../notes-table/data/categories";

export type NoteStats = {
    id: string;
    category: CategoryEnum;
    active: number;
    archived: number;
};

export const statTableIds: Record<CategoryEnum, string> = {
    idea: "i3434",
    task: "t4545",
    random: "rs5656",
};

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
