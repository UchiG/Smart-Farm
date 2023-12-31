import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";


function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value)
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('email was sent')
    } catch (error) {
      toast.error('could not send reset email')
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p>Forgot password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">
              Send Reset Link
            </div>
            <button className="signInButton">
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
