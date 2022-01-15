import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 128px 140px;
  box-sizing: border-box;
  position: relative;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: auto;
`;

export const FaceBookDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  position: absolute;
  top: 90px;
  right: 30px;
  background: none;
`;

export const FaceBookImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

export const SignUpTitle = styled.h1`
  text-align: start;
  font-size: 100px;
  color: white;
  font-weight: bold;
  margin-bottom: 108px;
`;

export const SignUpSubTitle = styled.h2`
  text-align: start;
  font-size: 40px;
  color: #227cff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TextSubmit = styled.input<{
  margin: string;
}>`
  width: 573px;
  height: 32px;
  padding: 18px 28px;
  font-size: 24px;
  font-weight: regular;
  font-family: "Noto Sans KR", sans-serif;
  margin: ${(props) => props.margin};
`;

export const Submit = styled.input`
  width: 633px;
  height: 72px;
  color: white;
  background-color: black;
  border: 4px solid white;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 28px;
  font-size: 24px;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const TextDiv = styled.div`
  width: 633px;
  height: 26px;
  display: flex;
  justify-content: center;
  margin-bottom: 118px;
`;

export const SignUpText1 = styled.p`
  color: white;
  font-size: 24px;
`;
export const SignUpText = styled.p`
  color: white;
  font-size: 24px;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const HighthonDiv = styled.div`
  width: 440px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HighthonText = styled.p`
  color: white;
  font-size: 36px;
  margin-right: 8px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Highthon = styled.p`
  color: white;
  font-size: 12px;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 17px;
`;

export const ImgDiv = styled.div`
  width: 833px;
  height: 733px;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const LoginImg = styled.img`
  width: 100%;
`;
