import React from 'react';
import {Carousel} from 'react-bootstrap';

const Carousell = () => {
  return (
    <>
        <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          src="../image/fileSALHDBG2.jpg"
          className="d-block w-100"          
          alt="imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/295844955_5254585801296836_3021318724089898047_n.jpg"
          alt="imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="imagen 3"
        />
      </Carousel.Item>
    </Carousel>      
    </>
  )
}

export default Carousell
