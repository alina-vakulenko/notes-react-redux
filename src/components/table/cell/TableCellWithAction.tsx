import { ReactNode } from "react";

import styles from "../Table.module.css";

interface ITableCellWithActionProps {
    label: ReactNode;
    actionName: string;
    onClick: () => void;
    isExample: boolean;
    align: "center" | "start" | "end";
}

function TableCellWithAction(props: ITableCellWithActionProps) {
    const { label, actionName, onClick, isExample, align } = props;

    return (
        <td className={styles[`cell-align-${align}`]}>
            <button
                onClick={onClick}
                className={styles["btn-action"]}
                title={actionName}
                disabled={isExample}
            >
                {label}
            </button>
        </td>
    );
}

export default TableCellWithAction;
