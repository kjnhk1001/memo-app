type Note = {
  id: string;
  title: string;
  content: string;
};

export default async function NoteList() {
  const notes = await getNotes();

  return (
    <div>
      {notes?.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

const getNotes = async (): Promise<Note[]> => {
  const res = await fetch("http://localhost:4000/api/notes", {});
  const data = await res.json();
  const notes: Note[] = data.notes;
  return notes;
};
