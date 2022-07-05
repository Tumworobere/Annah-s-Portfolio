import React from "react";
import "./project.css";
import IMG1 from '../../images/AirRovers.PNG';
import IMG2 from '../../images/Budget.PNG';
import IMG3 from '../../images/Covid1.PNG';
import IMG4 from '../../images/Space.PNG';
import IMG5 from '../../images/Maths.PNG';
import IMG6 from '../../images/Summer.PNG';


const projects = [{
  id: 1,
  image: IMG1,

  title: 'AirRovers-full-stack project - Group project',
  github: 'https://github.com/Tumworobere/AirRovers-Frontend-App',
  demo:'https://air-rovers-frontend-app.vercel.app/'
},
 {
  id: 2,
  image: IMG2,

  title: 'Budget-Tracker-Back-end Ruby on rails project',
  github: 'https://github.com/Tumworobere/Budget-Tracker.git',
  demo:'https://fast-scrubland-47961.herokuapp.com/'
  }, 
 {
  id: 3,
  image: IMG3,
  title: 'Covid19-Metrics-Single page application-React-Redux',
  github: 'https://github.com/Tumworobere/Covid19-Metrics.git',
   demo: 'https://covid19metricsdata.netlify.app/'
  },
 {
  id: 4,
  image: IMG4,
  title: 'Space Travelers Hub- React-Redux Group project',
  github: 'https://github.com/Tumworobere/space-travelers-hub2.0.git',
  demo:'https://space-travelers-hub2-0.vercel.app/'
  },
 {
  id: 5,
  image: IMG5,
  title: 'Math Magicians .React-Redux, React -Router project',
  github: 'https://github.com/Tumworobere/Math-Magicians.git',
  demo:'hhttps://dazzling-knuth-69f0e5.netlify.app/'
},
{
  id: 6,
  image: IMG6,
  title: 'Summer Concert Series .HTML/CSS/Javascript project',
  github: 'https://github.com/Tumworobere/HTML-CSS-JavaScript-Capstone-Project.git',
  demo:'https://tumworobere.github.io/HTML-CSS-JavaScript-Capstone-Project/'
},
]
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Projects;
