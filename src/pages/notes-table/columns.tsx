import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "@/components/table/TableColumnHeader";
import type { Note } from "../../redux/notes/types";
import { getFormattedDate } from "../../utils/getFormattedDate";
import TableRowActions from "./TableRowActions";

export const columns: ColumnDef<Note>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Name" />
        ),
        accessorKey: "name",
    },
    {
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Created" />
        ),
        accessorKey: "created",
        cell: ({ row }) =>
            getFormattedDate(String(row.getValue("created")), {
                month: "numeric",
                day: "numeric",
                year: "numeric",
            }),
    },
    {
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Category" />
        ),
        accessorKey: "category",
    },
    {
        header: "Content",
        accessorKey: "content",
    },
    {
        header: "Dates",
        accessorKey: "dates",
        cell: ({ row }) => {
            const items = String(row.getValue("dates")).split(", ");
            let result = "";
            for (const item of items) {
                try {
                    const transformtedDate = getFormattedDate(item, {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                    });
                    result = result.concat(transformtedDate, " ");
                } catch (e) {
                    result = result.concat(item, " ");
                }
            }
            return result;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <TableRowActions row={row} />,
    },
];
