import React, { useEffect, useState } from 'react';
import axios from "axios";
import MinePost from './MinePost';
import MineProfile from './MineProfile';

function Profile(props) {
    const [minePostList, setMinePostList] = useState([])

    useEffect(() => {
        async function getMinePostList() {
            try {
                const response = await axios.get('http://localhost:9999/api/origami/mine')
                const { data } = response

                setMinePostList(data)
            } catch (error) {
                console.log('Fail: ', error.message);
            }
        }
        getMinePostList()
    }, []);


    return (
        <div className='Profile'>
            <MineProfile />
            <div>
                <h2>3 of your recent posts</h2>
                <MinePost minePosts={minePostList} />
            </div>
        </div>
    );
}

export default Profile;