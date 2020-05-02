import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";

const STORAGE_KEY = "repositoryData";

export function GitHubShowcase({ profile }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function saveData(data) {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem(STORAGE_KEY, jsonData);
  }

  function loadData() {
    const jsonData = sessionStorage.getItem(STORAGE_KEY);

    if ([null, undefined].includes(jsonData)) {
      fetchRepositories();
    } else {
      const data = JSON.parse(jsonData);
      updateData(data);
    }
  }

  function updateData(data) {
    setRepositories(data);
  }

  function fetchRepositories() {
    fetch(`https://api.github.com/users/${profile}/repos`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    })
      .then((res) => res.json())
      .then((data) => mapRepositories(data))
      .then((data) => {
        updateData(data);
        saveData(data);
      })
      .catch(console.log);
  }

  function mapRepositories(repositories) {
    return repositories.reverse().map((repository) => ({
      title: repository.name,
      description: repository.description,
      badges: repository.topics,
    }));
  }

  return <Showcase items={repositories} />;
}

export default GitHubShowcase;
