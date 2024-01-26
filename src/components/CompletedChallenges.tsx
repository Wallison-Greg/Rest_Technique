import Style from '../style/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <div className={Style.completedChallengesContainer}>
        <span>Desafios Completos</span>
        <span>5</span>
    </div>
  )
}
