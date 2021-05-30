import React, { useEffect, useState } from 'react';
import CreateThoughtsForm from './CreateThoughtsForm';
import LatestPost from './LatestPost';
import axios from "axios";


function Thoughts(props) {
    const [latestPostList, setLatestPostList] = useState([])
    useEffect(() => {
        async function getLatestPost() {
            try {
                const response = await axios.get('http://localhost:9999/api/origami/all?limit=3')
                const { data } = response

                setLatestPostList(data)
            } catch (error) {
                console.log('Fail: ', error.message);
            }
        }
        getLatestPost()
    }, [])

    async function handleThoughtsFormSubmit(formValues) {
        console.log('Form submit: ', formValues)
        try {
            const accessToken = localStorage.getItem('token')
            const response = await axios.post('http://localhost:9999/api/origami', formValues, {
                headers: {
                    'Authorization': accessToken
                }
            })
            console.log(response)
        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div className='Input'>
            <CreateThoughtsForm onThoughtsFormSubmit={handleThoughtsFormSubmit} />
            <div>
                <h2>Last 3 post on your wall</h2>
                <LatestPost latestPosts={latestPostList} />
            </div>
        </div>
    );
}

export default Thoughts;