
export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  name: string;

  constructor(content: string, avatar: string, name: string, timestamp?: Date ){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.name = name
  }
}