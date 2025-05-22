import { Suspense } from "react";
import NoteForm from "./_components/NoteForm";
import NoteList from "./_components/NoteList";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">ノート</h1>

        <div className="flex flex-col gap-4">
          <NoteForm />
          <Suspense fallback={<div>Loading...</div>}>
            <NoteList />
          </Suspense>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
