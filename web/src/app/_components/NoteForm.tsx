"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("入力", { title, content });
    const res = await fetch("http://localhost:4000/api/notes", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert("エラーが発生しました");
      return;
    }
    setTitle("");
    setContent("");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-medium">
          内容
        </label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>

      <button type="submit">追加</button>
    </form>
  );
}
