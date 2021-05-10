import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'reactstrap';

const LoginModal = () => {
    const [modal, setModal] = useState(false);
    const [localMsg, setLocalMsg] = useState('');
    const [form, setValues] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const { errorMsg } = useSelector((state: any) => state.auth);
};

export default LoginModal;