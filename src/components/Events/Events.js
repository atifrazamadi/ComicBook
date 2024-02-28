import React from "react";
import "./Event.css";
import backgroundImage from "../../assets/background.jpg";
import Comedian from "../Comedian/Comedian";
import EventItem from "../EventItem/EventItem";
import Club from "../Club/Club";

const Events = () => {
  return (
    <div className="container mt-5 mb-5">
      <EventItem backgroundImage={backgroundImage}/>
      <Comedian backgroundImage={backgroundImage}/>
      <Club backgroundImage={backgroundImage}/>



    </div>
  );
};

export default Events;
