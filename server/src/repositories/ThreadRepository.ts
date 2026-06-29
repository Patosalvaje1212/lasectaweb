import { Thread, Comment } from '../models/Thread';

export class ThreadRepository {
  private threads: Thread[] = [];

  async create(thread: Thread): Promise<Thread> {
    this.threads.push(thread);
    return thread;
  }

  async findAll(): Promise<Thread[]> {
    return this.threads;
  }

  async findById(id: string): Promise<Thread | undefined> {
    return this.threads.find(t => t.id === id);
  }

  async addComment(threadId: string, comment: Comment): Promise<Comment | undefined> {
    const thread = await this.findById(threadId);
    if (!thread) return undefined;
    if (!thread.comments) thread.comments = [];
    thread.comments.push(comment);
    return comment;
  }
}
