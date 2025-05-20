import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 50px;
    object-fit: contain;
    transform: translateX(30px);
  }

  .pink {
    z-index: 2;
    left: 0;
  }

  .blue {
    transform: translateX(-5px);
    z-index: 1;
  }

  .tree {
    transform: translateX(-40px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  transform: translateX(-100px);

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 400;
    font-family: "ReciaSerifDisplay", serif;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

const ShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 400px;
  }

  .shape-fill {
    fill: #ffffff;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavBar>
          <Logo>
            <img
              src="/assets/mascot/mascot.png"
              alt="부동의 첫밴드 로고1"
              className="pink"
            />
            <img
              src="/assets/mascot/1blue.png"
              alt="부동의 첫밴드 로고2"
              className="blue"
            />
            <img
              src="/assets/mascot/1tree.png"
              alt="부동의 첫밴드 로고3"
              className="tree"
            />
          </Logo>
          <NavLinks>
            <a href="#HOME">HOME</a>
            <a href="#ABOUT">ABOUT</a>
            <a href="#ARCHIVE">ARCHIVE</a>
            <a href="#CONTACT">CONTACT</a>
          </NavLinks>
        </NavBar>

        <VideoBackground autoPlay loop muted playsInline>
          <source src="/assets/visualizers/background.mp4" type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </VideoBackground>
      </HeaderContainer>

      <ShapeDivider>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <rect x="1200" height="3.6"></rect>
          <rect height="3.6"></rect>
          <path
            d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </ShapeDivider>
    </>
  );
};

export default Header;
