import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Wrap = styled.div`
    width:1440px;max-width:100%;margin:0 auto;padding:30px 20px;display:flex;align-items:center;justify-content:space-between;
    & .logo{
        & .link{font-size:24px;font-weight:600;background:linear-gradient(#ff2b2b, #c9c149);-webkit-text-fill-color:transparent;-webkit-background-clip:text;}
    }
    & .lists{
        display:flex;align-items:center;column-gap:30px;list-style:none;margin:0;padding:0;
        & .list{
            & .link{
                font-size:16px;font-weight:500;color:#111;
                &.active,
                &:hover{background:linear-gradient(#ff2b2b, #c9c149);-webkit-text-fill-color:transparent;-webkit-background-clip:text;}
            }
            & .btn{font-size:16px;font-weight:500;height:38px;color:#FFF;background:linear-gradient(#52fff4,#2d2c61);display:flex;align-items:center;justify-content:center;padding:0 25px;border-radius:5px;}
        }
    }
`;
const Header = ({page}) => {
    return (
        <Wrap>
            <div className="logo">
                <Link to={"/"} className="link">React.api</Link>
            </div>
            <ul className="lists">
                <li className="list"><Link to={"/"} className={page === "home" ? "link active" : "link"}>Home</Link></li>
                <li className="list"><Link to={"/users"} className={page === "user" ? "link active" : "link"}>Users</Link></li>
                <li className="list"><Link to={"/posts"} className={page === "blog" ? "link active" : "link"}>Blog</Link></li>
                <li className="list"><Link to={"/login"} className={page === "login" ? "link active" : "link"}>Login</Link></li>
                <li className="list"><Link to={"/register"} className="btn">Sign Up</Link></li>
            </ul>
        </Wrap>
    );
}
export default Header;