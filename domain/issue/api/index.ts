import instance from "../../../lib/instance";

export const getAllIssueData = async () => {
  try {
    const { data } = await instance.get("/question");
    return data.data;
  } catch (error) {
    throw error;
  }
};
