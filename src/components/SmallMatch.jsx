import setAccent from "../utils/setAccent";
import CategoryTitle from "./CategoryTitle";
import SmallCard from "./SmallCard";

const SmallMatch = ({
  title,
  contenders,
  status = "pending",
  winner,
  onSelectWinner,
  onCancel,
  matchWinner = '0'
}) => {
  const cancelButton = onCancel  && winner ? (
    <button className="cancelButton" onClick={onCancel} title="Revoke result">
      X
    </button>
  ) : (
    ""
  );
  const matchContenders = contenders.map((contender) => {
    const accent = setAccent({ status, winner, contender, matchWinner });
    return (
      <SmallCard
        category={contender}
        handleClick={onSelectWinner}
        key={contender._id}
        accent={accent}
      />
    );
  });

  return (
    <div>
      <CategoryTitle title={title} cancelButton={cancelButton} size="small" />
      <div className="small__category grid gap-3">{matchContenders}</div>
    </div>
  );
};

export default SmallMatch;
