import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const SubDep = styled.div`
  display: none;
  width: 200px;
  height: 150px;
  position: absolute;
  background-color: transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const Submenu = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  list-style: none;
  padding: 30px 20px;
  margin: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: -2px 4px 30px 0px rgba(139, 138, 138, 0.25);
  li {
    cursor: pointer;
    white-space: nowrap;
    font-size: 20px;
    div {
      color: #111;
      font-family: Pretendard;
      font-size: 20px;
      padding: 10px 20px;
    }
    &:hover a {
      color: #00b3ba;
    }
  }
`;

const LnbWrap = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  padding-right: 24px;
  > li {
    color: #111;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 1.5vh 1.5vw;
    white-space: nowrap;
    position: relative;
    cursor: pointer;

    &:nth-of-type(1) {
      margin: 0;
    }
    &:nth-last-child(1) {
      border-radius: 99px;
      background: #00b3ba;
      a {
        color: #fff;
      }
    }
    &:hover ${SubDep} {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111;
`;

const Lnb = () => {
  const navigate = useNavigate();
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const handleLinkClick = (e, path) => {
    if (path) {
      e.preventDefault();
      navigate(path);
    } else {
      window.scrollTo({
        top: document.getElementById("footer").offsetTop,
        behavior: "smooth",
      });
    }
  };

  const focusRef = useRef(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const menuItems = [
    {
      name: "회사소개",
      submenu: [
        { name: "가은메디케어", path: "/about?tab=0" },
        { name: "인사말", path: "/about?tab=1" },
      ],
    },
    {
      name: "제품정보",
      submenu: [
        { name: "가정용 산소발생기", path: "/ProductInfo?tab=1" },
        { name: "가정용 인공호흡기", path: "/ProductInfo?tab=3" },
        { name: "기타제품 및 액세서리", path: "/ProductInfo?tab=4" },
      ],
    },
    {
      name: "임대 방법",
      submenu: [
        { name: "산소발생기 임대방법", path: "/rent?tab=0" },
        { name: "인공호흡기 임대방법", path: "/rent?tab=1" },
        { name: "산소치료 관련질환안내", path: "/rent?tab=2" },
        { name: "인공호흡기 관련질환안내", path: "/rent?tab=3" },
      ],
    },
    {
      name: "자료실",
      submenu: [
        { name: "임대후기", path: "/reference?tab=0" },
        { name: "자주 묻는질문", path: "/reference?tab=1" },
      ],
    },
    { name: "문의하기", submenu: [] },
  ];

  const handleMouseEnter = (index) => {
    setOpenSubmenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenSubmenuIndex(null);
  };

  return (
    <div>
      <LnbWrap className="lnbWrap">
        <li>
          <StyledLink to="/">
            <img src={logo} alt="logo" />
          </StyledLink>
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <StyledLink
              to={item.path || "#"}
              onClick={(e) => handleLinkClick(e, item.path)}
            >
              {item.name}
            </StyledLink>
            <SubDep>
              {item.submenu.length > 0 && (
                <Submenu isOpen={openSubmenuIndex === index}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <div className="subWrap">
                        <StyledLink to={subItem.path}>
                          {subItem.name === "사용방법(동영상링크)" ? (
                            <>
                              사용방법
                              <br />
                              (동영상링크)
                            </>
                          ) : (
                            subItem.name
                          )}
                        </StyledLink>
                      </div>
                    </li>
                  ))}
                </Submenu>
              )}
            </SubDep>
          </li>
        ))}
      </LnbWrap>
    </div>
  );
};

export default Lnb;
