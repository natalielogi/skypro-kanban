import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const SkeletonWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  max-width: 250px;
  height: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.03);
`;

const SkeletonLine = styled.div`
  height: ${({ $height }) => $height || "12px"};
  width: ${({ $width }) => $width || "100%"};
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgb(193, 205, 220) 0%,
    rgb(233, 238, 247) 50%,
    rgb(193, 205, 220) 100%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite;
  margin-bottom: 10px;
`;

const SkeletonCard = () => (
  <SkeletonWrapper>
    <SkeletonLine $width="60%" $height="14px" />
    <SkeletonLine $width="80%" />
    <SkeletonLine $width="40%" />
  </SkeletonWrapper>
);

export default SkeletonCard;
