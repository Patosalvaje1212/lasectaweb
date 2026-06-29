import { ThreadRepository } from '../repositories/ThreadRepository';
import { Thread, Comment } from '../models/Thread';

export class ThreadService {
  constructor(private threadRepository: ThreadRepository) {}

  async createThread(title: string, content: string, authorId: string): Promise<Thread> {
    const thread: Thread = {
      id: Date.now().toString(),
      title,
      content,
      authorId,
      createdAt: new Date(),
      comments: []
    };
    return this.threadRepository.create(thread);
  }

  async getAllThreads(): Promise<Thread[]> {
    return this.threadRepository.findAll();
  }

  async addComment(threadId: string, content: string, authorId: string): Promise<Comment> {
    const comment: Comment = {
      id: Date.now().toString(),
      threadId,
      content,
      authorId,
      createdAt: new Date()
    };
    const saved = await this.threadRepository.addComment(threadId, comment);
    if (!saved) throw new Error('Thread not found');
    return saved;
  }
}
