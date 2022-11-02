import React from "react";
import { Container } from "../templates/container/Container";
import { GlobalContainer } from "../templates/container/GlobalContainer";
import { HeaderTag } from "../templates/container/HeaderTag";
import { HeaderDesktop } from "../templates/header/HeaderDesktop";
import { HeaderMobile } from "../templates/header/HeaderMobile";
import {MainTag} from "../templates/container/MainTag";
import { ArticleTag } from "../templates/container/ArticleTag";
import {SectionTag} from "../templates/container/SectionTag"
import { Swiper1 } from "../templates/main/swiper/Swiper1";
import { Note } from "../templates/main/Note";
import { PickUp } from "../templates/main/PickUp";
import { News } from "../templates/main/News";
import { FooterTag } from "../templates/container/FooterTag";
import { Footer } from "../templates/footer/Footer";
import { LookMore } from "../templates/main/LookMore";



export const Home = () => {

    return (
    
        <GlobalContainer>
            <HeaderTag className="header-desktop">
                <HeaderDesktop />
            </HeaderTag>
            <HeaderTag className="mobile-desktop">
            <HeaderMobile />
            </HeaderTag>
            
            <Container>

                <MainTag>
                    <ArticleTag>

                        <SectionTag className="swiper-area">
                          <Swiper1 />
                        </SectionTag>

                        <SectionTag className="note-area">
                            <Note />
                        </SectionTag>

                        <SectionTag className="pick-up-area">
                            <PickUp />
                        </SectionTag>

                        <SectionTag className="news-area">
                            <News />
                        </SectionTag>

                        <SectionTag className="look-more-area">
                            <LookMore />
                        </SectionTag>

                    </ArticleTag>

                </MainTag>
                

            </Container>

            <FooterTag>
                <Footer />
            </FooterTag>
            
        </GlobalContainer>
    )
}
