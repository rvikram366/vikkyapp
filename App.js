import React, { Component } from 'react';
import {Route,withRouter, NavLink} from 'react-router-dom';
import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem 
} from 'reactstrap';
import routes from './routes';
import Home from './pages/Home/Home';
import PropTypes from 'prop-types';
import Authors from './pages/Home/Authors';
import AuthorPage from './pages/Home/AuthorPage';
import Post from './pages/Post/Post';
import NewPost from './pages/NewPost/NewPost';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from './redux/actions/postsActions';


class App extends Component {

  static propTypes = {
    history :PropTypes.object.isRequired,
    loctaion: PropTypes.object.isRequired,
    match:PropTypes.object.isRequired,
  }

  constructor() {
    super();

    this.state = {
      isToggleOpen: false,
    };
  }

  componentDidMount() {
    if(this.props.location.pathname === '/'){
        this.props.history.replace(routes.home);
    }
    debugger;
    this.props.postActions.getAllPosts();
    console.log(this.props.postActions);

  }

  toggle = () => {
    this.setState({
      isToggleOpen: !this.state.isToggleOpen,
    });
  };

  render() {
    return (
      <div className="App">
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
          <NavLink className="navbar-brand" to={routes.home}>Blog</NavLink>
          <Collapse isOpen={this.state.isToggleOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink 
                  className="nav-link" 
                  activeClassName="active" 
                  to={routes.home}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.authors}>Authors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to={routes.newPost}>New Post</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    
        <Route 
        exact = {true}
          path = {'/'}
          component = {Home}
          />
        <Route 
          exact = {true}
          path = {routes.home}
          component = {Home}
          />
        <Route 
          exact = {true}
          path = {routes.authors}
          component = {Authors}
          />

          <Route 
          exact = {true}
          path = {routes.post}
          component = {Post}
          />

          <Route 
          exact = {true}
          path = {routes.author}
          component = {AuthorPage}
          />

          <Route 
          exact = {true}
          path = {routes.newPost}
          component = {NewPost}
          />
          
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
      
  };
};

const mapDispatchToProps = dispatch =>{
  return {
      postActions : bindActionCreators(postActions,dispatch),
  };
};

//export default withRouter(App);
export default
withRouter(
  connect(
    mapStateToProps,  
    mapDispatchToProps,
  )(App));