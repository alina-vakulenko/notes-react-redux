import { ITableDataItem } from "../types";

import styles from "../Table.module.css";

interface ITableCellWithValueProps<
    T extends ITableDataItem,
    K extends keyof T
> {
    value: T[K];
    isExample: boolean;
    align: "center" | "start" | "end";
    format?: (value: string) => string;
}

function TableCellWithValue<T extends ITableDataItem, K extends keyof T>({
    value,
    isExample,
    align,
    format,
}: ITableCellWithValueProps<T, K>) {
    let formattedValue;

    if (format) {
        try {
            formattedValue = format(String(value));
        } catch (e) {
            console.log(e, `${value} can't be formatted`);
        }
    }

    return (
        <td
            className={`${
                styles[isExample ? "table-cell-example" : "table-cell"]
            } ${styles[`cell-align-${align}`]}`}
        >
            {formattedValue ? formattedValue : value}
        </td>
    );
}

export default TableCellWithValue;
