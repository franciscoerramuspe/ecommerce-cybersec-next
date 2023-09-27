import styles from "./sign-in.module.scss"
import { JoinLayout } from "@/layouts";
function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Sign in</h3>
      </div>
      </JoinLayout>
    </>
  )
}

export default SignInPage;