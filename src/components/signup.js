import cross from "./images/cross.svg";
import cross2 from "./images/cross2.svg";
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import eye from "./images/eye.svg";
import loginImg from "./images/login-img.svg";
import "./styles.css";

function SignUp() {
  function closePage() {
    const page = document.querySelector("#getSignup");
    page.classList.add("hide");
  }
  function goToSignin() {
    const signUpPage = document.querySelector("#getSignup");
    signUpPage.classList.add("hide");
    const page = document.querySelector("#signin-page");
    page.classList.remove("hide");
  }
  function userCreated() {
    const grpStat = document.querySelector("#groupStat");
    grpStat.innerHTML = "Leave Group";
    const newAccount = document.querySelector("#unknown");
    newAccount.classList.add("hide");
    const account = document.querySelector("#loggedIn");
    account.classList.remove("hide");
    const joinBtn = document.querySelector(".join-leave");
    joinBtn.classList.add("hide");
    const leaveBtn = document.querySelector(".join-leave-2");
    leaveBtn.classList.remove("hide");
  }

  return (
    <>
      <div className="login-box">
        <div id="getSignup" className="overlay hide">
          <div className="mobile">
            <div className="head">
              <h1>Create account</h1>
              <img onClick={closePage} src={cross2} />
            </div>
            <div className="input-section">
              <div className="name">
                <input placeholder="First Name" />
                <input placeholder="Last Name" />
              </div>
              <input placeholder="Email" />
              <div className="pw-view">
                <input placeholder="Password" />
                <img src={eye} />
              </div>
              <input placeholder="Confirm Password" />
              <div className="buttons">
                <button onClick={userCreated}>Create Account</button>
                <p onClick={goToSignin}>or, sign In</p>
              </div>
            </div>
            <div className="social-login">
              <p>
                <img src={facebook} />
                Sign up with Facebook
              </p>
              <p>
                <img src={google} />
                Sign up with Google
              </p>
            </div>
            <h5>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </h5>
          </div>

          <div className="desktop">
            <img onClick={closePage} src={cross} />
            <h5>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h5>
            <div className="head">
              <h1>Create account</h1>
              <p>
                Already have an account?{" "}
                <span onClick={goToSignin}>Sign In</span>
              </p>
            </div>
            <div className="box">
              <div className="filling">
                <div className="input-section">
                  <div className="name">
                    <input placeholder="First Name" />
                    <input placeholder="Last Name" />
                  </div>
                  <input placeholder="Email" />
                  <div className="pw-view">
                    <input placeholder="Password" />
                    <img src={eye} />
                  </div>
                  <input placeholder="Confirm Password" />
                  <div className="buttons">
                    <button onClick={userCreated}>Create Account</button>
                  </div>
                </div>
                <div className="social-login">
                  <p>
                    <img src={facebook} />
                    Sign up with Facebook
                  </p>
                  <p>
                    <img src={google} />
                    Sign up with Google
                  </p>
                </div>
              </div>
              <div className="login-img">
                <img src={loginImg} />
                <h5>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
