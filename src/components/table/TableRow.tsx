import { ReactNode } from "react";
import Cell from "./TableRowCell";
import { ITableColumn, ITableRow } from "./types";

function TableRow<T>(props: ITableRow<T>) {
    const { columns, data } = props;

    return (
        <tr>
            {columns.map((column: ITableColumn<T>) => (
                <Cell
                    key={column.key as string}
                    value={data[column.key] as ReactNode}
                />
            ))}
        </tr>
    );
}

export default TableRow;
