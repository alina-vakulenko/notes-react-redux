import TableCell from "../cell/TableCell";
import type { ITableDataItem } from "../types";
import type { Cell } from "@tanstack/react-table";

function TableRow<T extends ITableDataItem>({ cells }: { cells: Cell<T>[] }) {
    return (
        <tr className="bg-gray-100 hover:bg-gray-50">
            {cells.map((cell) => (
                <TableCell key={cell.id} cell={cell} />
            ))}
        </tr>

        // <tr className="bg-gray-100 hover:bg-gray-50">
        //     {dataSchema.map((columnSchema) => (
        //         <TableCell
        //             key={`${data.id}-${String(columnSchema.key)}`}
        //             type={columnSchema.type}
        //             value={data[columnSchema.key]}
        //             align={columnSchema.align || "start"}
        //             transform={columnSchema.transform}
        //             isExample={isExample}
        //         />
        //     ))}
        //     {actions?.map((action) => (
        //         <TableCellWithAction
        //             key={`${data.id}-${String(action.key)}`}
        //             onClick={() => action.onClick(data)}
        //             align={action.align || "center"}
        //             isExample={isExample}
        //         >
        //             {action.children}
        //         </TableCellWithAction>
        //     ))}
        // </tr>
    );
}

export default TableRow;
