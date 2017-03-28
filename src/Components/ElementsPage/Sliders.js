/**
 * Created by Aleks on 12.03.2017.
 */
import React from 'react'
import {Carousel} from 'react-bootstrap';
import tramvaj from'./images/tramvai1.jpg';
import banner from './images/banner.png';
import './Slider.css';

export default class Sliders extends React.Component {
  render() {
    return (
      <div className="buttonCarousel">
        <Carousel>
          <Carousel.Item>
            <img width={1350} height={400} alt="tramvaj" src={banner}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1350} height={400} alt="bus" src={tramvaj}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
};
