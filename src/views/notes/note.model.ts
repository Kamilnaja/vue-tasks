import type { Entity } from "../../models/entity.model";

export interface Note extends Entity {
  content: string;
  relatedNotes?: readonly Note["id"][];
}
