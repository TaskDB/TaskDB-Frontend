import { StaticImageData } from "next/image";

export type dynamicRouteType = string | string[] | undefined;

export interface IndividualBoardPropsType {
  boardId: dynamicRouteType;
}

export interface LinePropsType {
  width: string;
}

export interface AuthorPropsType {
  profilePicture: string | StaticImageData;
  nickname: string;
}

export interface CommentsDataType {
  content: string;
}

export interface ReplyEditorContentType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  boardId: dynamicRouteType;
}
