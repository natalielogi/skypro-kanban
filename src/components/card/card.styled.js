import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
  cursor: pointer;
`;

export const Cards = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const topicclassName = {
  "Web Design": {
    background: "#FFE4C2",
    color: "#FF6D00",
  },
  Research: {
    background: "#B4FDD1",
    color: "#06B16E",
  },
  Copywriting: {
    background: "#E9D4FF",
    color: "#9A48F1",
  },
  default: {
    background: "#eee",
    color: "#333",
  },
};

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  background-color: ${({ $topic }) =>
    topicclassName[$topic]?.background || topicclassName.default.background};
  color: ${({ $topic }) =>
    topicclassName[$topic]?.color || topicclassName.default.color};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  background: #2e4765;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 4px 10px;
  position: absolute;
  z-index: 99;
  top: 30px;
  right: 0;
  font-size: 12px;
  white-space: nowrap;
  transition: opacity 0.15s;
`;

export const BtnWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitile = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
