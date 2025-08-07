import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStatus from "../VoteStatus/VoteStatus";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStatus />
      <Notification />
    </div>
  );
}

export default App;
