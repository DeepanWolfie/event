import React, { useState } from "react";
import "./Card.css";
import pythonlogo from "../../assets/python.png";
import { UilTimes } from "@iconscout/react-unicons";
import { motion, LayoutGroup } from "framer-motion";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div className="CompactCard " onClick={setExpanded} layoutId="">
      <div className="radialBar">
        <img src={param.logoImage} alt="" className="pythonLogo" />
      </div>
      <div className="detail">
        <span className="title">{param.title}</span>
        <span className="date">
          {param.startDate} to {param.endDate}{" "}
        </span>
        <span className="time">
          {param.noOfDays} - Days {param.startTime}AM to {param.endTime}PM{" "}
        </span>
        <span className="venue">Venue: {param.venue}</span>
        <span className="venue">
          registered: {param.noOfStudentRegistered}/{param.studentSlot}
        </span>
        <span className="eventCoordinator">Event Coordinator : {param.eventCoordinator}</span>
        <span className="resourcePerson">
          Resource Person: {param.resourcePerson}
        </span>
      </div>

      <div>
        {param.noOfStudentRegistered < param.studentSlot ? (
          <div className="register-button">Register</div>
        ) : (
          <div className="register-button-disabled">Closed</div>
        )}
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div className="ExpandedCard" layoutId="expandableCard" layout>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <UilTimes color="#ffff"  onClick={setExpanded} />
      </div>
      <div className="expandedLogo">
        <img src={param.logoImage} alt="" className="ExpandedpythonLogo" />
      </div>

      <span className="ExpandedCardTitle">{param.title}</span>
      <div className="detail-expanded">
        <span className="description">Description: {param.description}</span>
        <span className="date">Date: {param.date}</span>
        <span className="time">
          Time: {param.days} Days 10:00 AM to 4:00 PM
        </span>
        <span className="venue">Venue: {param.venue}</span>
        <span className="resourcePerson">
          Resource Person: {param.resourcePreson}
        </span>
        <span className="registered">Registered: {param.registered}</span>
        <span className="additionalInfo">
          Additional Info: {param.additionalInfo}
        </span>
      </div>
    </motion.div>
  );
}

export default Card;
