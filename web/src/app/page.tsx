import { Note } from "@/type/note";
import AddNoteForm from "./_components/addNoteForm";

export default async function Home() {
  const res = await fetch("http://localhost:4000/api/notes", {
    cache: "no-store",
  });
  const data = await res.json();
  const notes: Note[] = data.notes;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>ノート</h1>
        {notes?.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
        <div>
          <AddNoteForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
