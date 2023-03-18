import { getArticlesFetch } from "../../api/requests";
import { getArticlesAction } from "./actionCreators";

export function getArticles() {
  return (dispatch) => {
    getArticlesFetch().then(([articlesErr, articles]) => {
      if (articles) {
        dispatch(getArticlesAction(articles.data));
      } else {
        console.log(articlesErr);
        alert("Getting articles error");
      }
    });
  };
}
