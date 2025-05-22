export type Note = {
  id: string;
  title: string;
  content: string;
};

export type NotesResponse = { notes: Note[] };
