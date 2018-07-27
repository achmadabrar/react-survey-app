import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; //logic untuk ganti komponen
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
//import Footer from './Footer';
//import Dashboard from './Dashboard';
//import SurveyNew from './SurveyNew;';
const Dashboard = () => <h3>Dashboard</h3>;
//const SurveyNew = () => <h3>Survey New</h3>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
            
    render(){
        return(
            <div className="container"> 
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path = "/" component = {Landing}/>
                        <Route exact path = "/surveys" component = {Dashboard}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);