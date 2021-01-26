import React, { Component } from 'react';
import { Header, Footer } from '../components';
import  DisplayPromo  from '../components/DisplayPromo'
import { PromolistContent } from '../styled-components/pages/promolist';
import { PageWrapper, ContentWrapper } from '../styled-components/global';


class Promolist extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <PromolistContent>
                  <DisplayPromo/>
                </PromolistContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Promolist;
