import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3001";

export async function getAllNews() {
  const response = await axios.get(`${baseURL}/news`); //async
  //console.log(response);
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

export function getAllNewsByUser() {
  const response = axios.get(`${baseURL}/news/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createNews(body) {
  const response = axios.post(`${baseURL}/news/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getNewsById(id) {
  const response = axios.get(`${baseURL}/news/byIdNews/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editNews(body, id) {
  const response = axios.patch(`${baseURL}/news/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteNews(id) {
  const response = axios.delete(`${baseURL}/news/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
