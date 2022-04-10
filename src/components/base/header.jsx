import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Button from "./button";

const Header = (props) => {
  const { allStrapiHomePage } = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiHomePage {
        nodes {
          Logo {
            localFile {
              url
            }
          }
        }
      }
    }
  `);
  let info = allStrapiHomePage.nodes[0];

  const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #808080;
    padding-bottom: 12px;
  `;

  const HeaderLogo = styled.img`
    margin-top: 18px;
    cursor: pointer;
    padding: 8px;
    border: 2px solid #162831;
    border-radius: 50%;
    transition: all 0.5s;
    &:hover {
      border-color: white;
    }
  `;

  const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 51px;
    font-size: 14px;
    line-height: 13px;
    font-weight: 400;
    min-width: 655px;
    max-height: 20px;
  `;

  const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
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
      <Link to="/">
        <HeaderLogo src={info.Logo.localFile.url} alt="Logo" />
      </Link>
      <HeaderNav>
        <NavLink to="/">Главная</NavLink>
        <NavLink>Сеансы</NavLink>
        <NavLink>Отзывы</NavLink>
        <NavLink>Контакты</NavLink>
        <NavLink to="/news">Новости</NavLink>
        <NavLink>О нас</NavLink>
        <NavLink to="/blog">Блог</NavLink>
      </HeaderNav>
      <BookingBtn>
        <Button text="Записаться на сеанс" />
      </BookingBtn>
    </HeaderInner>
  );
};

export default Header;
