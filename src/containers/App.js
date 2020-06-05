import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, executesRequestRobots } from '../actions'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

const mapStateToProps = (state) => {

  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatcherToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(executesRequestRobots())
  }
}

class App extends React.Component{

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
     const { searchField, onSearchChange, robots, isPending, error } =  this.props;

    const filteredRobots = robots.filter((robot) => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });

    return isPending ?
              <h1> Loading... </h1>
          : (
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundry>
              </Scroll>
            </div>
          );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);