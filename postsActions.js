import actionTypes from "../actionTypes/actionTypes";

export const getPOsts = (posts) => {

    const posts =[
        {
            title: 'My Post 1:',
        },
        {
            title: 'My Post 2:',
        },
        {
            title: 'My Post 3:',
        }
    ]

    return{
        type : actionTypes.GET_POSTS,
        payLoad : {posts},
    };
}