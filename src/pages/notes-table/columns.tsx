import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "@/components/table/table-column-header/TableColumnHeader";
import { getFormattedDate } from "@/utils/getFormattedDate";
import TableRowActions from "./row-actions";
import DataCell from "./DataCell";
import type { Note } from "@/api/schemas";

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
        header: ({ column }) => {
            return <TableColumnHeader title="Name" column={column} />;
        },
        cell: ({ row }) => {
            const { archived } = row.original;
            return (
                <DataCell value={row.getValue("name")} isArchived={archived} />
            );
        },
        accessorKey: "name",
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Created" column={column} />;
        },
        accessorKey: "createdAt",
        cell: ({ row }) => {
            const { archived } = row.original;
            const value = getFormattedDate(String(row.getValue("createdAt")), {
                month: "numeric",
                day: "numeric",
                year: "numeric",
            });
            return <DataCell value={value} isArchived={archived} />;
        },
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Category" column={column} />;
        },
        cell: ({ row }) => {
            const { archived, category } = row.original;
            return (
                <DataCell
                    value={category.name}
                    isArchived={archived}
                    className="capitalize"
                />
            );
        },
        accessorKey: "category",
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Content" column={column} />;
        },
        cell: ({ row }) => {
            const { archived } = row.original;
            return (
                <DataCell
                    value={row.getValue("content")}
                    isArchived={archived}
                />
            );
        },
        accessorKey: "content",
        enableSorting: true,
        enableHiding: true,
    },
    {
        header: ({ column }) => {
            return <TableColumnHeader title="Dates" column={column} />;
        },
        accessorKey: "dates",
        cell: ({ row }) => {
            const { archived } = row.original;
            const items: string[] = row.getValue("dates");
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
            return <DataCell value={result} isArchived={archived} />;
        },
        enableSorting: true,
        enableHiding: true,
    },
    {
        id: "actions",
        cell: ({ row }) => <TableRowActions data={row.original} />,
    },
];
