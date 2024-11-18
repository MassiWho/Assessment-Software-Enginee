import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Navbar, Results } from './components';
import { data as Words } from './words.json';
import { search_photos } from './unsplash-api';

const App: React.FC = () => {
  function get_random_word() {
    return Words[Math.floor(Math.random() * Words.length)];
  }

  const [keyword, setKeyword] = useState<string>(get_random_word);
  const [searchResults, setSearchResults] = useState<any>({ results: [] });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setSearchResults({ results: [] });
    search_photos(keyword, currentPage).then(results => {
      setSearchResults(results);
    })/*.catch(error => {
      // TODO: mostra errore
    });*/
  }, [keyword, currentPage]);

  const goToNextPage = () => {
    if (searchResults?.total_pages > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar keyword={[keyword, setKeyword]} />
      <Container className="mt-5 text-center">
        <Results
          keyword={[keyword, setKeyword]}
          results={searchResults.results}
        />
        <div className="mt-4">
          <Button
            variant="secondary"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Precedente
          </Button>
          <Button
            variant="secondary"
            onClick={goToNextPage}
            disabled={currentPage === searchResults.total_pages}
          >
            Successivo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default App;
