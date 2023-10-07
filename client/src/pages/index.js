import { Button } from "semantic-ui-react"
import { useAuth } from "@/hooks"




const index = () => {

  const { user, logout } = useAuth();
  return (
    <>
      <div>
        <h2>Games shop</h2>
        <Button primary>
          Login
        </Button>

        {user ? (
          <div>
            <p>Hi, {user.firstname}</p>
            <Button onClick={logout}>Log out</Button>
          </div>
        ) : (
          <div>
            <a href="/join/sign-in">
              Log in
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default index