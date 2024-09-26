
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase"; 
import "./Card.css";
import Card from "../Card/Card";

const Cards = () => {
  const [eventData, setEventData] = useState([]);

  const fetchEventData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "events"));
      const events = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEventData(events);
      console.log(eventData)
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

 
  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="Cards">
      {eventData.map((card, index) => (
        <div className="parentContainer" key={index}>
          <Card
            title={card.title}
            logoImage={card.logoImage}
            bannerImage={card.bannerImage}
            startDate={card.eventDetails.startDate}
            endDate={card.eventDetails.endDate}
            startTime={card.eventDetails.startTime}
            endTime={card.eventDetails.endTime}
            venue={card.eventDetails.venue}
            noOfDays={card.eventDetails.noOfDays}
            noOfStudentRegistered={card.eventDetails.noOfStudentRegistered}
            studentSlot={card.eventDetails.studentSlot}
            resourcePerson={card.resourcePerson}
            resourcePersonDesignation={card.resourcePersonDesignation}
            resourcePersons={card.resourcePersons}
            eventCoordinator={card.eventCoordinator}
            eventCoordinatorDesignation={card.eventCoordinatorDesignation}
            eventCoordinators={card.eventCoordinators}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
