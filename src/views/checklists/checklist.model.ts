import type { Entity } from "../../models/entity.model";
import type { Project } from "../projects/project.model";

export interface Checklist extends Entity {
  projectId: Project["id"];
}
