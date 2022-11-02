import img1 from "../../../../imges/header-icon/img1.png";
import img2 from "../../../../imges/header-icon/img2.png";
import img3 from "../../../../imges/header-icon/img3.png";
import img4 from "../../../../imges/header-icon/img4.png";
import img5 from "../../../../imges/header-icon/img5.png";
import img6 from "../../../../imges/header-icon/img6.png";





export const HeaderDesktop = () =>{

    return (

        <div className="header-desktop-area">

            <div className="header-title-box">
                <div className="header-title-main">example</div>
                <div className="header-title-sub">project</div>
            </div>

            <div className="header-nav-box">
                <nav>
                    <ul>
                        <li>
                            <a href="">会社概要</a>
                            <div className="hover-point"></div>
                        </li>

                        <li><a href="">事業内容</a>
                        <div className="hover-point"></div>
                        </li>

                        <li><a href="">採用</a>
                        <div className="hover-point"></div>
                        </li>

                        <li><a href="">ニュース</a>
                        <div className="hover-point"></div>
                        </li>

                        <div className="header-nav-logo">
                            <img className="black-img" src={img1} alt="" />
                            <img  className="red-img" src={img4} alt="" />
                        <div className="hover-point"></div>
                        </div>
                        <div className="header-nav-logo">
                            <img className="black-img" src={img2} alt="" />
                            <img className="red-img" src={img5} alt="" />
                        <div className="hover-point"></div>
                        </div>
                        <div className="header-nav-logo">
                            <img className="black-img" src={img3} alt="" />
                            <img className="red-img" src={img6} alt="" />
                        <div className="hover-point"></div>
                        </div>

                    </ul>
                </nav>
            </div>

        </div>
    )
}