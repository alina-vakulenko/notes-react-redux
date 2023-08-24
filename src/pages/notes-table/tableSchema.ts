import { createColumnHelper } from "@tanstack/react-table";
import type { Note } from "../../redux/notes/types";
import { getFormattedDate } from "./../../utils/getFormattedDate";

const columnHelper = createColumnHelper<Note>();

export const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("created", {
        header: "Created At",
        cell: (props) =>
            getFormattedDate(String(props.getValue()), {
                month: "numeric",
                day: "numeric",
                year: "numeric",
            }),
    }),
    columnHelper.accessor("category", {
        header: "Category",
    }),
    columnHelper.accessor("content", {
        header: "Content",
    }),
    columnHelper.accessor("dates", {
        header: "Dates",
        cell: (props) => {
            const items = String(props.getValue()).split(", ");
            let result = "";
            for (const item of items) {
                try {
                    const transformtedDate = getFormattedDate(item, {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                    });
                    result = result.concat(transformtedDate, " ");
                } catch (e) {
                    result = result.concat(item, " ");
                }
            }
            return result;
        },
    }),
    columnHelper.display({
        id: "actions",
        header: () => "Actions",
        // cell: (props) => console.log(props.row),
    }),
];
