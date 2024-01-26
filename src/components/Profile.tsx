import Style from '../style/components/Profile.module.css'

export function Profile() {
  return (
    <div className={Style.profileContainer}>
        <img src="https://github.com/Wallison-Greg.png" alt="foto perfil" />
        <div>
            <strong>Wallison Gregorio</strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level : 1
            </p>
        </div>
    </div>
  )
}
