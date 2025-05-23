import React, { useState, useRef, useEffect, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const modalref = useRef(null);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const userName = user?.name || "Пользователь";

  const handleCreateTaskClick = () => {
    navigate("/add-task");
  };

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
            <BtnMainNew id="btnMainNew" onClick={handleCreateTaskClick}>
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
    </Headerwrapper>
  );
};

export default Header;
