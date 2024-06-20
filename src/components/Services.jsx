import React from 'react';


function Services() {
  return (
    <div className="App">
       <div className="header">
        <h1>do you have an idea?</h1>
        <h2>we have an expert team!</h2>
        <p>With the help of our wide range of services in various domains, we have successfully covered various companies globally. In our time frame, we have designed several apps for different companies that have benefited from it and can scale their business to new heights. We will be happy to do the same for your business and help you realize the true potential of your business with our cost-effective services.</p>
      </div>
      <div className="services">
        <div className="service">
        <img src="/src/assets/Vector (2).png" alt="" />
        <h3>app & web <br />development</h3>
        <p>Transform your ideas into reality with our cutting-edge web and app development services.</p>
        </div>
        <div className="service">
        <img src="/src/assets/Vector (3).png" alt="" />
        <h3>chatbot & voicebot <br />development</h3>
        <p>Connect with your customers in real-time and make the most out of the situation with our custom-built bots</p>
        </div>
        <div className="service">
        <img src="/src/assets/Group 42.png" alt="" />
        <h3>smart iot <br />solutions</h3>
        <p>With IoT power, automate your crucial workflow and improve your productivity.</p>
        </div>
        <div className="service">
        <img src="/src/assets/Vector (4).png" alt="" />
        <h3>software <br />testing</h3>
        <p>Ensure flawless performance with our new, cutting-edge software testing feature.</p>
        </div>
      </div>
      <div className="navigation">
        <img src="/src/assets/Vector (5).png" alt="" />
        <img src="/src/assets/Vector (6).png" alt="" />
      </div>
    </div>
  );
}

export default Services;
