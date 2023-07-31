import TableCellWithValue from "../cell/TableCellWithValue";
import TableCellWithAction from "../cell/TableCellWithAction";
import { ITableColumn, ITableAction, ITableDataItem } from "../types";

interface ITableRowProps<T extends ITableDataItem, K extends keyof T, E> {
    data: T;
    headers: ITableColumn<T, K>[];
    rowId: string;
    actions?: ITableAction<E>[];
}

function TableRow<T extends ITableDataItem, K extends keyof T, E>({
    headers,
    data,
    rowId,
    actions,
}: ITableRowProps<T, K, E>) {
    return (
        <tr>
            {headers.map((header) => (
                <TableCellWithValue
                    key={`${rowId}-${String(header.key)}`}
                    value={data[header.key]}
                    isExample={rowId === "row-example"}
                    align={header.align || "start"}
                    format={header.format}
                />
            ))}

            {actions &&
                actions.map((action) => (
                    <TableCellWithAction
                        key={`${rowId}-${String(action.key)}`}
                        label={action.header}
                        actionName={String(action.key)}
                        onClick={() => action.cb(String(data.id))}
                        isExample={rowId === "row-example"}
                        align={action.align || "start"}
                    />
                ))}
        </tr>
    );
}

export default TableRow;
