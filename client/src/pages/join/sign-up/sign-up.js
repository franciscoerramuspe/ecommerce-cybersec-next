import Link from "next/link"
import styles from "./sign-up.module.scss"
import { JoinLayout } from "@/layouts/JoinLayout/JoinLayout"
import {RegisterForm} from "@/components/Auth";

function SignUpPage() {
  return (
    <>
    <JoinLayout>
     <div className={styles.signIn}>
        <h3>Create account</h3>
        <RegisterForm />

        <div className={styles.actions}>
          <Link href="/join/sign-in">
            Go back
          </Link>
        </div>
    </div>
    </JoinLayout>
    </>
   
  )
}

export default SignUpPage