export interface IPost {
  id: number;
  user: {
    login: string;
  };
  created_at: Date;
  title: string;
  body: string;
  comments: number;
}
