import { Request, Response } from 'express';
import { ThreadService } from '../services/ThreadService';

export class ThreadController {
  constructor(private threadService: ThreadService) {}

  create = async (req: Request, res: Response) => {
    try {
      const { title, content, authorId } = req.body;
      const thread = await this.threadService.createThread(title, content, authorId);
      res.status(201).json(thread);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const threads = await this.threadService.getAllThreads();
      res.json(threads);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  addComment = async (req: Request, res: Response) => {
    try {
      const { threadId } = req.params;
      const { content, authorId } = req.body;
      const comment = await this.threadService.addComment(threadId as string, content, authorId);
      res.status(201).json(comment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
