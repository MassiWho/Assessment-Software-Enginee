import React, { useState, Suspense } from 'react';
import { Navbar, Show, Each, Result } from 'components';
import Spinner from 'react-bootstrap/Spinner';

export const Results: React.FC = ({
  keyword: [keyword, setKeyword], results: [searchResults, setSearchResults]
}) => {
  return (
    <>
      <Suspense fallback={ <Spinner/> }>
        <h1>Risultati per "{ keyword }"</h1>
        <div className="mt-5 container">
          <div className="row">
            <Each of={ searchResults?.results } render={(item, index) =>
              <div className="col-lg-2 col-md-3 col-sm-5 my-1">
                <Result data={ item }/>
              </div>
            }/>
          </div>
        </div>
      </Suspense>
    </>
  );
};
