import { useState, useEffect } from 'react';
import { Navbar as NavbarBootstrap, Container, Form, FormControl, Button } from 'react-bootstrap';
import { search_photos } from 'unsplash-api'; 

export const Navbar: React.FC = ({
  keyword: [keyword, setKeyword], results: [searchResults, setSearchResults]
}) => {
  const [searchQuery, setSearchQuery] = useState(keyword);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    setKeyword(searchQuery);
  };

  useEffect(() => {
    search_photos(searchQuery).then(results => {
      setSearchResults(results);
    }).catch(error => {
      // TODO: mostra errore
    });
  }, [keyword]);

  return (
      <NavbarBootstrap bg="dark" variant="dark" expand="lg">
        <Container>
          <NavbarBootstrap.Brand href="#home">Unsplash</NavbarBootstrap.Brand>
            <Form className="d-flex ms-auto" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
        </Container>
      </NavbarBootstrap>
  );
};
