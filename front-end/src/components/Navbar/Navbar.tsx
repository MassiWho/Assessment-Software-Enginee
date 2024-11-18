import { useState } from 'react';
import { Navbar as NavbarBootstrap, Container, Form, FormControl, Button } from 'react-bootstrap';

export const Navbar: React.FC = ({
  keyword: [keyword, setKeyword]
}) => {
  const [searchQuery, setSearchQuery] = useState(keyword);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setKeyword(searchQuery);
  };

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
