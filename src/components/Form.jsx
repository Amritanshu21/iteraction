import React from 'react';


const Form = () => {
  return (
    <div className="contact-form-container">
      <div className="image-container">
        <img src="/images/form-image.jpg" alt="Form" />
      </div>
      <div className="form-container">
        <h1>let’s have a conversation <span className="highlight">today!</span></h1>
        <p>our experts are available to discuss your requirements and to become your tech partner</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">email id</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
