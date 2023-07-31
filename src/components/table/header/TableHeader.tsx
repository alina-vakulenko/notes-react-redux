import { ITableColumn, ITableAction, ITableDataItem } from "../types";

interface ITableHeaderProps<T extends ITableDataItem, K extends keyof T, E> {
    columns: ITableColumn<T, K>[];
    actions?: ITableAction<E>[];
}

function TableHeader<T extends ITableDataItem, K extends keyof T, E>({
    columns,
    actions,
}: ITableHeaderProps<T, K, E>) {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={`${column.key as string}-header`} scope="col">
                        {column.header}
                    </th>
                ))}
                {actions &&
                    actions.map((action) => (
                        <th key={`${action.key as string}-header`} scope="col">
                            {action.header}
                        </th>
                    ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
