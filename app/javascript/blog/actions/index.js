export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';


export function createPost(body, callback) {
  const request = fetch("/api/v1/posts", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}

export function fetchPosts() {
  const promise = fetch("/api/v1/posts").then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`/api/v1/posts/${id}`).then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  };
}


