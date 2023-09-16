export interface RowsSelectionProps {
    tableRowsCount: number;
    tableSelectedRowsCount: number;
}

export default function RowsCounter({
    tableRowsCount,
    tableSelectedRowsCount,
}: RowsSelectionProps) {
    return (
        <div className="flex-1 text-sm text-muted-foreground">
            {tableSelectedRowsCount} of {tableRowsCount} row(s) selected.
        </div>
    );
}
