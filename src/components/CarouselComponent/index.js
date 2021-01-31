import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import joaquin from '../../assets/joaquin.jpeg';
import alexie from '../../assets/alexie.jpeg';
import janda from '../../assets/janda.jpeg';
import chauncey from '../../assets/chauncey.jpeg';
import maria from '../../assets/maria.jpeg';
import pete from '../../assets/pete.jpeg';
import alexieOrcas from '../../assets/alexieOrcas.jpeg';
import florida from '../../assets/florida.jpeg';


const carouselImages = [joaquin, alexie, janda, maria, pete, florida, alexieOrcas, chauncey];

export default function CarouselComponent() {
    return (
        <Carousel className='carousel-div'>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src= {carouselImages[0]}
                alt="Joaquin"
                />
                <Carousel.Caption className='carousel-caption'>
                <h3>Joaquin</h3>
                <p>This year Joquin made the transition to online learning at Rainier Prep. He made the first quarter Honor Roll this fall, played lots of video games, and can't wait for sports to start again.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img className='carousel-image'
                src= {carouselImages[1]}
                alt="Alexie"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Alexie</h3>
                <p>Alexie is enjoying being in Ms Deuel's online classroom at Leschi Elementary. She can't wait for school to start in person again. She is looking forward to playing softball this spring.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src={carouselImages[3]}
                alt="Maria"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Maria</h3>
                <p>Maria kept Madres's kitchen open as a home meal delivery company from March until August when the owners decided to shut down until conditions improve. She is currently is starting classes at Seattle Central College this quarter working towards the Graphic design program.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src={carouselImages[4]}
                alt="Pete"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Pete</h3>
                <p>My long time employer shut down this year. In June I began a Web Development Bootcamp through the University of Washington which I successfully completed in December. I built this site using skills I learned and am searching for a job in the industry now.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src={carouselImages[5]}
                alt="Family"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Florida</h3>
                <p>We went to Florida in February before the lockdowns started.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src={carouselImages[6]}
                alt="Family"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Orcas</h3>
                <p>We've mostly been hanging out close to home but we did make a trip up to Orcas Island this summer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                className='carousel-image'
                src={carouselImages[7]}
                alt="Family"
                />

                <Carousel.Caption className='carousel-caption'>
                <h3>Stay Safe!</h3>
                <p> We have Missed all of you very much and hope to be able to see you outside of screens this year. Everyone please stay safe and healthy and hopefully we'll see you in 2021!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
