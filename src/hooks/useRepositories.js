import React, { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    await globalThis.fetch("http://192.168.0.194:5000/api/repositories")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setRepositories(json);
        return json;
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories: repositoriesNodes };
};

export default useRepositories;
