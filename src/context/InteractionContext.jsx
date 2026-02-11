import { createContext, useContext, useState, useCallback } from 'react';

const InteractionContext = createContext();

export function InteractionProvider({ children }) {
  const [likes, setLikes] = useState({});       // { slug: count }
  const [saved, setSaved] = useState({});        // { slug: true/false }
  const [comments, setComments] = useState({});  // { slug: [{id, text, author, date}] }

  const toggleLike = useCallback((slug) => {
    setLikes(prev => ({
      ...prev,
      [slug]: prev[slug] ? 0 : 1
    }));
  }, []);

  const toggleSave = useCallback((slug) => {
    setSaved(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  }, []);

  const addComment = useCallback((slug, text) => {
    if (!text.trim()) return;
    setComments(prev => ({
      ...prev,
      [slug]: [
        ...(prev[slug] || []),
        {
          id: Date.now(),
          text: text.trim(),
          author: 'You',
          date: new Date().toISOString(),
        }
      ]
    }));
  }, []);

  const deleteComment = useCallback((slug, commentId) => {
    setComments(prev => ({
      ...prev,
      [slug]: (prev[slug] || []).filter(c => c.id !== commentId)
    }));
  }, []);

  const getLikes = useCallback((slug) => likes[slug] || 0, [likes]);
  const isSaved = useCallback((slug) => !!saved[slug], [saved]);
  const getComments = useCallback((slug) => comments[slug] || [], [comments]);
  const getSavedArticles = useCallback(() => Object.keys(saved).filter(s => saved[s]), [saved]);

  return (
    <InteractionContext.Provider value={{
      toggleLike, toggleSave, addComment, deleteComment,
      getLikes, isSaved, getComments, getSavedArticles,
    }}>
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteractions() {
  const ctx = useContext(InteractionContext);
  if (!ctx) throw new Error('useInteractions must be used within InteractionProvider');
  return ctx;
}
