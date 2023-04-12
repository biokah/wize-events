import setAccent from "../utils/setAccent";
import CategoryTitle from "./CategoryTitle";
import LargeCard from "./LargeCard";

const MainMatch = ({
  title,
  contenders,
  winner,
  onSelectWinner,
  status = "pending",
  onCancel,
  matchWinner = '0'
}) => {
  const cancelButton = onCancel ? (
    <button className="cancelButton" onClick={onCancel} title="Revoke result">
      X
    </button>
  ) : (
    ""
  );
  const matchContenders = contenders.map((contender) => {
    const accent = setAccent({ status, winner, contender, matchWinner });
    return (
      <LargeCard
        category={contender}
        handleClick={onSelectWinner}
        accent={accent}
        key={contender._id}
      />
    );
  });
  return (
    <div>
      <CategoryTitle title={title} cancelButton={cancelButton} size="large" />
      <div className="large-card__wrapper grid gap-4">{matchContenders}</div>
    </div>
  );
};

export default MainMatch;
