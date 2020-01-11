import React, { useState, useEffect } from 'react';
import { get } from 'axios';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, CircularProgress } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DisplayChains = ({ url }) => {
    const [blockData, setBlockData] = useState();

    useEffect(() => {
        getBlocks(url)
    }, [url]);

    if (url === '') {
        return <div>Please input URL to fetch data in Setting...</div>
    }

    return (
        <div>
            <Button onClick={() => getBlocks(url)} >Refresh</Button>

            <div>
                {blockData !== undefined ? <>{blockData.map(({ index, medicalhistorys, previous_hash, timestamp }) => (
                    <ExpansionPanel key={index}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            Block No.{index}</ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>Parent Hash: {previous_hash}</div>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            Time: {timestamp}
                        </ExpansionPanelDetails>

                        {medicalhistorys.map((data, id) => (
                            <ExpansionPanel key={id}>
                                <ExpansionPanelSummary
                                    style={{ backgroundColor: '#E0E0E0' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >Sender: {data.sender}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>Receiver: {data.receiver}</ExpansionPanelDetails>
                                <ExpansionPanelDetails>Name: {data.name}</ExpansionPanelDetails>
                                <ExpansionPanelDetails>Amount: {data.amount}</ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}

                    </ExpansionPanel>
                ))} </> : <div><CircularProgress color="secondary" /></div>}
            </div>
        </div>
    );

    function getBlocks(link) {
        get(`${link}/get_chain`).then(response => {
            setBlockData(response.data.chain);
        }).catch(err => console.log(err)
        )
    }
}

export default DisplayChains;