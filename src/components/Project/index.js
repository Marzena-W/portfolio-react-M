import React from 'react';
import './style.css';

function Project(props) {
  const image = require(`../../images/${props.image}`)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project title:</strong> {props.title}
          </li>
          <li>
            <strong>Deployed application:</strong> <a href={props.deployed}>{props.deployed}</a>
          </li>
          <li>
            <strong>GitHub repository:</strong> <a href={props.github}>{props.github}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;