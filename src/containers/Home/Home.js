import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../../hoc/withAuth';
import SearchBar from '../../components/SearchBar/';
import {planetsActions} from '../../actions';
import Planets from '../Planets';

class Home extends Component {

  searchHandler=(item)=>{
    const {dispatch}=this.props;
    dispatch(planetsActions.search(item));
  }
 
  render() {    
    return (
      <div className="container">
        <div className="row">            
              <h1 className="col-md-6">{`welcome ${this.props.user.username}`}</h1>
              <Link className="col-md-6" to="/login">Logout</Link>            
        </div>  
        <div className="row">
            <div className="col-md-8 col-offset-2">
              <SearchBar searchHandler={this.searchHandler} />
            </div>
        </div>
        <div className="container-fluid">            
            <Planets fetching={this.props.fetching} data={this.props.data} />                  
        </div>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  const {fetching,data}=state.planets;
  
  return { user,fetching,data };
}

export default connect(mapStateToProps)(withAuth(Home));
