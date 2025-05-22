"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("タイトルと内容を入力してください");
      return;
    }
    console.log("入力", { title, content });
    setIsSubmitting(true);
    try {
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
        throw new Error("ノートの追加に失敗しました");
      }
      setTitle("");
      setContent("");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "追加"}
      </button>
    </form>
  );
}
