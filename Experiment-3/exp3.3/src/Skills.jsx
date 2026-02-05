import React from 'react';

const Skills = () => {
  const skills = ["React", "Python", "Machine Learning", "FastAPI", "C++", "SQL"];
  return (
    <div>
      <h3 style={{ marginBottom: '2rem', color: '#1e293b' }}>Technical Expertise</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <span key={index} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;