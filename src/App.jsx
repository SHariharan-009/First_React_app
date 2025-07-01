import { useState } from "react"



function App() {


  const [email, setEmail] = useState("")
  const [password, SetPassword] = useState("")
  console.log("email", email)
  console.log("password", password)

  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password
    }
    console.log("data", data)
  }

  return (
    <>
      <div style={styles}  >
        <input
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=" Enter Password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="bg-primary mt-3">Submit</button>
      </div>
    </>
  )
}

export default App
