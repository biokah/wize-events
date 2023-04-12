import setAccent from "../utils/setAccent";
import CategoryTitle from "./CategoryTitle";
import MediumCard from "./MediumCard";

const MediumMatch = ({
  title,
  contenders,
  winner,
  onSelectWinner,
  status = 'pending',
  onCancel,
  matchWinner = '0'
}) => {
  const cancelButton = onCancel && winner ? (
    <button className="cancelButton" onClick={onCancel} title="Revoke result">
      X
    </button>
  ) : (
    ""
  );
  const matchContenders = contenders.map((contender) => {
    const accent = setAccent({ status, winner, contender, matchWinner });
    return (
      <MediumCard
        category={contender}
        handleClick={onSelectWinner}
        key={contender._id}
        accent={accent}
      />
    );
  });

  return (
    <div>
      <CategoryTitle title={title} cancelButton={cancelButton} size="large" />
      <div className="medium-card__wrapper">{matchContenders}</div>
    </div>
  );
};

export default MediumMatch;
