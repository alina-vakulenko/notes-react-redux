import Row from "./TableRow";
import { ITableProps } from "./types";

function Table<T>(props: ITableProps<T>) {
    const { rows, columns, caption } = props;
    return (
        <table>
            {caption && <caption>{caption}</caption>}
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key as string}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <Row key={index} columns={columns} data={row} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
