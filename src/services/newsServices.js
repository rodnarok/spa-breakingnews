import axios from "axios";

const baseURL = "http://localhost:3001";

export async function getAllNews() {
  try {
    const response = await axios.get(`${baseURL}/news`); //async

    return response;
  } catch (err) {
    console.error(err);
  }
}
