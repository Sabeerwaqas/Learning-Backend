import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [jokes, setJokes] = useState([]);

  const gettingJokes = () => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    gettingJokes();
  }, []);

  return (
    <>
      <h1>Fetching Jokes From Backend</h1>
      {jokes?.length > 0
        ? jokes.map((joke, index) => (
            <div key={index}>
              <h4>Title: {joke?.title}</h4>
              <h4>Content: {joke?.content}</h4>
            </div>
          ))
        : ""}
    </>
  );
};

export default App;
