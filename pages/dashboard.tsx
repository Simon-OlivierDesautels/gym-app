import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Bloc } from "../components/Bloc";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Bloc>
        <h1>Dashboard</h1>
      </Bloc>
    </Layout>
  );
};

export default Dashboard;
