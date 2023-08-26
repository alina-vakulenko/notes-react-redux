import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Table from "./Table";
import * as TableRowStories from "./TableRow.stories";

export const MockedState = {
    rows: [
        { ...TableRowStories.Default.args.data, id: "1", title: "Task 1" },
        { ...TableRowStories.Default.args.data, id: "2", title: "Task 2" },
        { ...TableRowStories.Default.args.data, id: "3", title: "Task 3" },
        { ...TableRowStories.Default.args.data, id: "4", title: "Task 4" },
        { ...TableRowStories.Default.args.data, id: "5", title: "Task 5" },
        { ...TableRowStories.Default.args.data, id: "6", title: "Task 6" },
    ],
};

const Mockstore = ({ tableState, children }) => (
    <Provider
        store={configureStore({
            reducer: {
                taskbox: createSlice({
                    name: "table",
                    initialState: tableState,
                    reducers: {
                        updateTaskState: (state, action) => {
                            const { id, newTaskState } = action.payload;
                            const task = state.tasks.findIndex(
                                (task) => task.id === id
                            );
                            if (task >= 0) {
                                state.tasks[task].state = newTaskState;
                            }
                        },
                    },
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);

export default {
    component: Table,
    title: "Generic Table/Table",
    decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
    tags: ["autodocs"],
    excludeStories: /.*MockedState$/,
};

export const Default = {
    decorators: [
        (story) => <Mockstore tableState={MockedState}>{story()}</Mockstore>,
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

export const WithCaption = {};
export const withActions = {};
export const Empty = {
    decorators: [
        (story) => (
            <Mockstore
                tableState={{
                    ...MockedState,
                    rows: [],
                }}
            >
                {story()}
            </Mockstore>
        ),
    ],
};
