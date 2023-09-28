import { api } from "./configs/axiosConfig";
import { NoteId, CreateNoteInput, UpdateNoteInput } from "./schemas";

const NOTES_ENDPOINT = "/notes";
// import { defineCancelApiObject } from "./configs/axiosUtils";

// {
//             signal: cancel
//                 ? cancelApiObject[this.get.name].handleRequestCancellation()
//                       .signal
//                 : undefined,
//         }

export const NoteService = {
    getOne: async function (id: NoteId) {
        const response = await api.get(NOTES_ENDPOINT, {
            params: id,
        });
        return response.data;
    },
    getAll: async function () {
        const response = await api.get(NOTES_ENDPOINT);
        return response.data;
    },
    // search: async function (params: Partial<Note>) {
    //     const response = await api.get(NOTES_ENDPOINT, { params });

    //     return response.data;
    // },
    create: async function (note: CreateNoteInput) {
        const response = await api.post(NOTES_ENDPOINT, note);
        return response.data;
    },
    update: async function (args: UpdateNoteInput) {
        const response = await api.patch(NOTES_ENDPOINT, args.values, {
            params: args.noteId,
        });
        return response.data;
    },
    delete: async function (id: NoteId) {
        const response = await api.delete(NOTES_ENDPOINT, {
            params: id,
        });
        return response.data;
    },
};

// const cancelApiObject = defineCancelApiObject(NoteAPI);
