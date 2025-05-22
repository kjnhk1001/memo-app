import { Request, Response } from "express";
import { Note, createNote } from "../model/notes";

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

export const getNotesController = (_req: Request, res: Response) => {
  res.json({ notes });
};

export const createNotesController = (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const newNote = createNote({ title, content });
    notes.push(newNote);
    res.status(201).json();
  } catch {
    res.status(400).json({ message: "Bad Request" });
  }
};
