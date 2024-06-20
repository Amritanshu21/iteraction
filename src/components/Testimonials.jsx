// src/Testimonials.js
import React from 'react';


const testimonials = [
    {
      name: "Mehwish",
      position: "CTO",
      image: "/src/assets/Ellipse 2297 (1).jpg", // Replace with actual image paths
      message: "The team is really helpful. We got prompt responses every time.",
      style: { top: '500px', left: '60%' }
    },
    {
      name: "Mehwish",
      position: "CTO",
      image: "/src/assets/Ellipse 2294.jpg", // Replace with actual image paths
      message: "The team is really helpful. We got prompt responses every time.",
      style: { top: '30%', left: '65%' }
    },
    {
      name: "Mehwish",
      position: "CTO",
      image: "/src/assets/Ellipse 2295.jpg", // Replace with actual image paths
      message: "The team is really helpful. We got prompt responses every time.",
      style: { top: '50%', left: '50%' }
    },
    {
      name: "Mehwish",
      position: "CTO",
      image: "/src/assets/Ellipse 2296.jpg", // Replace with actual image paths
      message: "The team is really helpful. We got prompt responses every time.",
      style: { top: '70%', left: '60%' }
    },
    {
      name: "Mehwish",
      position: "CTO",
      image: "/src/assets/Ellipse 2298.jpg", // Replace with actual image paths
      message: "The team is really helpful. We got prompt responses every time.",
      style: { top: '90%', left: '65%' }
    }
  ];
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-text">
        <img id='star' src="src\assets\Group 54.png" alt="" />
        <img src="src\assets\icon-park-outline_quote.png" alt="" />
        <h1>what <span className="highlight">our</span>  <span className="highlight"> <br />customers says</span></h1>
        <p>real stories, real satisfaction—hear what our happy customers have to say!</p>
      </div>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial ${index === 2 ? 'highlighted' : ''}`} key={index}>
            <img src={testimonial.image} />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.position}</p>
              <p>{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="logos">
        {/* <img id='gogle' src="\src\assets\Google_Reviews-removebg-preview 1.png" alt="Google Reviews" />
        <img id='glass' src="\src\assets\Glassdoor_logo 1.png" alt="Glassdoor" />
        <img id='good' src="\src\assets\download-removebg-preview 1.png" alt="GoodFirms" /> */}
        <img src="src\assets\Frame 65.png" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
