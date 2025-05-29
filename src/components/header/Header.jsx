import React, { useState, useRef, useEffect } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
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
import { Link } from "react-router-dom";

const Header = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);
  const modalref = useRef(null);

  const userName = localStorage.getItem("userName") || "Пользователь";

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
          <LogoLinkLight as={Link} to="/">
            <img src="images/logo.png" alt="logo" />
          </LogoLinkLight>
          <LogoLinkDark as={Link} to="/">
            <img src="images/logo_dark.png" alt="logo" />
          </LogoLinkDark>
          <Nav>
            <BtnMainNew onClick={() => setIsNewTaskVisible(true)}>
              Создать новую задачу
            </BtnMainNew>
            <UserLink onClick={toggleUserModal}>{userName}</UserLink>
            {isUserVisible && (
              <PopUser
                ref={modalref}
                onClose={closeModal}
                userName={userName}
              />
            )}
          </Nav>
        </HeaderBlock>
      </Container>
      {isNewTaskVisible && (
        <PopNewCard onClose={() => setIsNewTaskVisible(false)} />
      )}
    </Headerwrapper>
  );
};

export default Header;
