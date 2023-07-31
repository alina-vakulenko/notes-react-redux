import { ReactNode } from "react";

export interface ITableDataItem {
    id: string | number;
}

export interface ITableColumn<T extends ITableDataItem, K extends keyof T> {
    key: K;
    header: string;
    align?: "center" | "start" | "end";
    format?: (value: string) => string;
}

export interface ITableAction<K> {
    key: K;
    header: ReactNode;
    cb: (id: string) => void;
    align?: "center" | "start" | "end";
}

export interface ITableProps<T extends ITableDataItem, K extends keyof T, E> {
    caption?: string;
    rows: T[];
    columns: ITableColumn<T, K>[];
    actions?: ITableAction<E>[];
    exampleRow?: T;
    hideHeader?: boolean;
}

export type ITableBodyProps<
    T extends ITableDataItem,
    K extends keyof T,
    E
> = Omit<ITableProps<T, K, E>, "caption">;
