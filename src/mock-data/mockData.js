import { faker } from "@faker-js/faker/locale/en";
import { noteSchema } from "@/pages/notes-table/data/noteDara";

const generateFakeRecord = () => {
    const name = faker.string();
    const category = faker.arrayElement(["task", "idea", "random"]);
    const content = faker.lorem.sentence();

    const record = {
        name,
        category,
        content,
    };

    try {
        noteSchema.parse(record);
        return record;
    } catch (error) {
        return generateFakeRecord();
    }
};

const generateFakeData = (numRecords) => {
    const records = [];
    for (let i = 0; i < numRecords; i++) {
        records.push(generateFakeRecord());
    }
    return records;
};

const numRecords = 100;
export const mockData = generateFakeData(numRecords);
console.log(mockData);
