import type { Project } from "../projects/project.model";

export interface Checklist {
  projectId: Project["id"];
  id: string;
  title: string;
}
