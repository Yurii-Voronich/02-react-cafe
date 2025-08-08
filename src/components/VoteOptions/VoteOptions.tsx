import css from "./VoteOptions.module.css";
import type { VotesType } from "../../types/votes";
interface VoteOptionsProps {
  handleVote: (type: VotesType) => void;
  resetVote: () => void;
  canReset: boolean;
}
function VoteOptions({ handleVote, resetVote, canReset }: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button className={css.button} onClick={() => handleVote("good")}>
          Good
        </button>
        <button className={css.button} onClick={() => handleVote("neutral")}>
          Neutral
        </button>
        <button className={css.button} onClick={() => handleVote("bad")}>
          Bad
        </button>
        {canReset && (
          <button className={`${css.button} ${css.reset}`} onClick={resetVote}>
            Reset
          </button>
        )}
      </div>
    </>
  );
}

export default VoteOptions;
