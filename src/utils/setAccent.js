const setAccent = ({status, winner, contender, matchWinner}) => {
  const isPending = status === 'pending';
  const isWinner = status === 'won';
  const isLoser = status === 'lost';
  const isSelected = winner == contender._id;
  if (isSelected) {
    if (isPending) return 'selected';
    if (isLoser) return 'loser';
    if (isWinner) return 'winner';
  }
  else if (matchWinner === contender._id) {
    return 'realWinner';
  }
  else return '';
}

export default setAccent;