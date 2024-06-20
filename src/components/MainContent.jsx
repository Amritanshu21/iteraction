// src/components/MainContent.js
import React from 'react';


function MainContent() {
  return (
    <section className="main-content">
<div className='main'>     <nav className="navbar">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/15ba/7591/78969e4c510ba0322f97a3e5877e1626?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IaCo1i~RCMCf0KIFeqCXCu5wm9FOhH3mrUIqbfiK6oMPPeWrwsl7avO7BuIKkf5~6NhqN2tLsujUUxozNlb3kTq8wTlqSUPmt7Jbp~rGon1KDdfBjwkieLxhHT0X8nxs8Iwdx1dAgmf9BmdfXraPt6vQNjzSlZPeb5vYEbf9BFajW5fVVB1DM8lZwJHp2HtpjtZZOil2jQ5m3lMKVPjnGdnqExyThqNAYQVuHmIyaomvZ0GTabRrAHVp3TILjb06arYyKx3k~~NJx85rV4RGwefVrwW3mt4WSIVkrF1Ukqc3Yk2rAiabyoiR8l7FhNiJMcpY0Kf653DFsixYL-eAOg__" alt="" />
      </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contacts">Contacts</a></li>
         <div className='vector'>
          <img src="\src\assets\Vector.png" alt="" />
         </div>
        </ul>
        <button className="schedule-button">Schedule a meeting</button>
      </nav>
      <div className="text-content">
        <h1>Web & <span className="highlight">Mobile</span></h1>
        <h1>App Development</h1>
        <div className='underline'></div>
        <p>Backed with Latest Technology to Deliver Best in Class User Experience.</p>
        <div className="image-content">
        <img src="\src\assets\Untitled-1 1.png" alt="Developer" />
      </div>
      </div>
     
      </div>
 
    </section>
  );
}

export default MainContent;
