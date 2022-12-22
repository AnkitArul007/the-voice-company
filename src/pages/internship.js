import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Cohort from "../components/Cohort";
import CopywritingBasics from "../components/CopywritingBasics";

export default function Internship() {
  return (
    <Layout>
      <h1>This is the internship page</h1>
      <Button></Button>
      <Cohort></Cohort>
      <CopywritingBasics></CopywritingBasics>
    </Layout>
  );
}
