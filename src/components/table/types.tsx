import { ReactNode, ReactElement } from "react";
import { ColumnDef } from "@tanstack/react-table";

export interface ITableDataItem {
    id: string;
}

export enum ActionEnum {
    EDIT = "edit",
    REMOVE = "remove",
    TOGGLE_STATUS = "toggleStatus",
}

export type DataType =
    | "string"
    | "number"
    | "boolean"
    | "date"
    | "link"
    | "action"
    | ReactElement;

export type AlignVariant = "center" | "start" | "end";

export type IActionCellProps = {
    onClick: () => void;
    children: ReactNode;
    align?: AlignVariant;
    isExample?: boolean;
};

export type IRowAction<T extends ITableDataItem> = {
    key: ActionEnum;
    type: DataType;
    colName: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    info?: string;
    align?: AlignVariant;
    isExample?: boolean;
    onClick: (data: T) => void;
    children: ReactNode;
};

// export type IColDefinition<T extends ITableDataItem, K extends keyof T> = {
//     key: K;
//     type: DataType;
//     colName: string;
//     iconStart?: ReactNode;
//     iconEnd?: ReactNode;
//     info?: string;
//     align?: AlignVariant;
//     transform?: (value: T[K]) => DataType;
// };

export type IColDefinition<T> = ColumnDef<T>;
// export interface ITableHeaderProps<
//     T extends ITableDataItem,
//     K extends keyof T
// > {
//     columns: IColDefinition<T, K>[];
//     actions?: IRowAction<T>[];
// }

// export interface ITableRowProps<T extends ITableDataItem, K extends keyof T> {
//     dataSchema: IColDefinition<>[];
//     data: T;
//     actions?: IRowAction<T>[];
//     isExample?: boolean;
// }

export interface ITableBodyProps<T extends ITableDataItem> {
    columns: IColDefinition<T>[];
    rows: T[];
    // actions?: IRowAction<T>[];
    exampleRow?: T;
}

export interface ITableProps<T extends ITableDataItem>
    extends ITableBodyProps<T> {
    caption?: string;
}
