import React, { useEffect, useState } from 'react';
import './CarouselBody.scss';

export default function CarouselAnimation({ data }) {
  const [indexG, setIndex] = useState(0);
  const [object, setObject] = useState({});
  let indexGlobal = 0;

  const quantifyShow = data.length;
  useEffect(
    () => {
      const id = setInterval(() => {
        if(indexGlobal >= data.length - 1) {
          indexGlobal = 0;
        } else {
          indexGlobal += 1;
        }
        setIndex(indexGlobal);
      }, 1500);
      return () => {
        clearInterval(id);
      };
    },
    [] // empty dependency array
  );

  useEffect(() => {
    const newObject = data.reduce((acc, _value, index, array) => {
      return {...acc, [index]: (indexG + index >= array.length ? (indexG + index) - (array.length) : indexG + index)};
  } ,{});
  setObject(newObject);
  }, [indexG]);

  const classesAnimation = {};

  for(let i = 0; i < quantifyShow; i += 1) {
    classesAnimation[i] = (i <= (quantifyShow / 2)
      ? `shadow-right-${Math.floor(quantifyShow / 2) - i + 1}`
      : `shadow-left-${i - Math.floor(quantifyShow / 2)}`
    )
  }

  const carouselShowing = (arr) => {
    return arr.map((children, index) => {
      const classActual = classesAnimation[object[index]] || 'shadow';
      return (
        <div className={`carousel-item ${classActual}`} key={ index }>
          {children}
        </div>
      );
    });
  };

  return <div className="carousel-animation-body">{carouselShowing(data)}</div>
};
