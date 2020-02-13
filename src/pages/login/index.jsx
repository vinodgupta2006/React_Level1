import React from 'react';
import PropTypes from 'prop-types';
import LoginView from './LoginComponent';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoginSuccess: true,
        }
    }

    componentDidMount(){
        document.body.classList.add('login__img');
    }

    onChange = ( event ) => {
        const { value, name } = event.currentTarget;
        this.setState( { [ name ]: value } );
    }

    onHandleLogin = () => {
        const { email, password } = this.state
        const isValidEmail = this.onValidation(email)
        const isValidPsw = this.onValidation(password)
        if(isValidEmail && isValidPsw){
            document.body.classList.remove('login__img');
            window.localStorage.setItem('_TOKEN', true);
            this.props.goToPage("/dashboard")
        }
    }

    onValidation(value){
        if(value){
            return true;
        } else{
            return false;
        }
    }

    render(){
        return(
            <>
                <LoginView
                    onChange={this.onChange}
                    onClick={this.onHandleLogin} 
                />
            </>
        )
    }


}

Login.propTypes = {
    onHandleLogin: PropTypes.func,
    onChange: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    isLoginSuccess: PropTypes.bool,
}

export default Login;