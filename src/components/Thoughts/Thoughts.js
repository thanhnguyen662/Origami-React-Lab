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

    return (
        <div className='Input'>
            <CreateThoughtsForm />

            <div>
                <h2>Last 3 post on your wall</h2>
                <LatestPost latestPosts={latestPostList} />
            </div>
        </div>

    );
}

export default Thoughts;