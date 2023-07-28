export interface ITableColumn<T> {
    key: keyof T;
    title: string;
}

export interface ITableRow<T> {
    columns: ITableColumn<T>[];
    data: T;
}

export interface ITableCell<T> {
    value: T;
}

export interface ITableProps<T> {
    caption?: string;
    rows: T[];
    columns: ITableColumn<T>[];
}
