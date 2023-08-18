import { ReactNode } from "react";

interface ITableCellWithActionProps {
    label: ReactNode;
    actionName: string;
    onClick: () => void;
    isExample: boolean;
    align: "center" | "start" | "end";
}

function TableCellWithAction(props: ITableCellWithActionProps) {
    const { label, actionName, onClick, isExample, align } = props;
    const cellAlign = `text-${align}`;
    const cellClassName = `${cellAlign}`;

    return (
        <td className={cellClassName}>
            <button
                onClick={onClick}
                className="rounded text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
                title={actionName}
                disabled={isExample}
            >
                <span>{label}</span>
            </button>
        </td>
    );
}

export default TableCellWithAction;
