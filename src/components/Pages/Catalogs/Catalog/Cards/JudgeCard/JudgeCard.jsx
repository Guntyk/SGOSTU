import AvatarPlaceholder from "../../../../../../common/AvatarPlaceholder/AvatarPlaceholder";
import { Link, useHistory } from "react-router-dom";
import "./JudgeCard.css";
import "../../Catalog.css";

export default function JudgeCard({ judge, classes, screenWidth }) {
  const { push } = useHistory();

  function handleClick() {
    if (screenWidth <= 840) {
      push(`/catalogs/judges/${judge.id}`);
    }
  }
  return (
    <div className="catalog-card judge-card" onClick={handleClick}>
      <div className="img-wrapper">
        {judge["Foto Judges"]?.url ? (
          <img src={judge["Foto Judges"]?.url} alt="Аватар" />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
      <h5 className="card-name">{judge["Name Surname"]}</h5>
      <span className="judge-class">
        {classes
          .filter(
            (judgeClass) =>
              classes.indexOf(judgeClass) + 1 ===
              Number(judge["Assigned Category Judge"].at(-1))
          )
          .at(-1)
          .Category.trim()}
      </span>
      <Link className="card-details" to={`./judges/${judge.id}`}>
        Детальніше
      </Link>
    </div>
  );
}
