import React, { useState, useEffect } from 'react';
import { get } from 'axios';

const DisplayChains = () => {
    const [blockData, setBlockData] = useState();

    useEffect(() => {
        getBlocks()
    }, []);

    console.log(blockData);

    return (
        <div>
            <button onClick={() => getBlocks()} >Re Fetch</button>
            {blockData !== undefined ? <>{blockData.map(({ index, medicalhistorys, previous_hash, timestamp }) => (
                <div key={index}>
                    <div>Block ID : {index}</div>
                    <div>Parent Hash: {previous_hash}</div>
                    <div>Time: {timestamp}</div>
                    <div>Data: {medicalhistorys.map((data, id) => (
                        <div key={id}>Amount: {data.amount}</div>
                    ))}</div>
                    -----
                </div>
            ))} </> : null}
        </div>
    );

    function getBlocks() {
        get('http://localhost:5003/get_chain').then(response => {
            setBlockData(response.data.chain);
        }).catch(err => console.log(err)
        )
    }
}

export default DisplayChains;