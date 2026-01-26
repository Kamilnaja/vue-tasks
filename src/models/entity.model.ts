export interface Entity {
  id: string;
  status: "active" | "archived" | "deleted";
  title: string;
}
