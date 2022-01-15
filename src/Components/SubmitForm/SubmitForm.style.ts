import styled from "styled-components";

export const SubmitFormBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 140px;
  padding-top: 128px;
  padding-bottom: 106px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SubmitFormTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubmitFormTitle = styled.h1`
  color: black;
  font-size: 100px;
  text-align: start;
  font-weight: bold;
`;

export const SubmitFormGuideText = styled.p`
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  color: #707070;
  strong {
    color: #227cff;
  }
`;

export const SubmitFormSubTitle = styled.h2`
  color: #227cff;
  font-size: 40px;
  text-align: start;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SubmitFormLine = styled.hr`
  width: 100%;
  margin: 36px 0px;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 100%;
  border-left: 12px solid #227cff;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 36px;
  padding-right: 48px;
`;

export const InputWrapRow = styled.div`
  display: flex;
  margin-bottom: 32px;
  column-gap: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  input[type="file"] {
    display: none;
  }
`;

export const InputTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-family: "Noto Sans KR", sans-serif;

  strong {
    color: #227cff;
  }
`;

export const InputTextInput = styled.input`
  width: 536px;
  height: 60px;
  border: 1px solid #707070;
  background-color: white;
  cursor: pointer;
  padding: 14px 22px;
  box-sizing: border-box;
  outline: none;
  border-radius: 10px;
  font-size: 22px;
  font-family: "Noto Sans KR", sans-serif;

  &:hover {
    border: 1px solid #227cff;
  }
`;

export const InputFileInputLableWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFileInputLable = styled.label`
  width: 132px;
  height: 60px;
  background-color: white;
  border: 1px solid #707070;
  border-radius: 10px;
  font-size: 22px;
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  &:hover {
    border: 1px solid #227cff;
    color: #227cff;
  }
`;

export const InputFileInputLableText = styled.p`
  font-size: 22px;
  color: #707070;
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 12px;
`;

export const SubmitFormSaveButton = styled.button`
  width: 168px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfbfbf;
  border: 0px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: auto;
  margin-left: auto;
  border-radius: 10px;
  color: white;
  font-size: 22px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const SubmitFormSubmitButton = styled.button`
  width: 168px;
  height: 60px;
  background-color: #227cff;
  border: 0px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: auto;
  margin-left: 12px;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    border: 1px solid #227cff;
    color: #227cff;
    background-color: white;
  }
`;
