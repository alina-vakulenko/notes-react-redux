import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface TableToggleRowsViewParams {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label: string;
}
export default function TableToggleRowsView({
    checked,
    onCheckedChange,
    label,
}: TableToggleRowsViewParams) {
    return (
        <div className="flex items-center space-x-2">
            <Switch
                name="toggle-rows-view"
                checked={checked}
                onCheckedChange={onCheckedChange}
            />
            <Label htmlFor="toggle-rows-view">{label}</Label>
        </div>
    );
}
