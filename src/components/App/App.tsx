import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStatus from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes, VotesType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VotesType) => {
    setVotes({ ...votes, [type]: votes[type] + 1 });
  };

  const resetVote = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalvotes = votes.good + votes.bad + votes.neutral;
  const positiveRate = totalvotes
    ? Math.round((votes.good / totalvotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        handleVote={handleVote}
        resetVote={resetVote}
        canReset={totalvotes > 0 ? true : false}
      />
      {totalvotes > 0 ? (
        <VoteStatus
          votes={votes}
          totalvotes={totalvotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
