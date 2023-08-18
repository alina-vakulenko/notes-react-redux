import { ITableDataItem } from "../types";

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
    const cellAlign = `text-${align}`;
    const cellClassName = `p-2 first-of-type:font-semibold overflow-hidden text-ellipsis ${cellAlign} ${
        isExample ? "italic text-gray-500" : ""
    }`;

    return (
        <td className={cellClassName}>
            {formattedValue ? formattedValue : value}
        </td>
    );
}

export default TableCellWithValue;
