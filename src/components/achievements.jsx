import Slide from "react-reveal/Slide";

export const Achievements = (props) => {
  return (
    <div id="" className="text-center about">
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="row section-title">
            <Slide left cascade>
              <h2 id="h2s">Achievements</h2>
            </Slide>
          </div>
          <div className="row d-flex">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h2 className="achievementshead">2022</h2>
              <ul>
                <div className="dots">
                  <span class="dot"></span>
                  <li>{props.data?props.data.title1:""}</li>
                </div>
                <div className="dots">
                <span class="dot"></span>
                  <li>{props.data?props.data.title2:""} </li>
                </div>
                <div className="dots">
                  <span class="dot"></span>
                  <li>{props.data?props.data.title3:""}</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
