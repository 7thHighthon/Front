import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import useAdminDetail from "../../../Hook/Admin/useAdminDetail";
import { AdminDetailData } from "../../../Store/AdminAtom";
import {
  AdminBackButton,
  AdminButtonWrap,
  AdminCompleteButton,
  AdminDetailBox,
  AdminDetailLoader,
  AdminDetailWrap,
  AdminText,
  AdminTextTitle,
  AdminTextWrap,
  AdminTextWrapColumn,
} from "./AdminDetail.style";

const AdminDetail: React.FC<{ idx: string }> = ({ idx }) => {
  const history = useHistory();
  const { loadDetail, isLoading, passDetail } = useAdminDetail();
  const [detail, setDetail] = useRecoilState(AdminDetailData);

  useEffect(() => {
    loadDetail(idx);
  }, []);

  return (
    <AdminDetailBox>
      <AdminDetailWrap>
        {isLoading ? (
          <AdminDetailLoader />
        ) : (
          <>
            {detail && (
              <>
                <AdminTextWrapColumn>
                  <AdminTextWrap>
                    <AdminTextTitle>팀 구성원</AdminTextTitle>
                    <AdminText>{detail.submitProjectPerson}</AdminText>
                  </AdminTextWrap>
                  <AdminTextWrap>
                    <AdminTextTitle>프로젝트명</AdminTextTitle>
                    <AdminText>{detail.submitProjectName}</AdminText>
                  </AdminTextWrap>
                  <AdminTextWrap>
                    <AdminTextTitle>Github organization</AdminTextTitle>
                    <AdminText>
                      {detail.gitHubURL === "" ? "정보없음" : detail.gitHubURL}
                    </AdminText>
                  </AdminTextWrap>
                  <AdminTextWrap>
                    <AdminTextTitle>시연 영상</AdminTextTitle>
                    <AdminText>
                      <a href={detail.videoURL}>시연영상 다운로드</a>
                    </AdminText>
                  </AdminTextWrap>
                </AdminTextWrapColumn>
                <AdminTextWrapColumn>
                  <AdminTextWrap>
                    <AdminTextTitle>팀명</AdminTextTitle>
                    <AdminText>{detail.teamName}</AdminText>
                  </AdminTextWrap>
                  <AdminTextWrap>
                    <AdminTextTitle>홈페이지 URL</AdminTextTitle>
                    <AdminText>
                      {detail.homePageURL === ""
                        ? "정보없음"
                        : detail.homePageURL}
                    </AdminText>
                  </AdminTextWrap>
                  <AdminTextWrap>
                    <AdminTextTitle>PPT</AdminTextTitle>
                    <AdminText>
                      <a href={detail.ppturl}>피피티 다운로드</a>
                    </AdminText>
                  </AdminTextWrap>
                </AdminTextWrapColumn>
                <AdminButtonWrap>
                  <AdminBackButton onClick={() => history.push("/admin")}>
                    뒤로 가기
                  </AdminBackButton>
                  <AdminCompleteButton onClick={() => passDetail(idx)}>
                    심사 완료
                  </AdminCompleteButton>
                </AdminButtonWrap>
              </>
            )}
          </>
        )}
      </AdminDetailWrap>
    </AdminDetailBox>
  );
};

export default AdminDetail;
