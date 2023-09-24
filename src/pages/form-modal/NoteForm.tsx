import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CategoryEnum, categories } from "../notes-table/data/categories";
import { NoteCreateInput, noteSchema } from "../notes-table/data/noteData";

interface NoteFormProps {
    defaultData: NoteCreateInput;
    onSubmit: (data: NoteCreateInput) => void;
}

interface CategoriesProps {
    selectedValue: CategoryEnum;
    onChange: (value: CategoryEnum) => void;
}

const Categories = ({ selectedValue, onChange }: CategoriesProps) => {
    return (
        <RadioGroup
            onValueChange={onChange}
            className="flex flex-col space-y-0"
            value={selectedValue}
        >
            {categories.map((category) => (
                <FormItem
                    key={category.value}
                    className="flex items-center space-x-3 space-y-0"
                >
                    <FormControl>
                        <RadioGroupItem value={category.value} />
                    </FormControl>
                    <FormLabel className="capitalize">
                        {category.label}
                    </FormLabel>
                </FormItem>
            ))}
        </RadioGroup>
    );
};

export default function NoteForm({ defaultData, onSubmit }: NoteFormProps) {
    const form = useForm<NoteCreateInput>({
        resolver: zodResolver(noteSchema),
        values: { ...defaultData },
    });
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 w-full text-foreground"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Categories
                                    selectedValue={field.value as CategoryEnum}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none" {...field} />
                            </FormControl>
                            <FormDescription>
                                All dates you mention in the format{" "}
                                <span className="italic">day/month/year</span>{" "}
                                will appear in a separate column
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    size="lg"
                    className="text-lg ms-auto hover:bg-primary/90"
                >
                    Save
                </Button>
            </form>
        </Form>
    );
}
