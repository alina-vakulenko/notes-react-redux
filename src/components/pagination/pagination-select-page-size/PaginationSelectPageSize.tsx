import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface PageSizeSelectProps {
    pageSize: number;
    setPageSize: (value: number) => void;
}

export default function PageSizeSelect({
    pageSize,
    setPageSize,
}: PageSizeSelectProps) {
    return (
        <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
                value={String(pageSize)}
                onValueChange={(value) => {
                    setPageSize(Number(value));
                }}
            >
                <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder={pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                            {pageSize}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
