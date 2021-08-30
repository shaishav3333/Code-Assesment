import React from "react";
import { DocumentCard } from "@fluentui/react/lib/DocumentCard";
import { Link } from '@fluentui/react';
import "./card.css";

const CardComponent = () => {
  return (
    <div className="card-container">
      <DocumentCard>
        <div className="card-status">New</div>
        <div className="card-body">
          <h2>Loprem Epsum</h2>
          <p>Somthing Goes Here</p>
          <Link underline>View All</Link>
        </div>
      </DocumentCard>
      <DocumentCard>
        <div className="card-status">Trails</div>
        <div className="card-body">
          <h2>Solution Name</h2>
          <p>Somthing Goes Here</p>
          <Link underline>Start Your free trail</Link>
        </div>
      </DocumentCard>
      <DocumentCard>
        <div className="card-status">Starter Kits</div>
        <div className="card-body">
          <h2>Loprem Epsum</h2>
          <p>Somthing Goes Here</p>
          <Link underline>Work better, together</Link>
        </div>
      </DocumentCard>
    </div>
  );
};

export default CardComponent;
