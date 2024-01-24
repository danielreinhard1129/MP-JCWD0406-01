import { baseUrl } from '@/app/utils/database';
import axios from 'axios';

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
