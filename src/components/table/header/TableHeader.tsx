import { HeaderGroup, flexRender } from "@tanstack/react-table";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Tooltip from "../../tooltip/Tooltip";
import type { ITableDataItem } from "../types";

function TableHeader<T extends ITableDataItem>({
    headerGroups,
}: {
    headerGroups: HeaderGroup<T>[];
}) {
    return (
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className="p-2 text-center text-white bg-slate-700"
                            scope="col"
                        >
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                  )}
                            {/* {header.info && (
                                <Tooltip message={header.info}>
                                    <BsFillInfoCircleFill />
                                </Tooltip>
                            )} */}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}

export default TableHeader;
