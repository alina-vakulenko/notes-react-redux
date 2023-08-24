import type { IActionCellProps } from "../types";

function TableCellWithAction({
    onClick,
    children,
    align,
    isExample,
}: IActionCellProps) {
    const cellAlign = `text-${align}`;
    const cellClassName = `p-2 first-of-type:font-semibold overflow-hidden text-ellipsis ${cellAlign} ${
        isExample ? "italic text-gray-500" : ""
    }`;

    return (
        <td className={cellClassName}>
            <button onClick={onClick}>{children}</button>
        </td>
    );
}

export default TableCellWithAction;
