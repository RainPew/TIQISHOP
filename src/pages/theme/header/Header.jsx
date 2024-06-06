import React, { memo } from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaUserAlt } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import "./style.scss"
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div className='header__top'>
            <div className='container'>
                <div className='row'>
                    <div className="col-6 header__top_left">
                        <ul>
                            <li><CgMail /> hoanghuunhanh.rain@gmail.com</li>
                            <li>Miễn phí ship hàng</li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebookSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaInstagramSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaSquareThreads />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaUserAlt />
                                </Link>
                                <span>Đăng Nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);