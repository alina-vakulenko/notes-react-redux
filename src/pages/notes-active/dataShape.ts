import { getFormattedDate } from "../../utils/getFormattedDate";
import { NotesTableColumn } from "../types";

export const dataShape: NotesTableColumn[] = [
    {
        key: "name",
        header: "Name",
    },
    {
        key: "created",
        header: "Created",
        format: (value: string) =>
            getFormattedDate(value, {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
    },
    { key: "category", header: "Category", align: "center" },
    { key: "content", header: "Content" },
    {
        key: "dates",
        header: "Dates",
        format: (value: string) => {
            const valuesList = value.split(", ");
            let result = "";
            for (value of valuesList) {
                try {
                    const formattedDate = getFormattedDate(value, {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                    });
                    result = result.concat(formattedDate, " ");
                } catch (e) {
                    result = result.concat(value, " ");
                }
            }
            return result;
        },
    },
];
