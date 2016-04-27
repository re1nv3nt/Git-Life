import _ from 'lodash';
import React, {Component} from 'react';
import Axios from 'axios';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchResults: []
    };

  }

  componentWillRecieveProps() {
  }


  searchGit(value){
    var context = this;

    Axios.get('https://api.github.com/search/repositories', {
      params: {
        q: value
      }
    })
    .then(function(response){
      context.props.resultsPassed(response);

    })
    .catch(function(response){
        console.log("catch")

      console.log(response);
    });

  }
  handleSearch(value){
    this.setState({"searchTerm":value});
    this.props.onSearchTermChange(value);
    console.log(this.state);
    // this.searchGit(value);

  }
  render() {
    return(
      <div >
        <form>
          <input
            onChange={(event) => {this.handleSearch(event.target.value)}}
          placeholder="Search GitHub" />
        <button onClick={()=>{this.searchGit(this.state.searchTerm);}}>Search</button>
        </form>
      </div>
    );
  }

/*
setTimeout((function() {
  console.log(this.state);
}).bind(this), 2000)
*/


}
SearchBar.propTypes = {
  resultsPassed: React.PropTypes.func,
};
