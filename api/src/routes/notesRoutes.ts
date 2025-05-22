import express from "express";
import { createNote, Note } from "../model/notes";
import {
  createNotesController,
  getNotesController,
} from "../controller/notesController";

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

router.get("/", getNotesController);
router.post("/", createNotesController);

export default router;
