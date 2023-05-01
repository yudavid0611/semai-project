import Axios from "../_utils/Axios";
import OHTAllResult from "../components/DashboardPage/OHTAllResult";
import OHTCheck from "../components/DashboardPage/OHTCheck";
import OHTResult from "../components/DashboardPage/OHTResult";
import OHTTransition from "../components/DashboardPage/OHTTransition";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: any }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const checkId = params.checkId;
  let checkResult;

  await Axios.get(`${BASE_URL}dashboard/main/${checkId}`).then(response => {
    checkResult = response.data.data;
  });

  return [checkResult];
}

const MainGrid = styled.section`
  display: grid;
  width: 100%;
  height: calc(100vh - 60px);
  grid-template-rows: 34% 34% 32%;
  grid-template-columns: 70% 30%;
`;

function DashboardPage() {
  const checkResult: any = useLoaderData();

  return (
    <MainGrid>
      <OHTResult data={checkResult[0]} />
      <OHTCheck />
      <OHTTransition />
      <OHTAllResult />
    </MainGrid>
  );
}

export default DashboardPage;
