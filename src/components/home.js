import logo from "./images/logo.svg";
import leave from "./images/leave.svg";
import search from "./images/search.svg";
import backArrow from "./images/back-arrow.svg";
import person1 from "./images/person1.png";
import person2 from "./images/person2.png";
import person3 from "./images/person3.png";
import person4 from "./images/person4.png";
import person5 from "./images/person5.png";
import gicon1 from "./images/gicon-1.png";
import gicon2 from "./images/gicon-2.png";
import gicon3 from "./images/gicon-3.png";
import gicon4 from "./images/gicon-4.png";
import pointer from "./images/pointer.svg";
import alert from "./images/alert.svg";
import thumbsup from "./images/thumbs-up.svg";
import pen from "./images/pen.svg";
import art1 from "./images/art1.png";
import art2 from "./images/art2.png";
import art3 from "./images/art3.png";
import ArtCard from "./art-card";
import MeetCard from "./meeting-card";
import JobCard from "./job-card";
import writebtn from "./images/write.svg";
import drpdwn from "./images/drpdwn.svg";
import addContact from "./images/add-contact.svg";
import SignUp from "./signup";
import "./styles.css";
import SignIn from "./signIn";

function Home() {
  function userLogin() {
    const page = document.querySelector("#getSignup");
    page.classList.remove("hide");
  }

  return (
    <div className="box">
      <img src={writebtn} className="write-btn" />
      <SignUp />
      <SignIn />
      <div className="desk-navbar">
        <img src={logo} />
        <div className="input">
          <img src={search} />
          <input placeholder="Search for your favorite groups in ATG" />
        </div>
        <p id="unknown" onClick={userLogin} className="">
          Create account<span>Its' Free!</span>
          <img src={drpdwn} />
        </p>
        <p id="loggedIn" className="hide">
          <img className="userImg" src={person5} />
          Siddharth Goyal
          <img src={drpdwn} />
        </p>
      </div>

      <div className="header">
        <div className="overlay">
          <div className="navigation">
            <img src={backArrow} className="back" />
            <button id="groupStat" onClick={userLogin}>
              Join Group
            </button>
          </div>
          <div className="header-info">
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>

      <div className="desktop-header">
        <div className="overlay">
          <div className="header-info">
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>

      <main className="container">
        <div className="desk-tiles">
          <div className="tabs">
            <p className="active">All Posts(368)</p>
            <p className="">Article</p>
            <p>Event</p>
            <p>Education</p>
            <p>Job</p>
          </div>
          <div className="func">
            <button className="wpst">
              Write a Post
              <img src={drpdwn} />
            </button>
            <button onClick={userLogin} className="join-leave">
              <img src={addContact} />
              Join Group
            </button>
            <button className="hide join-leave-2">
              <img src={leave} />
              Leave Group
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="tile">
              <p>Posts(368)</p>

              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter:All
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Article
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Event
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Education
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Job
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cards-list">
              <ArtCard
                artImg={art1}
                tag="✍️ Article"
                title="What if famous brands had regular fonts? Meet RegulaBrands!"
                subtitle="I’ve worked in UX for the better part of a decade. F.."
                authImg={person1}
                authName="Sarthak Kamra"
                views="1.4k views"
              />

              <ArtCard
                artImg={art2}
                tag="🔬️ Education"
                title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                subtitle="I’ve worked in UX for the better part of a decade. F.."
                authImg={person2}
                authName="Sarah West"
                views="4.8k views"
              />

              <MeetCard
                artImg={art3}
                tag="🗓️ Meetup"
                title="Finance & Investment Elite Social Mixer @Lujiazui"
                time="Fri, 12 Oct, 2018"
                location="Ahmedabad, India"
                authImg={person3}
                authName="Ronal Jones"
                views="800 views"
              />

              <JobCard
                tag="💼️ Job"
                title="Software Developer - II"
                company="Innovaccer Analytic..."
                location="Noida, India"
                authImg={person4}
                authName="Joseph Gray"
                views="1.7k views"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="loc p-4 mb-3 rounded">
                <div className="loc-input">
                  <img className="pointer" src={pointer} />
                  <input placeholder="Enter your location" />
                  <img className="pen" src={pen} />
                </div>
                <p>
                  <span>
                    <img src={alert} />
                  </span>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>

              <div className="r-groups">
                <h1>
                  <img src={thumbsup} /> Recommended Groups
                </h1>
                <div className="g-list">
                  <div className="item">
                    <img src={gicon1} />
                    <h5>Leisure</h5>
                    <p>follow</p>
                  </div>
                  <div className="item">
                    <img src={gicon2} />
                    <h5>Activism</h5>
                    <p>follow</p>
                  </div>
                  <div className="item">
                    <img src={gicon3} />
                    <h5>MBA</h5>
                    <p>follow</p>
                  </div>
                  <div className="item">
                    <img src={gicon4} />
                    <h5>Philosophy</h5>
                    <p>follow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
