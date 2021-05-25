import React, {useState} from 'react';
import AsideLI from '../Aside/AsideLI';


function AsideUL(props) {
    const [asideTitle] = useState([
        { id: 1, title: 'Going to 1 ' },
        { id: 2, title: 'Going to 2 ' },
        { id: 3, title: 'Going to 3 ' },
        { id: 4, title: 'Going to 4 ' },
        { id: 5, title: 'Going to 5 ' },
        { id: 6, title: 'Going to 6 ' },
        { id: 7, title: 'Going to 7 ' },
        { id: 8, title: 'Going to 8 ' },
        { id: 9, title: 'Going to 9 ' },
        { id: 10, title: 'Going to 10 ' }
    ]);

    return (
        <aside className="Aside" style={{marginLeft:'10px'}}>
            <ul>
                <AsideLI links={asideTitle} />
            </ul>
        </aside>
    );
}

export default AsideUL;