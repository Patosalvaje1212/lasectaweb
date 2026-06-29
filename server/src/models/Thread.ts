export interface Comment {
  id: string;
  threadId: string;
  authorId: string;
  content: string;
  createdAt: Date;
}

export interface Thread {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  comments?: Comment[];
}
