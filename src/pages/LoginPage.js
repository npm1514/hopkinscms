import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import userModel from '../models/userModel';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value)
    event.preventDefault()

    userModel.login({
      email
    }).then(data => {
      if (!data.user) {
        console.log('Login unsuccessful')
        return false
      }
    })
  }

  

  

    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LoginContent>
                  <form onSubmit={this.handleSubmit}>
                    <label>Email:
                      <input type="email" value={this.state.value} onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                </LoginContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Login;
