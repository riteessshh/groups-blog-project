import cross from "./images/cross.svg";
import cross2 from "./images/cross2.svg";
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import eye from "./images/eye.svg";
import loginImg from "./images/login-img.svg";
import "./styles.css";

function SignIn() {
  function closePage() {
    const page = document.querySelector("#signin-page");
    page.classList.add("hide");
  }
  function goToSignUp() {
    const signUpPage = document.querySelector("#getSignup");
    signUpPage.classList.remove("hide");
    const page = document.querySelector("#signin-page");
    page.classList.add("hide");
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
        <div id="signin-page" className="hide overlay">
          <div className="mobile">
            <div className="head">
              <h1>Welcome Back!</h1>
              <img onClick={closePage} src={cross2} />
            </div>
            <div className="input-section">
              <input placeholder="Email" />
              <div className="pw-view">
                <input placeholder="Password" />
                <img src={eye} />
              </div>
              <div className="buttons">
                <button onClick={userCreated} style={{ width: "150px" }}>
                  Sign In
                </button>
                <p onClick={goToSignUp}>or, Create Account</p>
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
            <h5 style={{ fontWeight: "500" }}>Forget Password?</h5>
          </div>

          <div className="desktop">
            <img onClick={closePage} src={cross} />
            <h5>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h5>
            <div className="head">
              <h1>Sign In</h1>
              <p>
                Don’t have an account yet?
                <span onClick={goToSignUp}> Create new for free!</span>
              </p>
            </div>
            <div className="box">
              <div className="filling">
                <div className="input-section">
                  <input placeholder="Email" />
                  <div className="pw-view">
                    <input placeholder="Password" />
                    <img src={eye} />
                  </div>
                  <div className="buttons">
                    <button onClick={userCreated}>Sign In</button>
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
                <h5
                  style={{
                    background: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Forget Password?
                </h5>
              </div>
              <div className="login-img">
                <img src={loginImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
