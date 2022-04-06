import * as React from "react";
import styled from "styled-components";

const Footer = (props) => {
  const FooterInner = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    padding: 30px 0;
    border-top: 1px solid #808080;
  `;

  return (
    <FooterInner>
      <div>© 2018-2022 RitmStyle</div>
      <div>Сделано d-e-n.info</div>
    </FooterInner>
  );
};

export default Footer;
