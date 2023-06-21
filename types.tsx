import { COMMENT_SCREEN, GALLERY_DETAIL_SCREEN, MAIN_STACK } from "./src/routes/app.routes";

export type RootStackParamList = {
  [MAIN_STACK]: undefined;
  [COMMENT_SCREEN]: undefined;
  [GALLERY_DETAIL_SCREEN]: undefined;
};

export type RootTabParamList = {
  homeTab: undefined;
  authorsTab : undefined;
};