import * as React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import Palette from "../../lib/Palette";
import { Link } from "react-router-dom";

// 제공해드린 Button 컴포넌트는 인터페이스가 살짝 바뀔수 있습니다.

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 5;

  color: white;
  background: ${Palette.gray[8]};
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  overflow: hidden;
  .rightBox {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .rightlast {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .userBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    padding-left: 0.5rem;
  }
  .logo {
    font-family: "Times New Roman", Times, serif;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;

    @media screen and (max-width: 375px) {
      width: 5rem;
    }
  }
  .vr {
    height: 100%;
    border: 1px solid ${Palette.gray[7]};
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 7.5rem;
`;

const UserInfoWrap = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  margin-top: 0.2rem;
`;

const Header = ({ data, onLogout }) => {
  const knowHowData = data;

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            PetBook
          </Link>
          <div className="rightBox">
            <UserInfoWrap>
              <span>
                {knowHowData
                  ? knowHowData.data.username + " 님, 안녕하세요 !"
                  : "PetBook 에 오신것을 환영합니다 !"}
              </span>
            </UserInfoWrap>

            <div className="vr"></div>

            {knowHowData ? (
              knowHowData.data.username === "admin" ? (
                <div className="userBox">
                  <div className="userImgBox">
                    <Button>프로필자리</Button>
                  </div>
                  <Button onClick={onLogout}>로그아웃</Button>
                  <div className="rightlast">
                    <Button to="/admin">관리자 페이지</Button>
                  </div>
                </div>
              ) : (
                <div className="userBox">
                  <div className="userImgBox">
                    <Button>프로필자리</Button>
                  </div>
                  <Button onClick={onLogout}>로그아웃</Button>
                </div>
              )
            ) : (
              <div className="buttonBox">
                <Button to="/login">로그인</Button>
                <Button to="/register">회원가입</Button>
              </div>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
