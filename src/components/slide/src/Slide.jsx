// @flow
import * as React from 'react';

type Props = {
  imgSrc: string,
  subHeading: string,
  heading: string,
  desc: string,
  btnText: string,
};

const Slide = (props: Props) => {
  const {imgSrc, subHeading, heading, desc, btnText} = props;
  return (
    <div className="fb-carousel__slide">
      <div className="fb-carousel__slide__content">
        <div className="fb-carousel__slide__content__media">
          <img src={imgSrc} alt={heading} />
        </div>
        <div className="fb-carousel__slide__content__description">
          {subHeading && <p>{subHeading}</p>}
          <h1>{heading}</h1>
          <p>{desc}</p>
          <p>
            <button type="button">{btnText}</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
