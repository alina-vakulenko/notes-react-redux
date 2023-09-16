import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useRowActions } from "@/hooks/useRowActions";

export default function ToggleArchived() {
    const { showArchived, toggleShowArchivedParams } = useRowActions();

    return (
        <div className="flex items-center space-x-2">
            <Switch
                name="show-archived"
                checked={showArchived}
                onCheckedChange={toggleShowArchivedParams}
            />
            <Label htmlFor="show-archived">Show archived notes</Label>
        </div>
    );
}
