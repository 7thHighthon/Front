import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: transparent;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logoimg = styled.img`
  width: 46px;
  height: 26px;
  margin-left: 140px;
  margin-right: 12px;
  cursor: pointer;
`;

export const Title = styled.p`
  height: 27px;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.p<{
  width: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: 23px;
  margin: ${(props) => props.margin};
  font-size: 20px;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: end;
`;

export const FaceBookImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 30px;
  margin-right: 30px;
`;
