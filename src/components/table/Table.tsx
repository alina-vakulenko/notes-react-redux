import TableHeader from "./header/TableHeader";
import TableBody from "./body/TableBody";
import { ITableProps, ITableDataItem } from "./types";

function Table<T extends ITableDataItem, K extends keyof T, E>(
    props: ITableProps<T, K, E>
) {
    const { caption, rows, columns, actions, exampleRow, hideHeader } = props;
    const showCaption = caption && (rows.length > 0 || exampleRow);
    const showHeader = !hideHeader && (rows.length > 0 || exampleRow);

    return (
        <table className="table-auto border-separate w-full max-w-full whitespace-break-spaces overflow-x-auto">
            {showCaption && (
                <caption className="caption-top text-center mb-1 text-2xl font-semibold text-slate-700 tracking-wide">
                    {caption}
                </caption>
            )}
            {showHeader && <TableHeader columns={columns} actions={actions} />}

            <TableBody
                rows={rows}
                columns={columns}
                actions={actions}
                exampleRow={exampleRow}
            />
        </table>
    );
}

export default Table;
