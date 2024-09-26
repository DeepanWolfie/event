import { React, useState } from "react";
import './AdminCard.css';
const AdminCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
      <>
          <div className="adminCardCor">
              
      {expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
            <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
        </div>
    </>
  );
};
function CompactCard({ param, setExpanded }) {
  return (
    <div className="adminCompactCard"   onClick={setExpanded}>
      <div className="radialBar">
        <img src={param.logoImage} alt="" className="pythonLogo" />
      </div>
    </div>
  );
}
function ExpandedCard({ param, setExpanded }) {
    return (

        
        <div className="adminExpandedCard" onClick={setExpanded}>
<div className="radialBar">
        <img src={param.logoImage} alt="" className="pythonLogo" />
      </div>
        </div>
   
);
}

export default AdminCard;
