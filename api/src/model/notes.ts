export type Note = {
  id: string;
  title: string;
  content: string;
};

const createId = () => {
  return Math.random().toString(36).substring(2, 15);
};

const validateNote = (args: Omit<Note, "id">) => {
  if (args.title === undefined || args.title === "") {
    throw new Error("title required");
  }
  if (args.content === undefined || args.content === "") {
    throw new Error("content required");
  }
  return args;
};

export const createNote = (args: Omit<Note, "id">) => {
  return {
    id: createId(),
    ...validateNote(args),
  };
};
