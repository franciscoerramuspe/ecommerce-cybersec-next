import styles from "./sign-in.module.scss"
import Link from "next/link";
import { LoginForm } from "@/components/Auth";
import { JoinLayout } from "@/layouts";
function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Sign in</h3>


        <LoginForm />

        <div className={styles.actions}>
          <Link href="/join/sign-up">
             Don't have an account? Sign up!
          </Link>
        </div>
      </div>
      </JoinLayout>
    </>
  )
}

export default SignInPage;