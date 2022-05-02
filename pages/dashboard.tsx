import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Bloc } from "../components/Bloc";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <>
        <Bloc>
          <h3>Dashboard</h3>
        </Bloc>
        <Bloc>
          <h3>Dashboard</h3>
        </Bloc>
      </>
    </Layout>
  );
};

export default Dashboard;
