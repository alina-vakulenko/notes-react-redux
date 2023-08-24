import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import TableHeader from "./header/TableHeader";
import TableBody from "./body/TableBody";
import { ITableDataItem } from "./types";
import type { TableOptions, ColumnDef } from "@tanstack/react-table";

function Table<T extends ITableDataItem>({
    columns,
    data,
}: {
    columns: ColumnDef<T>[];
    data: T[];
}) {
    const tableOptions: TableOptions<T> = {
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    };
    const table = useReactTable(tableOptions);

    return (
        <table className="table-auto border-separate w-full max-w-full whitespace-break-spaces overflow-x-auto">
            {/* {showCaption && (
                <caption className="caption-top text-center mb-1 text-2xl font-semibold text-slate-700 tracking-wide">
                    {caption}
                </caption>
            )} */}
            <TableHeader headerGroups={table.getHeaderGroups()} />
            <TableBody rows={table.getRowModel().rows} />
        </table>
    );
}

export default Table;
