import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TableViewColumns from "./TableToggleColumnsView";
import { columns } from "@/pages/notes-table/columns";
import { initialState } from "@/redux/notes/initialState";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useReactTableHelpers } from "@/hooks/useReactTableHelpers";

const meta: Meta<typeof TableViewColumns> = {
    component: TableViewColumns,
    title: "DataTable/Toolbar/Toggle columns view",
    tags: ["autodocs"],
};

export default meta;
// type Story = StoryObj<typeof TableViewColumns>;

export const Default = () => {
    const [data, setData] = useState(initialState.notesList);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    const { hideableColumns } = useReactTableHelpers(table);
    return <TableViewColumns columns={hideableColumns} />;
};
