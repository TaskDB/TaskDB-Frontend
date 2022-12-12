import instance from "../../../lib/instance";
import { dynamicRouteType, IndividualBoardType } from "../interface";

export const getBoardData = async (
  boardId: dynamicRouteType
): Promise<IndividualBoardType> => {
  try {
    const { data } = await instance.get(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postComment = async (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  try {
    const { data } = await instance.post(
      `/comment/${boardId}/new`,
      commentsData
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAdopt = async (boardId: number) => {
  try {
    const { data } = await instance.put(`/answer/${boardId}/adopt`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReply = async (
  boardId: dynamicRouteType,
  answerData: { content: string }
) => {
  try {
    const { data } = await instance.post(`/answer/${boardId}/new`, answerData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleComment = (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  postComment(boardId, commentsData)
    .then((_) => {
      alert("댓글 작성이 완료되었습니다.");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("댓글 작성에 실패하였습니다.");
    });
};

export const handleReply = (
  boardId: dynamicRouteType,
  commentsData: { content: string }
) => {
  postReply(boardId, commentsData)
    .then((_) => {
      alert("답변 작성이 완료되었습니다.");
      location.reload();
    })
    .catch((_) => {
      alert("답변 작성에 실패하였습니다.");
    });
};

export const handleAdopt = async (boardId: number) => {
  putAdopt(boardId)
    .then((_) => {
      alert("채택되었습니다.");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const putComment = async (boardId: number) => {
  try {
    const { data } = await instance.put(`/comment/${boardId}/edit`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (boardId: number) => {
  try {
    const { data } = await instance.delete(`/comment/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putAnswer = async (boardId: number) => {
  try {
    const { data } = await instance.put(`/answer/${boardId}/edit`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnswer = async (boardId: number) => {
  try {
    const { data } = await instance.delete(`/answer/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
