// src/api/apiService.js
import axiosInstance from '@src/api/axiosInstance';


// Llama a la API para obtener los articulos
export const getArticles = async (query = '') => {
  try {
    const response = await axiosInstance.get(`/articles${query}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
// Llama a la API para obtener un articulo por su ID
export const getArticleByTitle = async (title) => {
  try {
    const response = await axiosInstance.get(`/articles/${title}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
// Llama a la API para obtener los posts mas recientes
export const getLatestPosts = async () => {
  try {
    const response = await axiosInstance.get('/articles-latest');
    return response.data;
  } catch (error) {
    return error;
  }
};
// Llama a la API para obtener los categories
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories');
    return response.data;
  } catch (error) {
    return error;
  }
};
// Llama a la API para obtener los tags
export const getTags = async () => {
  try {
    const response = await axiosInstance.get('/tags');
    return response.data;
  } catch (error) {
    return error;
  }
};

// Llamada al api para crear un comentario
export const createComment = async (data) => {
  try {
    const response = await axiosInstance.post(`/comments`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

// Llamada al api para registrar al boletin
export const registerNewsletter = async (data) => {
  try {
    const response = await axiosInstance.post(`/newsletter`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
