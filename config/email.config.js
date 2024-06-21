import { api } from "@/config/axios.config";

export const getEmails = async () => {
  try {
    const response = await api.get(`/email`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getMail = async (id) => {
  try {
    const response = await api.get(`/email/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// create
export const createEmail = async (data) => {
  try {
    const response = await api.post("/email", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
// delete
export const deleteEmail = async (id) => {
  try {
    const response = await api.delete(`/email/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
