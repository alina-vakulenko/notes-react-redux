import { TableRow, TableCell } from "@/components/ui/table";
import { Row, flexRender } from "@tanstack/react-table";

interface TableRowProps<TData>
    extends React.HTMLAttributes<HTMLTableRowElement> {
    row: Row<TData>;
}

export default function TableRecord<TData>({ row }: TableRowProps<TData>) {
    return (
        <TableRow
            data-state={row.getIsSelected() && "selected"}
            className="bg-slate-100 border-b-2 border-b-transparent"
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell
                    key={cell.id}
                    className="p-2 first-of-type:font-semibold overflow-hidden text-ellipsis"
                >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}
