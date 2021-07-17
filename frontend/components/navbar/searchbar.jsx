import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

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
              <option className='searchvalue' value="">All</option>
              <option className='searchvalue' value="Anime">Electronics</option>
              <option className='searchvalue' value="Manga">Books & Moo-vies</option>
              <option className='searchvalue' value="Manga">Food & Grocery</option>
              <option className='searchvalue' value="Manga">Beauty & Health</option>
              <option className='searchvalue' value="Manga">Games & Toys</option>
              <option className='searchvalue' value="Manga">Fashion & Jewelry</option>
              <option className='searchvalue' value="Manga">Home & Garden</option>
              <option className='searchvalue' value="Manga">Sports & Outdoors</option>

            </select>
            <input className="search-input" type="text" value={this.state.search} onChange={this.handleInput("search")} />
          <button type="submit" className="search-button"><AiOutlineSearch fill="#555555" /></button>
        </form>
    )
  }
}

export default Searchbar;