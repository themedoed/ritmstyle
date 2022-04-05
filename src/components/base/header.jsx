import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./button";

const Header = (props) => {

    
  const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const HeaderLogo = styled.img`
    margin-top: 18px;
    cursor: pointer;
    padding: 8px;
    border: 2px solid #162831;
    border-radius: 50%;
    transition: all .5s;
    &:hover{
        border-color: white;
    }
  `;

  const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 51px;
    font-size: 14px;
    line-height: 13px;
    min-width: 655px;
    max-height: 20px;
  `;

  const NavLink = styled(Link)`
    border-bottom: 2px solid #162831;
    padding-bottom: 3px;
    transition: all 0.5s;
    &:hover {
      border-bottom: 2px solid white;
      cursor: pointer;
    }
  `;

  const BookingBtn = styled.div`
    margin-top: 40px;
  `;

  return (
    <HeaderInner>
      <HeaderLogo src={props.logo} alt="Logo" />
      <HeaderNav>
        <NavLink>Главная</NavLink>
        <NavLink>Сеансы</NavLink>
        <NavLink>Отзывы</NavLink>
        <NavLink>Контакты</NavLink>
        <NavLink>Новости</NavLink>
        <NavLink>Обо мне</NavLink>
        <NavLink>Блог</NavLink>
      </HeaderNav>
      <BookingBtn>
        <Button text="Записаться на сеанс" />
      </BookingBtn>
    </HeaderInner>
  );
};

export default Header;
