import { ApiResponse } from "@/types/api";
import { NotesResponse } from "@/types/notes";

export default async function NoteList() {
  const result = await getNotes();
  const notes = result?.notes;

  if (result?.notes.length === 0) {
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

const getNotes = async (): Promise<NotesResponse> => {
  const res = await fetch("http://localhost:4000/api/notes", {});
  const data = (await res.json()) as ApiResponse<NotesResponse>;
  if (!data.success || !data.data) {
    throw new Error(data.error?.message);
  }
  return data.data;
};
