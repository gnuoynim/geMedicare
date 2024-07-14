import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const LnbWrap = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > li {
    color: #111;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 2vh 1.5vw;
    margin: 0 2.5vw;
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
    .inquiry {
      color: #fff;
      padding: 14px 40px;
      border-radius: 99px;
      background: #00b3ba;
    }
  }
`;

const SubDep = styled.div`
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
  padding: 20px 40px;
  margin: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  li {
    cursor: pointer;
    white-space: nowrap;
    font-size: 24px;

    div {
      color: #111;

      font-family: Pretendard;
      font-size: 24px;
      padding: 10px 20px;
    }
    &:hover {
      background: rgba(0, 179, 186, 0.1);
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
      e.preventDefault(); // 기본 이벤트 방지
      navigate(path);
    } else {
      // path가 없으면 footer로 스크롤
      window.scrollTo({
        top: document.getElementById('footer').offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const focusRef = useRef(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();  // 포커스 설정
    }
  }, []);
  const menuItems = [
    {
      name: "회사소개",
      submenu: [
        { name: "가온메디케어", path: "/about?tab=0" },
        { name: "인사말", path: "/about?tab=1" },
      ],
    },
    {
      name: "제품정보",
      submenu: [
        { name: "산소발생기", path: "/ProductInfo?tab=1" },
        { name: "인공호흡기", path: "/ProductInfo?tab=3" },
        { name: "기타제품 및 악세서리", path: "/ProductInfo?tab=4" },
        /*"인공호흡기", "기타제품 및 악세서리"*/
      ],
    },
    {
      name: "임대방법",
      submenu: [
        { name: "산소발생기 임대방법", path: "/rent?tab=0" },
        { name: "인공호흡기 임대방법", path: "/rent?tab=1" },
        { name: "산소치료 관련질환안내", path: "/rent?tab=2" },
      ],
    },
    { name: "자료실", submenu: [{ name: "임대후기", path: "/Reference" }] },
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
