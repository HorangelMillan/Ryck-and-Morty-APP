import axios from 'axios';
import React, { useEffect, useState } from 'react';
import notsignal from '../images/notsignal.gif'

const ResidentInfo = ({ info }) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(info).then(res => setResident(res.data));
    }, [info]);

    return (
        <div>
            {
                resident.image ? <img src={resident.image} alt="" /> : <img src={notsignal} alt="" />
            }
            <div>
                <h2>{resident.name}</h2>
                <li>
                    {
                        resident.status === 'Alive' ? (
                            <div className='status'>
                                <div className='alive' />
                                <b>{resident.status} - {resident.species}</b>
                            </div>
                        ) : resident.status === 'Dead' ? (
                            <div className='status'>
                                <div className='dead' />
                                <b>{resident.status} - {resident.species}</b>
                            </div>
                        ) : (
                            <div className='status'>
                                <div className='unknown' />
                                <b>{resident.status} - {resident.species}</b>
                            </div>
                        )
                    }
                </li>
                <li><b>Origin: </b>{resident.origin?.name}</li>
                <li><b>Episodes where apear: </b>{resident.episode?.length}</li>
            </div>
        </div>
    );
};

export default ResidentInfo;