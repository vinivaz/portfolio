// Assets
import logo_wallpaper from "/logo_wallpaper.svg";

// Styles
import styles from "./Login.module.css";

// Hooks
import { useEffect, useState } from 'react';
import { useAuthentication } from "../../Hooks/useAuthentication";

const Login = ({setAuthPage}) => {

  const style = {
    backgroundImage: `url(${logo_wallpaper})`,
    backgroundRepeat: "repeat",
    backgroundSize: "100px",
    backgroundPosition: "center"
  }

  const [ userData, setUserData ] = useState({
    email: "",
    password: ""
  })

  const { login, error } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!userData.email || ! userData.email){
      return
    }
    await login(userData)
  }

  return (
    <div style={style} className={styles.login}>
      <form onSubmit={handleSubmit}>
        <h2>Insira seus dados para poder entrar.</h2>

        <input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          value={ userData.email || ""}
          autoComplete="email"
        />
        <input
          placeholder="Senha"
          type="password"
          onChange={(e) => setUserData({...userData, password: e.target.value})}
          value={ userData.password || ""}
          autoComplete="current-password"
        />
        <button>Enviar</button>
        {error && <p className="error">{error}</p>}

        <div className="change_auth_page">
          <span onClick={() => setAuthPage("register")}>Criar conta.</span>
        </div>
      </form>


    </div>
  )
}

export default Login