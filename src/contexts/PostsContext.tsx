import { createContext, useCallback, useEffect, useState, type ReactNode } from 'react';
import type { IPost } from '../interface/IPost';
import { api } from '../lib/axios';
import type { IUserGitHub } from '../interface/IUserGitHub';

interface PostContextType {
  posts: IPost[];
  user: IUserGitHub;
  fetchPosts: (query?: string) => Promise<void>;
}

export const PostsContext = createContext({} as PostContextType);

interface PostProviderProps {
  children: ReactNode;
}

export function PostsContextProvider({ children }: PostProviderProps) {
  const [user, setUser] = useState<IUserGitHub>({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
    html_url: '',
  });
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: query ? `${query} repo:viniciuspachecof/github-blog` : 'repo:viniciuspachecof/github-blog',
        sort: 'created',
        order: 'desc',
      },
    });

    let formatDadosPost = [];

    if (response.data.items.length) {
      formatDadosPost = response.data.items.map((record: IPost) => {
        const { id, created_at, title, body, number } = record;

        return {
          id,
          created_at: new Date(created_at),
          title,
          body,
          number,
        };
      });
    }

    setPosts(formatDadosPost);
  }, []);

  const fetchUserGitHub = useCallback(async () => {
    const response = await api.get('users/viniciuspachecof');

    const { avatar_url, name, bio, login, company, followers, html_url } = response.data;

    setUser({ avatar_url, name, bio, login, company, followers, html_url });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchUserGitHub();
  }, []);

  return <PostsContext.Provider value={{ posts, user, fetchPosts }}>{children}</PostsContext.Provider>;
}
