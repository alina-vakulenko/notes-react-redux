import { flexRender } from "@tanstack/react-table";
import type { HeaderGroup, Row } from "@tanstack/react-table";
import {
    Table,
    TableCaption,
    TableHeader,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableCell,
} from "@/components/ui/table";

interface DataTableProps<TData> {
    caption?: string;
    rows: Row<TData>[];
    headerGroups: HeaderGroup<TData>[];
}

export default function DataTable<TData>({
    caption,
    headerGroups,
    rows,
}: DataTableProps<TData>) {
    return (
        <Table className="table-auto border-collapse w-full whitespace-break-spaces overflow-x-auto">
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableHeader>
                {headerGroups.map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHeaderCell
                                    key={header.id}
                                    className="p-2 text-center text-primary-foreground bg-primary"
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
                {rows?.length > 0 ? (
                    rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            className="border-b-2 border-b-transparent bg-secondary"
                        >
                            {row.getAllCells().map((cell) => (
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
                            colSpan={headerGroups[0].headers.length}
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
