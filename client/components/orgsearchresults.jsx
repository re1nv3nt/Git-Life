import React, {Component} from 'react';
import OrgItem from './orgitem';

export default class OrgSearchResults extends Component {

  handleClick(sortBy) {
    this.setState({sort: sortBy});
    console.log('in orgsearchresults: ', this.state);
  }

  constructHTML() {
    if(this.props.results.data){
      return _.reduce(this.props.results.data.organizations, (accum, item)=>{
        let html =(
            <OrgItem description={item.name} url={item.url} avatar_url={item.avatar_url} key={item.id}/>
        );
        accum.push(html);
        return accum;
      }, []);
    }
  }

  populateResults(sortBy) {

  }

  render() {
    return (
      <div className='collection'  style={{display: 'inline-block',float:'left', width: '20%', height: '25%', margin: '20px 20px 20px 20px'}}>
        <p style={{fontWeight:'bold', textAlign: 'center'}}>Top Organizations</p>
        <button onClick={() => { this.handleClick('instances') }} >By Instances</button>
        <button onClick={() => { this.handleClick('name') }} >By Name</button>
        <button onClick={() => { this.handleClick('repo') }} >By Repo</button>
        {this.populateResults()}
      </div>
    );
  }
};
