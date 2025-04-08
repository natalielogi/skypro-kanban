import React, { useState, useRef, useEffect } from "react";
import PopUser from "../popups/PopUser/PopUser";
import {
  Headerwrapper,
  Container,
  HeaderBlock,
  LogoLinkLight,
  LogoLinkDark,
  Nav,
  BtnMainNew,
  UserLink,
} from "./Header.styled";

const Header = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const modalref = useRef(null);

  const toggleUserModal = (e) => {
    e.preventDefault();
    setIsUserVisible((prev) => !prev);
  };

  const closeModal = () => {
    setIsUserVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isUserVisible &&
        modalref.current &&
        !modalref.current.contains(event.target)
      ) {
        setIsUserVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserVisible]);

  return (
    <Headerwrapper>
      <Container>
        <HeaderBlock>
          <LogoLinkLight href="" target="_self">
            <img src="images/logo.png" alt="logo" />
          </LogoLinkLight>
          <LogoLinkDark href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </LogoLinkDark>
          <Nav>
            <BtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </BtnMainNew>
            <UserLink href="#user-set-target" onClick={toggleUserModal}>
              Ivan Ivanov
            </UserLink>
            {isUserVisible && <PopUser ref={modalref} onClose={closeModal} />}
          </Nav>
        </HeaderBlock>
      </Container>
    </Headerwrapper>
  );
};

export default Header;
