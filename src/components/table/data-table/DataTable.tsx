import { flexRender } from "@tanstack/react-table";
import type { HeaderGroup, Row } from "@tanstack/react-table";
import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
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
        <Table>
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableHeader>
                {headerGroups.map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="bg-background">
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
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
                            className="bg-background border-b dark:border-border hover:bg-secondary data-[state=selected]:bg-muted"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    className="p-2 overflow-hidden text-ellipsis"
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
