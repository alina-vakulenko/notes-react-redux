import { TableRow, TableCell } from "@/components/ui/table";
import { ReactNode } from "react";
import { Cell } from "@tanstack/react-table";

type ITableCell<TData, TValue> = Cell<TData, TValue>;

interface TableRowProps<TData, TValue>
    extends React.HTMLAttributes<HTMLTableRowElement> {
    isSelected: boolean;
    cells: ITableCell<TData, TValue>[];
    renderCell: (cell: ITableCell<TData, TValue>) => ReactNode;
}

export default function TableRecord<TData>({
    cells,
    renderCell,
    isSelected,
}: TableRowProps<TData, TValue>) {
    return (
        <TableRow
            data-state={isSelected && "selected"}
            className="bg-slate-100 border-b-2 border-b-transparent"
        >
            {cells.map((cell) => (
                <TableCell
                    key={cell.id}
                    className="p-2 first-of-type:font-semibold overflow-hidden text-ellipsis"
                >
                    {renderCell(cell)}
                </TableCell>
            ))}
        </TableRow>
    );
}
