import React from "react";
import styled from "styled-components";
import { IFooterMenu } from "../../interfaces/Footer.interface";

const FooterBox = styled.footer`
  display: flex;
  gap: 10rem;
  padding: 10rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

const FooterMenu = styled.div`
  p {
    font-weight: 500;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a:link,
  a:active,
  a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accentOne};
  }
`;

// const Footer;

const footerMenu: Array<IFooterMenu> = [
  {
    title: "Discover",
    links: [
      { title: "About us", link: "/" },
      { title: "Takeaway", link: "/" },
      { title: "More", link: "/" },
      { title: "Giftcards", link: "/" },
      { title: "Career", link: "/" },
      { title: "Restaurant signup", link: "/" },
      { title: "Become a rider", link: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms and conditions", link: "/" },
      { title: "Privacy", link: "/" },
      { title: "Cookies", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { title: "Contact", link: "/" },
      { title: "FAQs", link: "/" },
      { title: "Cuisines", link: "/" },
      { title: "Brands", link: "/" },
    ],
  },
  {
    title: "Take Deliverlik with you",
    links: [
      { title: "Apple Store", link: "/" },
      { title: "Play Market", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <FooterBox>
      {footerMenu.map((item) => (
        <FooterMenu key={item.title}>
          <p>{item.title}</p>
          <ul>
            {item.links?.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </FooterMenu>
      ))}
    </FooterBox>
  );
};

export default Footer;
