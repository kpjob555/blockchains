import React, { useState } from 'react';
import { post } from 'axios';
import { TextField, Button } from '@material-ui/core';
import { uid } from 'react-uid';

const defaultValue = {
    sender: "",
    receiver: "",
    amount: 0,
    age: 0,
    name: "",
    bloodtype: "",
    weight: 0,
    height: 0,
    bloodglucoselevels: 0,
}

const styles = {
    textField: {
        margin: '10px',
    }
}

const SendData = ({ setStatus }) => {
    const [inform, setInfom] = useState(defaultValue);
    const allInput = [
        { label: 'Sender', name: 'sender', value: inform.sender, type: 'text' },
        { label: 'Receiver', name: 'receiver', value: inform.receiver, type: 'text' },
        { label: 'Amount', name: 'amount', value: inform.amount, type: 'number' },
        { label: 'Name', name: 'name', value: inform.name, type: 'text' },
        { label: 'Age', name: 'age', value: inform.age, type: 'number' },
        { label: 'Bloodtype', name: 'bloodtype', value: inform.bloodtype, type: 'text' },
        { label: 'Weight', name: 'weight', value: inform.weight, type: 'number' },
        { label: 'Height', name: 'height', value: inform.height, type: 'number' },
        { label: 'Blood Glucose', name: 'bloodglucoselevels', value: inform.bloodglucoselevels, type: 'number' },
    ];

    return (
        <div>

            {allInput.map(({ label, name, value, type }) => (
                <div style={styles.textField} key={uid(name)}>
                    <TextField name={name} value={value} onChange={setData} type={type} label={label} variant="outlined" />
                </div>
            ))}
            <Button onClick={() => postData()} >Post</Button>
        </div>
    );

    function setData(event) {
        const data = event.target.value;
        setInfom({
            ...inform,
            [event.target.name]: data
        })

    }

    function postData() {
        post('http://localhost:5003/add_medicalhistory', inform).then(res => console.log('Post: ', res)).catch(err => console.log(err));
        setInfom(defaultValue);
        setStatus(true);
    }

}

export default SendData;

