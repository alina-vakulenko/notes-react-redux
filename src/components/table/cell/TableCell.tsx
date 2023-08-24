import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import { ITableDataItem } from "../types";
// interface ITableCellProps<T extends ITableDataItem, K extends keyof T> {
//     type: DataType;
//     value: T[K];
//     align: AlignVariant;
//     transform?: (value: T[K]) => DataType;
//     isExample?: boolean;
// }

function TableCell<T extends ITableDataItem>({ cell }: Cell<T>) {
    return (
        <td className="p-2 first-of-type:font-semibold overflow-hidden text-ellipsis">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
    );
}

export default TableCell;
