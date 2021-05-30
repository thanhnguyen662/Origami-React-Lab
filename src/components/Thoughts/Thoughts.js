import React, { useEffect, useState } from 'react';
import CreateThoughtsForm from './CreateThoughtsForm';
import axios from "axios";
import origamiApi from '../.././api/origamiApi'
import Post from '../Post/Post';

function Thoughts(props) {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function getLatestPost() {
            try {
                const params = { limit: 3 };
                const response = await origamiApi.getPost(params)
                console.log('Get latest post successful: ', response)

                setPostList(response)
            } catch (error) {
                console.log('Fail: ', error);
            }
        }
        getLatestPost()
    }, [])

    async function handleThoughtsFormSubmit(formValues) {
        console.log('Form submit: ', formValues)
        try {
            const response = await axios.post('http://localhost:9999/api/origami', formValues,)

            console.log(response)
        } catch (error) {
            console.log('Fail: ', error);
        }
    }

    return (
        <div className='Input'>
            <CreateThoughtsForm onThoughtsFormSubmit={handleThoughtsFormSubmit} />
            <div>
                <h2>Last 3 post on your wall</h2>
                <Post posts={postList} />
            </div>
        </div>
    );
}

export default Thoughts;