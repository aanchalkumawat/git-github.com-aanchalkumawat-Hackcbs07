import React from 'react';
import './HowItWorks.css';
//import image1 from 'bhojan\public\image1.jpg';

const HowItWorks = () => {
    const handleRedirect = () => {
        window.location.href = 'https://www.swiggy.com'; // Redirect to Swiggy
    };

    const steps = [
        {
            title: 'Track Your Meals',
            description: 'Log your food easily with a comprehensive meal database and nutritional tracking.',
            imgSrc:'/image1.jpg'
        },
        {
            title: 'Customize Orders',
            description: 'Personalize your meal plans based on your dietary preferences.',
            imgSrc: '/image2.jpg',
            onClick: handleRedirect
        },
        {
            title: 'Track Nutrition',
            description: 'Monitor the nutritional content of your meals to stay on top of your health goals.',
            imgSrc: '/image3.jpg'
        }
    ];

    return (
        <section id="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
                {steps.map((step, index) => (
                    <div
                        className="step"
                        key={index}
                        onClick={step.onClick}
                        style={step.onClick ? { cursor: 'pointer' } : {}}
                    >
                        <img src={step.imgSrc} alt={`Illustration for ${step.title}`} className="step-image" />
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;

