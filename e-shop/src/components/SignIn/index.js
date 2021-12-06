import './styles.scss'
import {Component} from 'react';
import FormInput from '../../components/FormInput';
import CustomButton from '../CustomButton';

import { signInWithGoogle } from '../../firebase/utils';


class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',

    }

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password:''})

  }

  handleChange = event => {
    const {value, name} = event.target

    this.setState({[name]: value})
  }

  render ( )  {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email"
            label="email"
            handleChange={this.handleChange} 
            value={this.state.email} 
            required 
          />
          <FormInput 
            name="password" 
            type='password'
            label="password"
            value={this.state.password} 
            handleChange={this.handleChange} 
            required  
          />
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton>
        </form>
      </div>


    )
  }
}

export default SignIn; 