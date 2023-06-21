export type GalleryState = {
  photos: Photo[];
  videos: Video[];
  details: Detail[];
  comments: Comments[];
  loading: boolean;
  error: string | null;
};

export type Photo = {
  id: string;
  src: string;
};

export type Video = {
  id: string;
  src: string;
};

export type Detail = {
  id: string;
  src: string;
  title: string;
  author: string;
  location: string;
  date: string;
  likes: number;
  comments: number;
  type: string;
};

export type Comments = {
  id: string;
  comments: CommentData[];
};

export type CommentData = {
  profileImg: string;
  username: string;
  comment: string;
  date: string;
  likes: number;
  replies: number;
};
