import React from "react";
import "./testimonials.css";
import AVTR1 from "../../images/Ranjeet.jpg";
import AVTR2 from "../../Images/sheed.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Ranjeet Singh",
    review:
      "Annah is a fantastic web developer, and her detail-oriented approach made her a pleasure to work with. We pair-programmed extensively together while enrolled in a software development program, and in that time her work ethic blew me away. Annah views writing clean, accessible code as a calling, and she's great at identifying areas where we can improve UI. She's also super friendly; by the time our project was done, I felt like we'd known each other for years.",
  },
  {
    avatar: AVTR2,
    name: "Daniel Shdeed",
    review:
      "I had the pleasure to meet with Annah daily on the standup team, she is an astonishing developer with a learn and improve mentality.Her communication skills are brilliant also her technical and problem-solving skills are really impressive, besides that, she is kind and respectful to her team members ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
