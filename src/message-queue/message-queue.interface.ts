export interface MessageQueue {
  addJob: (data: any) => Promise<string>;
}
