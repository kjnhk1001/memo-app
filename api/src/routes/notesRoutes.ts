import express from "express";
import { createNote, Note } from "../model/notes";

const router = express.Router();

// 仮のデータベース
const notes: Note[] = [
  {
    id: "1",
    title: "タイトル1",
    content: "テキストテキストテキストテキストテキスト",
  },
  {
    id: "2",
    title: "タイトル2",
    content: "テキストテキストテキストテキストテキスト",
  },
];

router.get("/", (_req, res) => {
  res.json({ notes });
});

router.post("/", (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = createNote({ title, content });
    notes.push(newNote);
    res.status(201).json();
  } catch {
    res.status(400).json({ message: "Bad Request" });
  }
});

export default router;
