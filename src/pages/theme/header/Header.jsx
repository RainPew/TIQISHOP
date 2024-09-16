import React, { memo, useState } from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaUserAlt } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.scss"
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [menus, setMenus] = useState([
        {
            name: "Home",
            path: ""
        },
        {
            name: "Product",
            path: ""
        },
        {
            name: "Store",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "HOME",
                    path: ""
                },
                {
                    name: "Product",
                    path: ""
                },
                {
                    name: "Product",
                    path: ""
                }
            ]
        },
        {
            name: "Posts",
            path: ""
        }, {
            name: "Contact",
            path: ""
        }
    ])
    return (
        <>
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
                                    <Link to={"profile"}>
                                        <FaUserAlt />
                                    </Link>
                                    <span>Đăng Nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>TiQiShop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>1.000.000 VND</span>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);