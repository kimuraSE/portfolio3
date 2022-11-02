import { useEffect } from "react";
import { useState } from "react"

export const News =() =>{

    const [openNewsFlg,setOpenNewsFlg]=useState(false);

    const scollNewsBox = (entries,observer) =>{

        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setOpenNewsFlg(true)
                observer.unobserve(entry.target);
            }
        })
    }

    const scollNewsBoxOption ={
        root:null,
        rootMargin:"-50% 0px -50% 0px"
    }

    useEffect(()=>{

        const newsBox = document.querySelector('.news-box');
        const io = new IntersectionObserver(scollNewsBox,scollNewsBoxOption);
        io.observe(newsBox);
    },[])


    return (

        <div className={`news-box ${openNewsFlg ? "open-news" : ''}`}>

            <div className="news-text">
                News
            </div>

            <div className="news-details-box">

                <div className="newsroom">
                    ニュースルーム
                </div>

                <div className="details">

                    <ul>
                        <li>
                            <span className="a">2022/3/7</span>
                            <span className="b">登録者数1万人突破</span>
                        </li>

                        <li>
                            <span className="a">2022/2/4</span>
                            <span className="b">Amazonギフト券配布について</span>
                        </li>

                        <li>
                            <span className="a">2021/9/20</span>
                            <span className="b">事業立ち上げ報告</span>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}