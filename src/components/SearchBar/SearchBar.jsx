import React, { useState } from 'react';
import { Headers, Button, Form, Input } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <Headers>
      <Form className="form" onSubmit={handleSubmit}>
        <Button Button type="submit" className="button">
          <span>Search</span>
        </Button>

        <Input
          onChange={onChange}
          value={query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Headers>
  );
};

export default SearchBar;
