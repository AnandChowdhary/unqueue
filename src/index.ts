export interface UnqueueConfig {
  /** Maximum number of attempts to try, defaults to 3 */
  maxAttempts?: number;
  /** Debug logging */
  debug?: boolean;
  /** Interval to schedule */
  ttl?: number;
}

/** Unqueue is a queue for async JS */
export class Unqueue {
  tasks: Array<{ task: () => Promise<any>; attempt: number }> = [];
  running = false;
  config: UnqueueConfig = {};

  constructor(config?: UnqueueConfig) {
    if (config) this.config = config;
    setInterval(() => this.run(), this.config.ttl ?? 3600);
  }

  private log(...args: any[]) {
    if (this.config.debug) console.log(...args);
  }

  private async run() {
    const maxAttempts = this.config.maxAttempts ?? 3;
    this.running = true;
    const task = this.tasks.pop();
    if (task) {
      this.log("Starting task", task.task.name);
      if (task.attempt <= maxAttempts) {
        try {
          await task.task();
        } catch (error) {
          this.log("Got an error", error);
          this.add(task.task, task.attempt + 1);
        }
      } else {
        this.log("More than 3 attempts, skipping");
      }
    } else {
      this.log("No task");
    }
    if (this.tasks.length) await this.run();
    this.running = false;
  }

  /** Add a task to the queue */
  public add(task: () => Promise<any>, attempt = 1) {
    this.tasks.push({ task, attempt });
    if (!this.running) this.run();
  }

  /** Get pending tasks */
  public getPendingTasks() {
    return this.tasks;
  }
}
