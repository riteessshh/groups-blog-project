import calender from "./images/calender.svg";
import pointer from "./images/pointer.svg";
import dot from "./images/menu-dot.svg";
import sharebtnbig from "./images/share-btn-big.svg";
import "./styles.css";

function MeetCard(props) {
  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <img src={props.artImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="tag">{props.tag}</p>
          <div className="head">
            <h5 className="card-title">{props.title}</h5>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={dot} alt="menu" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="time-loc">
            <p>
              <img src={calender} alt="calender" />
              {props.time}
            </p>
            <p>
              <img src={pointer} alt="loction icon" />
              {props.location}
            </p>
          </div>
          <button style={{ color: "red" }}>Visit Website</button>
          <div className="author_info">
            <img src={props.authImg} alt="author image" />
            <div className="name_views">
              <h3>{props.authName}</h3>
              <p>{props.views}</p>
            </div>
            <img src={sharebtnbig} alt="share button" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetCard;
