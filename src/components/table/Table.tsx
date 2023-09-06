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
import TableRecord from "./TableRecord";

interface TableProps<TData> {
    caption?: string;
    rows: Row<TData>[];
    headerGroups: HeaderGroup<TData>[];
}

export default function DataTable<TData>({
    caption,
    headerGroups,
    rows,
}: TableProps<TData>) {
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
                {rows?.length > 0 ? (
                    rows.map((row) => (
                        <TableRecord
                            key={row.id}
                            cells={row.getVisibleCells()}
                            renderCell={(cell) =>
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }
                            isSelected={row.getIsSelected()}
                        />
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
