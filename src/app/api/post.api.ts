import axiosClient from ".";

export function getPosts() {
  return axiosClient.get("post/list-post");
}

export function getPostById(id: number | string) {
  return axiosClient.get(`post/${id}`);
}
