import React from "react";
import MainPage from "./pages/MainPage";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import knowHowReq from "./lib/api/knowHowAPI";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("data", () => {
    return knowHowReq.get("/3");
  });

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage isLoading={isLoading} error={error} data={data} />}
      />
      {/*<Route path="/find" element={<FindFriendPage />} /> */}
      {/*<Route path="/knowhow/" element={<KnowHowListPage />} />*/}
      {/*<Route path="/knowhow/@:username/:knowHowPostId" element={<KnowHowPage />} />*/}
      {/*<Route path="/emergency" element={<EmergencyPage />} />*/}
      {/*<Route path="/hospital" element={<HospitalListPage />} />*/}
      {/*<Route path="/hospital/:locationId" element={<HospitalPage />} />*/}
      {/*<Route path="/salesinfo" element={<SalesInfoListPage />} />*/}
      {/*<Route path="/salesinfo/@:username/:saleId" element={<SalesInfoListPage />} />*/}
      {/*<Route path="/login" element={<LoginPage />} />*/}
      {/*<Route path="/register" element={<RegisterPage />} >*/}
      {/*<Route path="/profile/@:username" element={<ProfilePage />} />*/}
      {/*<Route path="/write/@:username" element={<WritePage />} />*/}
    </Routes>
  );
}

export default App;
