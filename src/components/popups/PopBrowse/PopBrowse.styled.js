import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  text-align: left;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  background-color: ${({ $bg }) => $bg || "#eee"};
  color: ${({ $color }) => $color || "#000"};
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const SubTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: block;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ $gray }) => ($gray ? "#fff" : "#94a6be")};
  background: ${({ $gray }) => ($gray ? "#94a6be" : "transparent")};
  padding: 11px 14px 10px;
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  height: 200px;
  outline: none;
  padding: 14px;
  background: ${({ readOnly }) => (readOnly ? "#eaeef6" : "#ffffff")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;

  &::placeholder {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
    line-height: 1px;
    letter-spacing: -0.14px;
  }

  @media (max-width: 495px) {
    height: 37px;
  }
`;

export const CategoryBlock = styled.div`
  margin: 20px 0;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 495px) {
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 495px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ButtonBorder = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  background: transparent;
  color: #565eef;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const ButtonPrimary = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
