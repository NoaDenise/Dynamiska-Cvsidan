import React, { useState, useEffect } from "react";

function MyPortfolio() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/NoaDenise/repos?per_page=4")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        // fördröjer laddningen av repo
        setTimeout(() => setLoading(false), 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="skills--section" id="MyPortfolio">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My GitHub Repositories</h2>
        {loading ? (
          <div>
            <p>Loading repositories...</p>
          </div>
        ) : (
          <div className="repo-grid">
            {repositories.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="repo-card">
                  <h2>{repo.name}</h2>
                  <p>Language: {repo.language}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyPortfolio;
