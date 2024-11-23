import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  getArticles,
  getCategories,
  getTags,
  getLatestPosts,
  getArticleById,
  createComment,
  registerNewsletter,
} from '@src/services/blogService';

import { BlogContext } from './BlogContext';

export const BlogProvider = ({ children }) => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loadingStatus, setLoadingStatus] = useState({
    latestPosts: false,
    articles: false,
    categories: false,
    tags: false,
    article: false,
    createComment: false,
    newsletter: false,
  });
  const [errorStatus, setErrorStatus] = useState({
    latestPosts: null,
    articles: null,
    categories: null,
    tags: null,
    article: null,
    createComment: null,
    newsletter: null,
  });
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [search, setSearch] = useState('');

  // Actualiza el estado de carga por solicitud
  const updateLoadingStatus = useCallback((key, status) => {
    setLoadingStatus((prev) => ({ ...prev, [key]: status }));
  }, []);

  // Actualiza el estado de errores por solicitud
  const updateErrorStatus = useCallback((key, errorMessage) => {
    setErrorStatus((prev) => ({ ...prev, [key]: errorMessage }));
  }, []);

  // Función para obtener los últimos posts
  const fetchLatestPosts = useCallback(async () => {
    try {
      updateLoadingStatus('latestPosts', true);
      const response = await getLatestPosts();
      if (response && response.data) setLatestPosts(response.data);
    } catch (err) {
      updateErrorStatus('latestPosts', 'Error fetching latest posts');
      console.error(err);
    } finally {
      updateLoadingStatus('latestPosts', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para obtener los artículos
  const fetchArticles = useCallback(async (query) => {
    try {
      updateLoadingStatus('articles', true);
      const response = await getArticles(query);
      if (response && response.data) {
        setArticles(response.data);
        setPagination(response.pagination || {});
      }
    } catch (err) {
      updateErrorStatus('articles', 'Error fetching articles');
      console.error(err);
    } finally {
      updateLoadingStatus('articles', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para obtener un artículo por ID
  const fetchArticleById = useCallback(async (query) => {
    try {
      updateLoadingStatus('article', true);
      const response = await getArticleById(query);
      if (response && response.data) setArticle(response.data);
    } catch (err) {
      updateErrorStatus('article', 'Error fetching article');
      console.error(err);
    } finally {
      updateLoadingStatus('article', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para obtener categorías
  const fetchCategories = useCallback(async () => {
    try {
      updateLoadingStatus('categories', true);
      const response = await getCategories();
      if (response && response.data) setCategories(response.data);
    } catch (err) {
      updateErrorStatus('categories', 'Error fetching categories');
      console.error(err);
    } finally {
      updateLoadingStatus('categories', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para obtener tags
  const fetchTags = useCallback(async () => {
    try {
      updateLoadingStatus('tags', true);
      const response = await getTags();
      if (response && response.data) setTags(response.data);
    } catch (err) {
      updateErrorStatus('tags', 'Error fetching tags');
      console.error(err);
    } finally {
      updateLoadingStatus('tags', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para crear un comentario
  const fetchCreateComment = useCallback(async (data) => {
    try {
      updateLoadingStatus('createComment', true);
      const response = await createComment(data);
      if (response && response.data) setArticle(response.data);
    } catch (err) {
      updateErrorStatus('createComment', 'Error creating comment');
      console.error(err);
    } finally {
      updateLoadingStatus('createComment', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Función para registrar al newsletter
  const fetchRegisterNewsletter = useCallback(async (data) => {
    try {
      updateLoadingStatus('newsletter', true);
      const response = await registerNewsletter(data);
      return response?.data || null;
    } catch (err) {
      updateErrorStatus('newsletter', 'Error registering newsletter');
      console.error(err);
      return null;
    } finally {
      updateLoadingStatus('newsletter', false);
    }
  }, [updateLoadingStatus, updateErrorStatus]);

  // Fetch inicial de todos los datos
  const fetchAllData = useCallback(async () => {
    const promises = [];
    if (!articles.length) promises.push(fetchArticles());
    if (!categories.length) promises.push(fetchCategories());
    if (!tags.length) promises.push(fetchTags());
    if (!latestPosts.length) promises.push(fetchLatestPosts());
    await Promise.all(promises);
  }, [fetchLatestPosts, fetchArticles, fetchCategories, fetchTags, articles, categories, tags, latestPosts]);

  return (
    <BlogContext.Provider
      value={{
        latestPosts,
        articles,
        categories,
        tags,
        pagination,
        loadingStatus,
        errorStatus,
        article,
        tag,
        category,
        search,
        setArticle,
        setTag,
        setCategory,
        setSearch,
        fetchArticleById,
        fetchAllData,
        fetchArticles,
        fetchCreateComment,
        fetchRegisterNewsletter,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
