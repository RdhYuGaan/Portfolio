// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 1: AgroAI Web Application</h3>
          <p>A React and Tailwind CSS application that provides agricultural solutions using AI.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 2: Crop Disease Detection Website</h3>
          <p>Detect crop diseases, automate water control, and provide pH level solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
