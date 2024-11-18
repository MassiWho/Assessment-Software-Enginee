import React, { Suspense } from 'react';
import { Each, Result } from 'components';
import Spinner from 'react-bootstrap/Spinner';
import './Results.css';

export const Results: React.FC = ({
  keyword: [keyword], results: [searchResults], prevPage, nextPage
}) => {
  return (
    <>
      <h1>Risultati per "{keyword}"</h1>
      {searchResults?.results?.length === 0 && <Spinner className="mt-5" />}
      <div className="mt-5 container">
        <div className="row g-3 justify-content-center">
          {searchResults?.results?.map((item, index) => (
            <div key={index} className="col-auto">
              <div className="image-wrapper">
                <Result data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
