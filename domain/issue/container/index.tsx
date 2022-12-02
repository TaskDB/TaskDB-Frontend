import React from "react";
import type { NextPage } from "next";
import { IssueWrapper } from "./index.style";
import IndividualIssue from "../components/indiviualIssue";
import { getAllIssueData } from "../api";
import { IndividualIssueType } from "../interface";
const IssueContainer: NextPage<{ param?: string }> = ({ param }) => {
  const [allIssueData, setAllIssueData] =
    React.useState<IndividualIssueType[]>();

  React.useEffect(() => {
    getAllIssueData(param).then((response) => {
      setAllIssueData(response);
    });
  }, [param]);

  return (
    <IssueWrapper>
      {allIssueData?.map((data, idx) => {
        return <IndividualIssue key={idx} issueData={data} />;
      })}
    </IssueWrapper>
  );
};
export default IssueContainer;
