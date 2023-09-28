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
import { NoteSchema, CreateNoteInput } from "@/api/schemas";
import { useAppSelector } from "@/redux/hooks";
import { selectCategories } from "@/redux/categories/categoriesSlice";

interface NoteFormProps {
    defaultData: CreateNoteInput;
    onSubmit: (data: CreateNoteInput) => void;
}

interface CategoriesProps {
    selectedName: string;
    onChange: (name: string) => void;
}

const Categories = ({ selectedName, onChange }: CategoriesProps) => {
    const categories = useAppSelector(selectCategories);
    return (
        <RadioGroup
            onValueChange={onChange}
            className="flex flex-col space-y-0"
            value={selectedName}
        >
            {categories.map((category) => (
                <FormItem
                    key={category.slug}
                    className="flex items-center space-x-3 space-y-0"
                >
                    <FormControl>
                        <RadioGroupItem value={category.slug} />
                    </FormControl>
                    <FormLabel className="capitalize">
                        {category.name}
                    </FormLabel>
                </FormItem>
            ))}
        </RadioGroup>
    );
};

export default function NoteForm({ defaultData, onSubmit }: NoteFormProps) {
    const form = useForm<CreateNoteInput>({
        resolver: zodResolver(NoteSchema),
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
                                    selectedValue={field.value}
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
