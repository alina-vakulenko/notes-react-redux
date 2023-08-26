import { flexRender } from "@tanstack/react-table";
import type { Table as ITable } from "@tanstack/react-table";
import {
    Table,
    TableCaption,
    TableHeader,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableCell,
} from "@/components/ui/table";

interface TableProps<TData> {
    table: ITable<TData>;
    caption?: string;
}

export default function DataTable<TData>({
    table,
    caption,
}: TableProps<TData>) {
    return (
        <Table className="table-auto border-collapse w-full max-w-full whitespace-break-spaces overflow-x-auto">
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHeaderCell
                                    key={header.id}
                                    className="p-2 text-center text-white bg-slate-700"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHeaderCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            className="bg-gray-100 hover:bg-gray-50 border-b-transparent border-b-2"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    className="p-2 first-of-type:font-semibold overflow-hidden text-ellipsis"
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell
                            // colSpan={columns.length}
                            className="h-24 text-center"
                        >
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
