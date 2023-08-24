import type { Row } from "@tanstack/react-table";
import type { ITableDataItem } from "../types";
import TableRow from "../row/TableRow";

function TableBody<T extends ITableDataItem>({ rows }: { rows: Row<T>[] }) {
    return (
        <tbody>
            {rows.map((row) => (
                <TableRow key={row.id} cells={row.getVisibleCells()} />
            ))}
        </tbody>
    );
}

export default TableBody;
