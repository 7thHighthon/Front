import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  width: 242px;
  height: 49px;
  margin-left: 140px;
  color: #227cff;
  font-size: 40px;
`;

export const Field = styled.p`
  width: 258px;
  height: 121px;
  margin-left: 140px;
  margin-bottom: 108px;
  color: #ffffff;
  font-size: 100px;
`;

export const TextInput = styled.input<{
  margin: string;
}>`
  width: 613px;
  height: 72px;
  padding: 18px 28px 18px 28px;
  margin: ${(props) => props.margin};
`;

export const Submit = styled.input`
  width: 673px;
  height: 72px;
  margin-left: 140px;
  margin-bottom: 28px;
  color: white;
  background-color: black;
  border: 4px solid white;
`;

export const SignUpDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 168px;
`;

export const SignUpText = styled.p`
  margin-left: 308px;
  color: white;
  font-size: 24px;
`;

export const SignUpLink = styled.p`
  margin-left: 5px;
  color: white;
  font-size: 24px;
`;

export const introTextDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const introTitle = styled.p`
  width: 156px;
  height: 44px;
  color: white;
  font-size: 36px;
  margin-left: 140px;
`;

export const introTextBold = styled.p`
  font-size: 12px;
  margin-top: 11px;
  margin-left: 5px;
  color: white;
`;

export const introTextReg = styled.p`
  font-size: 12px;
  margin-top: 11px;
  color: white;
`;

export const imgDiv = styled.div``;

export const LoginImg = styled.img`
  width: 833px;
  height: 733px;
  margin-top: 217px;
`;
