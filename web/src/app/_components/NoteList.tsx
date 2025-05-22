import { Note } from "@/type/note";

export default async function NoteList() {
  const notes = await getNotes();

  if (notes.length === 0) {
    return <div>ノートがありません</div>;
  }

  return (
    <div className="space-y-4">
      {notes?.map((note) => (
        <div key={note.id} className="p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800">{note.title}</h2>
          <p className="mt-2 text-gray-600">{note.content}</p>
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
