import './styles.scss'
import {Component} from 'react';
import FormInput from '../../components/FormInput';
import CustomButton from '../CustomButton';

import { auth, signInWithGoogle } from '../../firebase/utils';


class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',

    }

  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password:''})

    } catch (error){

      console.log('error');
    }


    

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
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>


    )
  }
}

export default SignIn; 