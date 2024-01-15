import { object, string, TypeOf } from "zod";

export const retrieveDetailsSchema = object({
    query: object({
        name: string()
    })
});

export type RetrieveDetailsSchema = TypeOf<typeof retrieveDetailsSchema>["query"];

