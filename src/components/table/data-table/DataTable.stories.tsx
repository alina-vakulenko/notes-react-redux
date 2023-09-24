import { ReactNode } from "react";
import { Provider } from "react-redux";
import { initialState } from "@/redux/notes/initialState";
import { store } from "@/redux/store";
import { Note } from "@/redux/notes/types";
import DataTable from "./DataTable";

export const MockedState = {
    rows: initialState.notesList,
};

const Mockstore = ({
    tableState,
    children,
}: {
    tableState: { rows: Note[] };
    children: ReactNode;
}) => <Provider store={store}>{children}</Provider>;

export default {
    component: DataTable,
    title: "DataTable/Table",
    // decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
    tags: ["autodocs"],
    excludeStories: /.*MockedState$/,
};

export const Default = {
    decorators: [
        (Story) => (
            <Mockstore tableState={MockedState}>
                <Story />
            </Mockstore>
        ),
    ],
};

// export const WithPinnedTasks = {
//     decorators: [
//         (story) => {
//             const pinnedtasks = [
//                 ...MockedState.rows.slice(0, 5),
//                 { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
//             ];

//             return (
//                 <Mockstore
//                     tableState={{
//                         ...MockedState,
//                         tasks: pinnedtasks,
//                     }}
//                 >
//                     {story()}
//                 </Mockstore>
//             );
//         },
//     ],
// };

export const Empty = {
    decorators: [
        (Story) => (
            <Mockstore
                tableState={{
                    rows: [],
                }}
            >
                <Story />
            </Mockstore>
        ),
    ],
};
