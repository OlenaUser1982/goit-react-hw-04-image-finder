import { Headers, Button, Form } from './SearchBar.styled';
import { Component } from 'react';
import { Input } from './SearchBar.styled';
class SearchBar extends Component {
  state = {
    query: '',
  };
  onChange = e => {
    this.setState({ query: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <Headers>
        <Form className="form" onSubmit={this.onSubmit}>
          <Button Button type="submit" className="button">
            <span>Search</span>
          </Button>

          <Input
            onChange={this.onChange}
            value={this.state.query}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Headers>
    );
  }
}
export default SearchBar;
