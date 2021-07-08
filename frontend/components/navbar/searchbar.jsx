import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      category: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    const category = this.state.category;
    this.props.fetchProducts(search, category);
    this.props.history.push(`/products?search=${this.state.search}&category=${this.state.category}`);
  }

  render() {
    return(
        <form className="searchbar" onSubmit={this.handleSubmit}>
            <select className="search-menu category" id="category" onChange={this.handleInput("category")}>
              <option value="">All</option>
              <option value="Anime">Anime</option>
              <option value="Manga">Manga</option>
            </select>
          <input className="search-input" type="text" value={this.state.search} onChange={this.handleInput("search")} />
          <button type="submit" className="search-button">search_button</button>
        </form>
    )
  }
}

export default Searchbar;