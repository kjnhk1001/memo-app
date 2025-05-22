"use client";

import { FormEvent, useState } from "react";

export default function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="content">コンテント</label>
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
