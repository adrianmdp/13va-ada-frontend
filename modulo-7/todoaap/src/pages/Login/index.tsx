import { useState } from "react";
import { useAuth } from "../../hooks";

const Login = () => {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const auth = useAuth()

  const handleSubmit = (e: any) => {
      e.preventDefault()
      auth.login(user, pass)
  }


  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">User</label>
        <input type="email" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
    <div>
        <label htmlFor="">Pass</label>
        <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} />
    </div>
    <button>Iniciar sesión</button>
</form>
  )
};

export { Login };
