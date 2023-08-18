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
                    <th
                        key={`${column.key as string}-header`}
                        scope="col"
                        className="p-2 text-center text-white bg-slate-700"
                    >
                        {column.header}
                    </th>
                ))}
                {actions &&
                    actions.map((action) => (
                        <th
                            key={`${action.key as string}-header`}
                            scope="col"
                            className="p-2 text-white bg-slate-700"
                        >
                            <span className="flex justify-center">
                                {action.header}
                            </span>
                        </th>
                    ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
