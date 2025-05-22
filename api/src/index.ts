import express from "express";
import cors from "cors";
import { createNote, Note } from "./model/note";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

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

app.get("/api/notes", (_req, res) => {
  res.json({ notes });
});

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = createNote({ title, content });
    notes.push(newNote);
    res.status(201).json();
  } catch {
    res.status(400).json({ message: "Bad Request" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
