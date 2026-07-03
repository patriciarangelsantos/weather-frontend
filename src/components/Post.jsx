import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import axios from "axios";

const baseUrl = "/api/weather/current";

export function Post() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${baseUrl}/1`);
        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    }
    getPosts();
  }, []);

  function handleError() {
    axios
      .get(`${baseUrl}/asdf`)
      .then(({ data }) => setPosts(data))
      .catch((err) => {
        setPosts(null);
        setError("error" + err);
      });
  }

  function handleCreatePost() {
    axios
      .post(baseUrl, {
        title: "Titulo do Post",
        body: "Esse é um novo post criado com axios",
      })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError("error" + error));
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>
          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>
            <button onClick={handleError} className="post-btn">
              Error post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
      {error && <p>Ocorreu na requisição: {error}</p>}
    </div>
  );
}