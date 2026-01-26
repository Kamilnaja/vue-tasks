import { http, HttpResponse } from "msw";
import type { Note } from "../views/notes/note.model";

export const notesMock = http.get("/api/notes", () => {
  return HttpResponse.json([
    {
      id: "1",
      title: "Note 1",
      content: "Content of note 1",
      relatedNotes: ["2"],
      status: "active",
    },
    {
      id: "2",
      title: "Note 2",
      content: "Content of note 2",
      relatedNotes: ["1"],
      status: "active",
    },
  ] as readonly Note[]);
});
