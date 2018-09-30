import React,{Component} from 'react';
import apiCall from '../../services/apiCall';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import PostSummary from '../../CommonComponents/PostSummary';
import ErrorMessage from '../../CommonComponents/ErrorMessage';

import {connect} from 'react-redux';

class Home extends Component {

    constructor() {
        super();

        this.state ={
            loading : false,
            hasError : false
        }
    }

    

    render() {
        return(
            //<h1>{`Home`}</h1>
            <div className={`posts-container container`}>
                {
                    this.state.loading
                    ?
                    <LoadingIndicator/>
                    :
                    null
                }
                {
                    this.state.hasError
                    ?
                        <ErrorMessage 
                            title={'Error!'} 
                            message={'Unable to retrieve posts!'} 
                        />
                    :
                        null
                }
                {
                    this.props.posts.map(post => 
                        <PostSummary 
                            key={post.id} 
                            post={post}/>
                        )
                }
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    debugger;
    return {
        posts : state.posts
    };
};



export default 
connect(
    mapStateToProps,
    
)(Home);