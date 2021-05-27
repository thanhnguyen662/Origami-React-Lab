import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from "axios";

function Main() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function getPostList() {
            try {
                const response = await axios.get('http://localhost:9999/api/origami/all')
                const { data } = response

                setPostList(data)

            } catch (error) {
                console.log('Fail: ', error.message);
            }
        }
        getPostList();
    }, []);




    return (
        <main className='Main'>
            <h1>Publication</h1>
            <Post posts={postList} />
        </main>
    );
}

export default Main;