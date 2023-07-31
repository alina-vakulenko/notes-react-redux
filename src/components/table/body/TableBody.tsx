import TableRow from "../row/TableRow";
import { ITableBodyProps, ITableDataItem } from "../types";

function TableBody<T extends ITableDataItem, K extends keyof T, E>({
    rows,
    columns,
    actions,
    exampleRow,
}: ITableBodyProps<T, K, E>) {
    return (
        <tbody>
            {rows.length === 0 && exampleRow && (
                <TableRow
                    key={"row-example"}
                    headers={columns}
                    data={exampleRow}
                    actions={actions}
                    rowId={"row-example"}
                />
            )}
            {rows.map((row, index) => (
                <TableRow
                    key={`row-${index}`}
                    headers={columns}
                    data={row}
                    actions={actions}
                    rowId={`row-${index}`}
                />
            ))}
        </tbody>
    );
}

export default TableBody;
