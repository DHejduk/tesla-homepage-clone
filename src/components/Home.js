import React from 'react';
import Section from './Section';
const Home = () => {
    return (
        <div>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
             />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
             />
             <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
             />
             <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
             />
             <Section 
                title="Solar and Powerwall"
                description="Power Everything"
                backgroundImg="solar-panel.jpg"
             />
        </div>
    );
}

export default Home;

