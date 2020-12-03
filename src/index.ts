import PQueue, { DefaultAddOptions, Options } from "p-queue";
import PriorityQueue from "p-queue/dist/priority-queue";
import pRetry, { Options as PRetryOptions } from "p-retry";

export class Unqueue {
  private queue: PQueue;

  constructor(options?: Options<PriorityQueue, DefaultAddOptions>) {
    this.queue = new PQueue(options);
  }

  public add<T>(
    input: (attemptCount: number) => T,
    pRetryOptions?: PRetryOptions,
    pQueueOptions?: Partial<DefaultAddOptions>
  ): Promise<T> {
    return this.queue.add(() => pRetry<T>(input, pRetryOptions), pQueueOptions);
  }

  start() {
    return this.queue.start();
  }
  pause() {
    return this.queue.pause();
  }
  clear() {
    return this.queue.clear();
  }

  get size() {
    return this.queue.size;
  }
  get pending() {
    return this.queue.pending;
  }
  get isPaused() {
    return this.queue.isPaused;
  }
  get timeout() {
    return this.queue.timeout;
  }
}
