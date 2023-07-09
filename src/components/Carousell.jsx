import React from 'react';
import {Carousel} from 'react-bootstrap';

const Carousell = () => {
  return (
    <>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/fileSALHDBG2.jpg"
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../image/295844955_5254585801296836_3021318724089898047_n.jpg"
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="..."
        />
      </Carousel.Item>
    </Carousel>      
    </>
  )
}

export default Carousell
