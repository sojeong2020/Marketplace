import React from 'react';
import { patchKudos } from '../utils/api';
import {useState} from 'react';

const Kudos = ({username, kudos}) => {
    const [kudosChange, setKudosChange] = useState(0);
//create some state to keep track of how much a user has been kudos

    const [hasError, setHasError]= useState(false);

    const incKudos = () => {
        setHasError(false);

        setKudosChange((currKudosChange)=>{
            return currKudosChange + 1;
        });

        patchKudos(username,1).catch((err)=>{
            setHasError(true);
            setKudosChange(0);
        })
        
    }
    return (
        <section>
            <p>Kudos: {kudos + kudosChange}</p>
            {hasError && <p>Oops! Something's gone wrong!</p>}
            <button disabled={kudosChange > 0} onClick={incKudos}> 💖 </button>
        </section>
    );
};

export default Kudos;