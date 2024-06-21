"use client";

import { api } from "@/config/axios.config";

export const getTodos = async (page) => {
  const response = await api.get("/todos?page=" + page);
  return response.data;
};

export const getTodo = async (id) => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
};
export const createTodo = async (todo) => {
  const response = await api.post("/todos", todo);
  return response.data;
};

export const updateTodo = async ({ id, todo }) => {
  console.log(id, "ami updated id");
  console.log(todo, "ami updated todo");
  const response = await api.put(`/todos/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};

const TodoAppLayout = ({ children }) => {
  return <>{children}</>;
};

export default TodoAppLayout;
