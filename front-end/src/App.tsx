import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Results } from 'components';
import { data as Words } from './words';
import { search_photos } from 'unsplash-api';

const App: React.FC = () => {
  function get_random_word() {
    return Words[
      Math.floor(Math.random() * Words.length)
    ];
  }

  const [keyword, setKeyword] = useState<string>(get_random_word);
  const [searchResults, setSearchResults] = useState({ results: [ ] });

  useEffect(() => {
    search_photos(keyword).then(results => {
      setSearchResults(results);
    }).catch(error => {
      // TODO: mostra errore
    });
  }, [keyword]);

  return (
    <div>
      <Navbar keyword={ [keyword, setKeyword] }/>
      <Container className="mt-5 text-center">
        <Results
          keyword={ [keyword, setKeyword] }
          results={ [searchResults] }
          prevPage={ null }
          nextPage={ null }
        />
      </Container>
    </div>
  );
};

export default App;
