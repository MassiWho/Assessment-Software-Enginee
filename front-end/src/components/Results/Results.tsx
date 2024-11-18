import React, { Dispatch, SetStateAction } from 'react';
import { Result } from '../../components';
import Spinner from 'react-bootstrap/Spinner';

export const Results: React.FC<{
  keyword: [string, Dispatch<SetStateAction<string>>],
  results: any
}> = ({
  keyword: [keyword], results
}) => {
  return (
    <>
      <h1>Risultati per "{keyword}"</h1>
      {results?.length === 0 && <Spinner className="mt-5" />}
      <div className="mt-5 container">
        <div className="row g-3 justify-content-center">
          {results?.map((item, index) => (
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
