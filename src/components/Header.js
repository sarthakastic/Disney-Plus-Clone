import React from "react";
import styled from "styled-components";

function Header() {
  return( <Nav>
    <Logo src="/images/logo.svg" />
    <NavMenu>
        <a href="">
            <img src="/images/home-icon.svg"/>
            <span>Home</span>
        </a>
        <a href="">
            <img src="/images/search-icon.svg"/>
            <span>Search</span>
        </a>

        <a href="">
            <img src="/images/watchlist-icon.svg"/>
            <span>WatchList</span>
        </a>

        <a href="">
            <img src="/images/original-icon.svg"/>
            <span>originals</span>
        </a>

        <a href="">
            <img src="/images/movie-icon.svg"/>
            <span>movies</span>
        </a>
        <a href="">
            <img src="/images/series-icon.svg"/>
            <span>series</span>
        </a>

        

    </NavMenu>
    <UserImg  src="/images/profilepic.jpg"  />
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
width: 80px;
`;


const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  

  a{
    display: flex;
    text-decoration: none;
    color: white;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

   
    img{
        height: 20px;
    }
    span{
        font-size: 14px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        position: relative;

        &:after{
            content:"";
            height: 2px;
            background: white;
            position: absolute;
            left: 0%;
            right: 0%;
            bottom: -6px;
            opacity: 0;
            transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover{
        span:after{transform:scaleX(1);
        opacity:1;
    }
    }
  }
  /* @media  (max-width:860px){
        a{
        display: none;
        }
    } */
  
`;


const UserImg= styled.img`
width: 48px;
height: 48px;
border-radius: 50%;

`