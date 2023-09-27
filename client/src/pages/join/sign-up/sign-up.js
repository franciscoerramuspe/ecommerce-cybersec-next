import styles from "./sign-up.module.scss"
import { JoinLayout } from "@/layouts/JoinLayout/JoinLayout"

function SignUpPage() {
  return (
    <>
    <JoinLayout>
     <div className={styles.signUp}>
        <h3>Create account</h3>
    </div>
    </JoinLayout>
    </>
   
  )
}

export default SignUpPage