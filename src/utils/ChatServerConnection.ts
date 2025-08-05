export class ChatServerConnection {

  private static instance: ChatServerConnection | null = null;

  private webSocket: WebSocket | null;

  private constructor() {
    this.webSocket = null;
  }

  public static getInstance(): ChatServerConnection {
    if (this.instance === null) {
      this.instance = new ChatServerConnection();
    }

    return this.instance;
  }

  public start(): void {
    this.webSocket = new WebSocket("http://127.0.0.1:81");
  }

  public write(msg: string): void {
    if (this.webSocket !== null) {
      this.webSocket.send(msg);
    }
  }
}