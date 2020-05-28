import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";

export function GitHubShowcase({ profile }) {
  const [repositories] = useGitHubRepositories({ profile });
  return <Showcase items={repositories} />;
}

function useGitHubRepositories({ profile }) {
  const [storageKey] = useState("repositoryData");
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Sets the given user's GitHub repositories
    //  - First try to reload any repository data stored in the session storage
    //  - Otherwise, fetch the repositories using the GitHub API
    function initializeData() {
      try {
        reloadData();
      } catch (e) {
        fetchRepositories();
      }
    }

    // Saves the given data to the session storage
    function saveData(data) {
      const jsonData = JSON.stringify(data);
      sessionStorage.setItem(storageKey, jsonData);
    }

    // Set the repository data the data saved in local storage
    function reloadData() {
      const jsonData = sessionStorage.getItem(storageKey);
      if (jsonData == null) {
        throw new Error("No session data");
      } else {
        setRepositories(JSON.parse(jsonData));
      }
    }

    // Set the repository data the given user's GitHub repositories using the GitHub API
    function fetchRepositories() {
      fetch(`https://api.github.com/users/${profile}/repos`, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      })
        .then((res) => res.json())
        .then((data) => mapRepositories(data))
        .then((data) => {
          saveData(data);
          setRepositories(data);
        });
    }

    // Returns an array of objects mapped from the given repositories
    // Each object contains:
    //  - title
    //  - description
    //  - badges
    function mapRepositories(repositories) {
      return repositories.reverse().map((repository) => ({
        title: repository.name,
        description: repository.description,
        badges: repository.topics,
      }));
    }

    initializeData();
  }, [profile, storageKey]);

  return [repositories];
}

export default GitHubShowcase;
