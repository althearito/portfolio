import { useMemo, useState } from "react";
import projects from "../data/projects";

export const useProjects = () => {
  const [selectedSection, setSelectedSection] = useState("All");

  const TYPES = ["All", "Web App", "Mobile App", "Redesign", "Landing Page"];

  const filteredProjects = useMemo(() => {
    if (selectedSection === "All") return projects;

    return projects.filter((project) => project.type === selectedSection);
  }, [selectedSection]);

  return {
    TYPES,
    selectedSection,
    setSelectedSection,
    projects: filteredProjects,
  };
};
