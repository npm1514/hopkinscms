import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { PromoformContent } from '../styled-components/pages/promoform';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import  CreatePromo  from '../components/CreatePromo';

class Promoform extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PromoformContent>
                  <CreatePromo/>
                </PromoformContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Promoform;
