import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselComponent() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="Joaquin"
                    />
                    <Carousel.Caption>
                    <h3>Joaquin</h3>
                    <p>This year Joquin made the transition to online learning at Rainier Prep. He made the first quarter Honor Roll this fall and can't wait for sports to start again.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Alexie"
                    />

                    <Carousel.Caption>
                    <h3>Alexie</h3>
                    <p>Alexie is enjoying being in Ms Deuel's online classroom at Leschi Elementary. She can't wait for school to start in person again. She is looking forward to playing softball this spring.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Maria"
                    />

                    <Carousel.Caption>
                    <h3>Maria</h3>
                    <p>Maria kept Madres's kitchen open as a home meal delivery company from March until August when the owners decided to shut down until conditions improve. She is currently is starting classes at Seattle Central College this quarter working towards the Graphic design program.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Pete"
                    />

                    <Carousel.Caption>
                    <h3>Pete</h3>
                    <p>My long time employer shut down this year. In June I began a Web Development Bootcamp through the University of Washington which I successfully completed in December. I built this site using skills I learned and am searching for a job in the industry now.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Family"
                    />

                    <Carousel.Caption>
                    <h3>Family</h3>
                    <p>We've mostly been hanging out close to home but we did make a trip up to Orcas Island this summer. We have Missed all of you very much and hope to be able to see you outside of screens this year. Everyone please stay safe and healthy and hopefully we'll see you in 2021!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
