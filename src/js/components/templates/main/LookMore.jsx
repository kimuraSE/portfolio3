import { useEffect, useState } from 'react'


export const LookMore = () =>{
    const [isVisible, setIsVisible] = useState(false);


    const scrollLookMore = (entries,observer) =>{

        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        })
        
    }

    const scollLookMoreOption ={
        root:null,
        rootMargin:"0px 0px -20% 0px"
    }

    useEffect(()=>{
        const lookMoreBox = document.querySelector('.look-more-box');
        const io = new IntersectionObserver(scrollLookMore,scollLookMoreOption);
        io.observe(lookMoreBox);
    },[])

   

    return (

        <div className={`look-more-box ${isVisible ? "open-look-more" : ""}`}>
            <a class="btn cubic"><span class="hovering">Look more</span><span class="default">もっと見る</span></a>
        </div>
    )
}