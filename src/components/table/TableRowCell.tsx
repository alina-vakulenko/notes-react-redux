import { ReactNode } from "react";
import { ITableCell } from "./types";

function Cell<T extends ReactNode>(props: ITableCell<T>) {
    const { value } = props;

    return <td>{value}</td>;
}

export default Cell;
