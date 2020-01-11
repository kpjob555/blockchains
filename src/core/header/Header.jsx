import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Typography, TextField } from '@material-ui/core';

import Display from '../../components/displayChains/DisplayChains';
import InputData from '../../components/sendData/SendData';
import Mine from '../../components/mine/Mineblock';


const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const Header = ({ status, setStatus, url, setUrl }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Blocks" {...a11yProps(0)} />
                    <Tab label="Input" {...a11yProps(1)} />
                    <Tab label="Mine" {...a11yProps(2)} />
                    <Tab label="Setting" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Display url={url} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InputData setStatus={setStatus} url={url} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Mine status={status} setStatus={setStatus} url={url} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div>Set Your URL to fetch data...</div>
                <TextField value={url} onChange={(event) => setUrl(event.target.value)} variant="filled" label="End point URL" />
            </TabPanel>

        </div>
    );
}

export default Header;