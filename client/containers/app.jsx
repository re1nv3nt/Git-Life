import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import LanguageSelect from '../components/search_chooselanguage'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import test from '../styles/style.css';
import {IndexLink, Link} from 'react-router';


  // <CommitItems commitData = {this.props.commitData} getCommitData={this.props.actions.getCommitData}/>
class App extends Component {
  render(){
    return (
      <div className='container'>
        <div class="row">
      <div class="col s1"></div>
      </div>
          <div>
            <div className="row">
              <div className="col s12">
                <ul className='tabs blue lighten-4'>
                  <li className='tab col s3'>
                    <span>
                      <Link to='/' activeClassName="active">Search</Link>
                    </span>
                  </li>
                  <li className='tab col s3'>
                    <span><Link to='/trends'>Trends</Link></span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results: state.results,
    term: state.searchTerm,
    repos: state.splashRepos,
    commitData: state.commitData,
    wiredResults: state.wiredResults,
    dataResults: state.dataResults,
    hnResults: state.hnResults,
    orgs: state.orgs
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
