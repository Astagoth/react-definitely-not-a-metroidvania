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
                    <img 
                    className='d-block w-50'
                    src={jinx} 
                    alt="Jinx" 
                    />
                </CarouselItem>
                <CarouselItem>
                    <img 
                    className='d-block w-50'
                    src={tournament} 
                    alt="Tournament" 
                    />
                </CarouselItem>
                <CarouselItem>
                    <img
                    className='d-block w-50' 
                    src={evelynn} 
                    alt="Evelynn" 
                    />
                </CarouselItem>
            </Carousel>
        );
    }
}

export default NewsPage;