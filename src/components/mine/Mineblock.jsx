import React from 'react';
import { get } from 'axios';
import WidgetsIcon from '@material-ui/icons/Widgets';

const styles = {
    text: {
        fontSize: '16px',
        marginTop: '20px',
    }
}

const MineBlock = ({ status, setStatus, url }) => {
    if (status) {
        return (
            <div style={styles.text}>
                <button onClick={() => mineBlock()}><WidgetsIcon /></button>
            </div>
        );
    }

    return (
        <div style={styles.text}>
            Please post something before mine the block.
        </div>
    );


    function mineBlock() {
        get(`${url}/mine_block`).then(res => console.log(res)).catch(errr => console.log(errr));
        setStatus(false);
    }
}

export default MineBlock;