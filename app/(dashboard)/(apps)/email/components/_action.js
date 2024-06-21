"use server";
import { createEmail, deleteEmail, getMail } from "@/config/email.config";
import { revalidatePath } from "next/cache";

export const getMailAction = async (id) => {
  try {
    const response = await getMail(id);
    revalidatePath("/email");
    return response;
  } catch (error) {
    return error.response.data;
  }
};

// create email action
export const createEmailAction = async (data) => {
  try {
    const response = await createEmail(data);
    revalidatePath("/email");
    return response;
  } catch (error) {
    return error.response.data;
  }
};

// delete
export const deleteMailAction = async (id) => {
  try {
    const response = await deleteEmail(id);
    revalidatePath("/email");
    return response;
  } catch (error) {
    return error.response.data;
  }
};
