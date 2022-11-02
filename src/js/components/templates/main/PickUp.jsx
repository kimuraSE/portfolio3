
import { Swiper, SwiperSlide } from "swiper/react";

//swiper.css
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

//modules
import { EffectCube, Pagination, Autoplay,EffectFade } from "swiper";
import img1 from "../../../../imges/pickup/img1.jpg";
import img2 from "../../../../imges/pickup/img2.jpg";
import { useState } from "react";
import { useEffect } from "react";





export const PickUp = () => {

    const [openPickUp,setOpenPickUp]=useState(false);

    const scrollPickUpBox = (entries,observer) =>{

        entries.forEach(entry =>{

            if(entry.isIntersecting){
                setOpenPickUp(true)
                observer.unobserve(entry.target);
            }
        })
    }

    const scrollPickUpBoxOption ={
        root:null,
        rootMargin:"-30% 0px -30% 0px"
    };

    useEffect(()=>{

        const pickUpBox = document.querySelector('.pick-up-box');
        const io = new IntersectionObserver(scrollPickUpBox,scrollPickUpBoxOption);
        io.observe(pickUpBox);

    },[])

    return (

        <div className={`pick-up-box ${openPickUp ? "open-pick-up-box" : ""}`}>

            <div className="pick-up-text-area">
                <div className="text-area">
                    <div className="pickup-text">Pick up</div>
                </div>

                        <Swiper
                            className="swiper-text"
                            loop={true}
                            speed={1500}
                            autoplay={{
                                delay:4000,
                                disableOnInteraction: false
                            }}
                            effect={"fade"}
                            fadeEffect= {{
                                crossFade: true
                              }}
                            modules={[EffectFade,Autoplay]}
                        >
                            <SwiperSlide>
                                <div>美しい自然</div>
                                <span>
                                    私たちは皆様のご要望に合わせて<br />
                                    最適なプランをご用意致します
                                </span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>広大な景色</div>
                                <span>
                                    言葉に表せない心の中にある<br />
                                    願望を叶えて見せます
                                </span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>元気な町並み</div>
                                <span>
                                    一生に一度の最高な思い出を作りませんか？
                                </span>
                            </SwiperSlide>
                            
                        </Swiper>
            
                           

                <button>詳しくはこちら</button>




                <Swiper
                className="swiper-img"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    speed={1500}
                    effect={"cube"}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination, Autoplay]}

                >


                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://source.unsplash.com/PjfYuitzlXQ" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>



    )
}