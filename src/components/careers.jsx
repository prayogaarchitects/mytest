import Slide from "react-reveal/Slide";
import Accordion from "./Accordion";
export const Careers = (props) => {
  return (
    <div id="" className="text-center">
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="row section-title">
            <Slide left cascade>
              <h2 id="h2s">Careers</h2>
            </Slide>
          </div>
          <div className="row d-flex careersdiv">
            <div className="row">{props.data ? props.data.p1 : ""}</div>
            <div className="row">{props.data ? props.data.p2 : ""}</div>
            <div className="row">{props.data ? props.data.p3 : ""}</div>
            <div className="row careeremail">
              {props.data ? props.data.email : ""}
            </div>
          </div>
          <div className="row d-flex">
            <Accordion
              title={props.data ? props.data.position1 : ""}
              body={props.data ? props.data.positiondes1: ""}
            />
            <Accordion
              title={props.data ? props.data.position2 : ""}
              body={props.data ? props.data.positiondes2 : ""}
            />
            <Accordion
              title={props.data ? props.data.position3 : ""}
              body={props.data ? props.data.positiondes3 : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
