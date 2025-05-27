import { createContext, useCallback, useEffect, useState, type ReactNode } from 'react';
import type { IPost } from '../interface/IPost';
import { api } from '../lib/axios';

interface PostContextType {
  posts: IPost[];
}

export const PostsContext = createContext({} as PostContextType);

interface PostProviderProps {
  children: ReactNode;
}

export function PostsContextProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: query ? `${'query'}%20repo:viniciuspachecof/github-blog` : 'repo:viniciuspachecof/github-blog',
      },
    });

    let formatDadosPost: IPost[] = [];

    if (response.data.items.length) {
      formatDadosPost = response.data.items.map((record: IPost) => {
        return {
          id: record.id,
          user: record.user.login,
          created_at: new Date(record.created_at),
          title: record.title,
          body: record.body,
          comments: record.comments,
        };
      });
    }

    setPosts(formatDadosPost);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>;
}
