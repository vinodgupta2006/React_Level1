import React from 'react';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login.scss'

const loginView = (props) =>{
    const { email, password, onChange, onClick } = props;

    return(
        <div className="bg">
            <div className="text-block">
                <div className="heading">Seat Management Login</div>
                <Form>
                    <Input type="text" name="email" value={ email } placeholder="Email" className="className" onChange={onChange} />
                    <Input type="password" name="password" value={ password } placeholder="Password" className="className" onChange={onChange} />
                    <Button variant="primary" className="mx-auto d-block" name="Login" onClick={onClick} />
                </Form>
            </div>
        </div>
    );
}

export default loginView;