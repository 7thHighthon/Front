import styled from "styled-components";

export const Wrapper = styled.div``;

export const Hr = styled.hr`
  width: 1640px;
  height: 1px;
  margin-top: 25px;
  background-color: #707070;
  border: none;
`;

export const CountForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 190px;
`;

export const FirstHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 145px;
`;

export const FirstCrown = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 28px;
`;

export const FirstName = styled.p`
  width: 835px;
  height: 61px;
  font-weight: bold;
  font-size: 50px;
  color: #000000;
`;

export const FirstImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const FirstMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 42px;
`;

export const FirstText = styled.p`
  width: 670px;
  height: 82px;
  font-weight: bold;
  font-size: 28px;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
`;

export const FirstText2 = styled.p`
  width: 670px;
  height: 75px;
  text-align: center;
  color: #707070;
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const middleRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const second = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
`;

export const third = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const middleImg = styled.img<{
  margin: string;
}>`
  width: 55px;
  height: 55px;
  margin: ${(props) => props.margin};
`;

export const middleLogo = styled.img<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

export const middleText = styled.p`
  width: 126px;
  height: 54px;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
`;

export const middleText2 = styled.p`
  width: 398px;
  height: 41px;
  text-align: center;
  font-size: 28px;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
`;

export const BottomRank = styled.div`
  width: 1364px;
  height: 800px;
  margin-left: 325px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomDiv = styled.div`
  width: 398px;
  height: 470px;
  margin-right: 55px;
  margin-bottom: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomNumber = styled.p`
  width: 75px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #227cff;
  font-size: 38px;
  margin-bottom: 25px;
`;

export const BottomImg = styled.img`
  width: 398px;
  height: 266px;
`;

export const BottomTextDiv = styled.div`
  width: 398px;
  height: 200px;
  box-shadow: 0 1px 6px gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomText = styled.p`
  width: 180px;
  height: 44px;
  font-weight: bold;
  font-size: 36px;
`;

export const Div = styled.div`
  margin-bottom: 500px;
`;
