import React, { Component } from 'react';
import jinx from '../img/jinx.jpg';
import evelynn from '../img/evelynn.png';
import tournament from '../img/power-tournament.png';
import { Carousel, CarouselItem } from 'react-bootstrap';

class NewsPage extends Component {
    state = {  } 
    render() { 
        return (
            <Carousel>
                <CarouselItem>
                    <div className="d-flex justify-content-center">
                        <img 
                        className='img-fluid w-50'
                        src={jinx} 
                        alt="Jinx" 
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>News 1</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <div className="d-flex justify-content-center">
                        <img 
                        className='img-fluid w-50'
                        src={tournament} 
                        alt="Tournament" 
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>News 2</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <div className="d-flex justify-content-center">
                        <img 
                        className='img-fluid w-50'
                        src={evelynn} 
                        alt="Evelynn" 
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>News 3</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default NewsPage;