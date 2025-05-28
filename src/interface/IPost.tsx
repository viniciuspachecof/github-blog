export interface IPost {
  id: number;
  login: string;
  created_at: Date;
  title: string;
  body: string;
  comments: number;
  number: number;
  html_url: string;
}
