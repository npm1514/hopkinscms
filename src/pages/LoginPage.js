import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSbmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value)
    event.preventDefault()
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
