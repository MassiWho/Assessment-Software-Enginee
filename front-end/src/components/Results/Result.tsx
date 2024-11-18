import React, { useState, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import './Result.css';

export const Result: React.FC = ({
  data
}) => {
  function handleClick() {

  };

  return (
    <>
      <Suspense fallback={ <Spinner/> }>
        <Image src={ data.urls.thumb } className="zoom-on-hover" onClick={handleClick}/>
      </Suspense>
    </>
  );
};
