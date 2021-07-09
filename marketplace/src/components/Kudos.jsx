import React from 'react';
import { patchKudos } from '../utils/api';
import {useState} from 'react';

const Kudos = ({username, kudos}) => {
    const [kudosChange, setKudosChange] = useState(0);
//create some state to keep track of how much a user has been kudos

    const incKudos = () => {
        patchKudos(username,1)
        .then(()=>{
            setKudosChange((currKudosChange)=>{
                return currKudosChange + 1;
            });
        });
    }
    return (
        <section>
            <p>Kudos: {kudos + kudosChange}</p>
            <button onClick={incKudos}> 💖 </button>
        </section>
    );
};

export default Kudos;