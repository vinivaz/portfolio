// Assets
import logo_wallpaper from "/logo_wallpaper.svg";

// Styles
import styles from "./Register.module.css";

// Hooks
import { useState } from 'react';
import { useAuthentication } from "../../Hooks/useAuthentication";

const Register = ({setAuthPage}) => {

  const style = {
    backgroundImage: `url(${logo_wallpaper})`,
    backgroundRepeat: "repeat",
    backgroundSize: "100px",
    backgroundPosition: "center"
  }

  const [ userData, setUserData ] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { createUser, error} = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!userData.email || ! userData.email || !userData.name){
      return
    }
    await createUser(userData)
  }

  return (
    <div style={style} className={styles.register}>
      <form onSubmit={handleSubmit}>
        <h2>Crie sua conta.</h2>

        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setUserData({...userData, name: e.target.value})}
          value={ userData.name || ""}
          autoComplete="name"
        />

        <input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          value={ userData.email || ""}
          autoComplete="email"
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setUserData({...userData, password: e.target.value})}
          value={ userData.password || ""}
          autoComplete="current-password"
        />
        <button>Enviar</button>
        {error && <p className="error">{error}</p>}
        <div>
          <span onClick={() => setAuthPage("login")}>Entrar na conta existente</span>
        </div>
      </form>
    </div>
  )
}

export default Register