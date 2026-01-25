import { http, HttpResponse } from "msw";

export const handlers = [
  // Example GET request
  http.get("*/api/users", () => {
    console.log("call");
    return HttpResponse.json([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
  }),
];
