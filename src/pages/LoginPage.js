import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Login extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LoginContent>
                  login page
                </LoginContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Login;
