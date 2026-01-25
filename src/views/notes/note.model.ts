export interface Note {
  id: string;
  title: string;
  content: string;
  relatedNotes: Note["id"][];
}
