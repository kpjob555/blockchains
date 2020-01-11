import React from 'react';
import { get } from 'axios';

const MineBlock = ({ status, setStatus }) => {
    if (status) {
        return (
            <div>
                <button onClick={() => mineBlock()}>Mineblock</button>
            </div>
        );
    }

    return (
        <div>
            Please post something before mine the block.
        </div>
    );


    function mineBlock() {
        get('http://localhost:5003/mine_block').then(res => console.log(res)).catch(errr => console.log(errr));
        setStatus(false);
    }
}

export default MineBlock;