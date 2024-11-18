import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Results } from 'components';
import { data as Words } from './words';

const App: React.FC = () => {
  function get_random_word() {
    return Words[Math.floor(Math.random() * Words.length)];
  }

  const [keyword, setKeyword] = useState<string>(get_random_word);
  const [searchResults, setSearchResults] = useState({ results: [ ] });

  return (
    <div>
      <Navbar keyword={ [keyword, setKeyword] } results={ [searchResults, setSearchResults] }/>
      <Container className="mt-5 text-center">
         <Results keyword={ [keyword, setKeyword] } results={ [searchResults, setSearchResults] }/>
      </Container>
    </div>
  );
};

export default App;
