import axios from "axios";

const baseURL = "http://localhost:3001";

export async function getAllNews() {
  const response = await axios.get(`${baseURL}/news`); //async

  return response;
}

export async function getTopNews() {
  try {
    const topResponse = await axios.get(`${baseURL}/news/top`); //async
    //console.log(topResponse);
    return topResponse;
  } catch (error) {
    console.log(error);
  }
}

export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}
