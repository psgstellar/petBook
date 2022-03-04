import Header from "../components/common/Header";
import WelcomeReact from "../components/WelcomeReact";

const MainPage = ({ isLoading, error, data }) => {
  // 추후 컨테이너 컴포넌트들로 변경
  return (
    <>
      <Header data={data} />
      <WelcomeReact isLoading={isLoading} error={error} data={data} />
    </>
  );
};

export default MainPage;
