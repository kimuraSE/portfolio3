import img1 from "../../../../imges/nav-icon/img1.png";
import img2 from "../../../../imges/nav-icon/img2.png";
import img3 from "../../../../imges/nav-icon/img3.png";
import img4 from "../../../../imges/header-icon/img4.png";
import { useContext } from "react";
import { ClassContext } from "../../../provider/ClassProvider";


export const HeaderMobile = () => {

    const {menuOpenFlag,setMenuOpenFlag}=useContext(ClassContext);

    const onClickAddMenuOpen = () =>{
        setMenuOpenFlag(!menuOpenFlag);
    }


    return (
        <>
            <div className="mobile-header-area">

                <div className="header-logo-box">
                    <div className="header-logo-main">example</div>
                    <div className="header-logo-sub">project</div>
                </div>

                <div onClick={onClickAddMenuOpen} className="header-btn-box">
                    <button>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div>

            <div className="mobile-header-nav-area">
                <nav>
                    <ul>
                        <li className="li-text"><a href="">会社概要</a></li>
                        <li className="li-text"><a href="">事業内容</a></li>
                        <li className="li-text"><a href="">採用</a></li>
                        <li className="li-text"><a href="">ニュース</a></li>
                        <div className="nav-icon-box">

                            <li>
                                <img src={img1} alt="" />
                                <div>お問い合わせ</div>
                            </li>
                            <li>
                                <img src={img2} alt="" />
                                <div>製品サポート</div>
                            </li>
                            <li>
                                <img src={img3} alt="" />
                                <div>JA</div>
                            </li>

                        </div>
                    </ul>
                </nav>

                <div className="input-area">
                    <div>
                        <input placeholder="Input area" />
                        <img src={img4} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}