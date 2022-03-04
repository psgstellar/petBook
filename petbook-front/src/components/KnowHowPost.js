import React from "react";
import styled from "styled-components";

const KnowHowPostWrap = styled.div`
  margin-top: 2rem;
  border-top: 1px solid;
  font-size: 1rem;

  #KnowhowNotice {
    font-size: 1.75rem;
  }
`;

const KnowHowPost = ({ isLoading, error, data }) => {
  if (isLoading) return "로딩중...";
  if (error) return "에러 발생!";

  const { title, body, knowHowId, wrDate } = data.data;

  return (
    <KnowHowPostWrap>
      <p id="KnowhowNotice">
        아래 데이터는 Node.js 서버와의 연동을 테스트 하기 위한 데이터 입니다.
      </p>
      <header className="Knowhow-header">
        {knowHowId}. {title}
      </header>
      <main className="Knowhow-body">
        <p>{body}</p>
        <span>게시물 작성시간 : {wrDate}</span>
      </main>
    </KnowHowPostWrap>
  );

  /*
    react-query 미적용시 axios와 useEffect, useState로 작성한 코드입니다
    위의 코드가 더 좋습니다,,
    이건 사기야,,,, 말도 안됍니다

  const getProjectData = async () => {
    const res = await req.get("/3");
    const data = res.data;

    console.log("res", res);
    console.log("data", data);

    if (res.status === 200) {
      setData(data);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  const [data, setData] = useState("");

  return (
    <ProjectWrap>
      <p>
        아래 데이터는 Node.js 서버와의 연동을 테스트 하기 위한 데이터 입니다.
      </p>
      {data ? (
        <ProjectCard>
          <header className="Project-header">
            ({data.processStatus}) {data.title}
          </header>
          <section className="Project-section">
            <p>About : {data.section.about}</p>
            <div>구성원 : ({data.section.people})</div>
            <p>진행 기간 : {data.section.schedule}</p>
          </section>
          <main className="Project-body">
            <p>{data.body} 첨부</p>
            <span>게시물 작성시간 : {data.wrDate}</span>
          </main>
        </ProjectCard>
      ) : (
        "로딩중..."
      )}
    </ProjectWrap>
  );
  */
};

export default KnowHowPost;
