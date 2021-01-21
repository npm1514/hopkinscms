import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import userModel from '../models/userModel';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  
  

    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LoginContent>
                  <LoginForm/>
                </LoginContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Login;
