//components
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

//style
import Style from '../style/pages/Home.module.css'

export default function Home() {
  return (
    <div className={Style.App}>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div></div>
      </section>
    </div>
  );
}
