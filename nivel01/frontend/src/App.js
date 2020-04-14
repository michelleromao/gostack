import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";

import "./App.css";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //setProjects([...projects, `Aprendendo sobre imutabilidade! ${Date.now()}`]);

    const response = await api.post("projects", {
      title: `Frontend com ReactJS ${Date.now()}`,
      owner: "Michelle Romão",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>

      <ul>
        {projects.map((project) => (
          <li key={project.id}> {project.title} </li>
        ))}
      </ul>
    </>
  );
}
