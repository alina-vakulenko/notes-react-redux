import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "@/components/table/table-column-header/TableColumnHeader";
import { getFormattedDate } from "@/utils/getFormattedDate";
import TableRowActions from "./row-actions";
import type { Note } from "@/redux/notes/types";

export const columns: ColumnDef<Note>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                className="border-primary-foreground"
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
        header: ({ column }) => {
            return <TableColumnHeader title="Name" column={column} />;
        },
        accessorKey: "name",
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Created" column={column} />;
        },
        accessorKey: "created",
        cell: ({ row }) =>
            getFormattedDate(String(row.getValue("created")), {
                month: "numeric",
                day: "numeric",
                year: "numeric",
            }),
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Category" column={column} />;
        },
        accessorKey: "category",
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        header: ({ column }) => {
            return (
                <TableColumnHeader
                    title="Content"
                    className="text-start"
                    column={column}
                />
            );
        },
        accessorKey: "content",
        enableSorting: false,
        enableHiding: false,
    },
    {
        header: ({ column }) => {
            return (
                <TableColumnHeader
                    title="Dates"
                    className="text-start"
                    column={column}
                />
            );
        },
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
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => <TableRowActions data={row.original} />,
    },
];
