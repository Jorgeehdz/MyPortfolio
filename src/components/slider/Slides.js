import React from 'react';
import './slider.css';

const slidesInfo = [
    {
        src: "https://user-images.githubusercontent.com/51522362/122074959-4c733b80-cdbf-11eb-996d-07df28d605e1.png",
        url: "https://github.com/Jorgeehdz/MernTask-Cliente",
        alt: "MernTasks",
        desc: "MernTasks"
    },
    {
        src: "https://user-images.githubusercontent.com/51522362/122140020-d2b76e00-ce0f-11eb-93b3-4d89adc0bc0f.png",
        url: "https://github.com/Jorgeehdz/reduxcrudreact",
        alt: "Redux React CRUD",
        desc: "Redux React CRUD"
    },
    {
        src: "https://user-images.githubusercontent.com/51522362/121953943-cbb33180-cd23-11eb-9fea-8baa5fa062d5.png",
        url: "https://presupuestodineroreactjs.netlify.app/",
        alt: "Gasto Semanal",
        desc: "Calcular Presupuesto"
    },
    {
        src: "https://user-images.githubusercontent.com/51522362/121954918-ee921580-cd24-11eb-9b61-c8a133c47322.png",
        url: "https://cotizadorserguros.netlify.app/",
        alt: "Cotizador Seguros",
        desc: "Cotizador Seguros"
    },
    {
        src: "https://user-images.githubusercontent.com/51522362/122140484-01821400-ce11-11eb-9d9e-c1d5b762227f.png",
        url: "https://adminpacientes.netlify.app/",
        alt: "pet dating manager",
        desc: "pet dating manager"
    },
    {
        src: "https://user-images.githubusercontent.com/51522362/121956311-9bb95d80-cd26-11eb-930b-e80eacebcd86.png",
        url: "https://breakingbadapireact.netlify.app/",
        alt: "Breaking Bad API",
        desc: "Breaking Bad API"
    },
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.url} target="_blank" rel="noreferrer" ><img src={slide.src} alt={slide.alt} /></a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));


export default slides;