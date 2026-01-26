import { http, HttpResponse } from "msw";
import type { Checklist } from "../views/checklists/checklist.model";

export const checklistsMock = http.get("/api/checklists", () => {
  return HttpResponse.json([
    { id: "1", projectId: "John Doe", title: "Checklist 1", status: "active" },
    {
      id: "2",
      projectId: "Jane Smith",
      title: "Checklist 2",
      status: "active",
    },
  ] as readonly Checklist[]);
});
