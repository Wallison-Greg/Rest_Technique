import Style from '../style/components/Countdown.module.css';

export function Countdown() {
  return (
    <div>
        <div className={Style.countdownContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </div>
        <button type='button' className={Style.countdownButton}>Iniciar um Ciclo</button>
    </div>
  )
}
