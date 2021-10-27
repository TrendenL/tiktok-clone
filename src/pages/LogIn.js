

function LoginOption() {
  return "loginoption";
}

import db, { auth, provider } from "lib/firebase";

export default function LogIn({ setUser, setNewUser }) {
  async function signIn() {
    const data = await auth.signInWithPopup(provider);
    if (data) {
      await checkUsername(data.user.uid);
      setUser(data.user);
    }
  }

  async function checkUsername(uid) {
    const usernameRef = db.collection("usernames").where("uid", "==", uid);
    const querySnapshot = await usernameRef.get();
    setNewUser(querySnapshot.empty);
  }

  return (
    <div className="login-container">
      <header className="login-header"></header>
      <div className="login-wrapper">
        <div className="login-options-container">
          <div className="login-title-container">
            <div className="login-title">Sign up for Tiktok</div>
          </div>

          <div className="login-options">
            <LoginOption src="/email.png" text="Use phone or email" />
            <LoginOption src="/facebook.png" text="Continue with Facebook" />
            <LoginOption
              src="/google.png"
              text="Continue with Google"
              onClick={signIn}
            />
            <LoginOption src="/twitter.png" text="Continue with Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}
