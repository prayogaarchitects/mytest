import React, { useState } from 'react';
const Accordion = ({ title, body }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isExpanded ? 'rotate' : ''}`}>
          <i className="fa fa-chevron-down"></i>
        </span>
      </div>
      {isExpanded && (
        <div className="accordion-body">
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
