import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';
export const About = (props) => {
  const navigate = useNavigate();
  const handleAchievements = () =>{
    navigate('/achievements')
  }
  return (
    <div id='' className='text-center about' >
       <div id='portfolio' className='text-center'>
      <div className='container-fluid'>
        <div className='row section-title'>
        <Slide left cascade><h2 id="h2s">About Us</h2></Slide>
        </div>
        <div className="row d-flex">
          <div className="col-sm-12 col-md-12 col-lg-6 servicesp">
              <h3>{props.data ? props.data.servicescaption : ""}</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 servicesp">
            <h2>Hi! We are Mahindar and Rohith. </h2>
              <span>{props.data ? props.data.paragraph : "loading..."}</span>
              <span>{props.data ? props.data.paragraph2 : "loading..."}</span>
              <span>{props.data ? props.data.paragraph3 : "loading..."}</span>
              <span>{props.data ? props.data.paragraph4 : "loading..."}</span>
          </div>
          <div className="col-md-12 col-sm-12 achievdiv">
            <p className="joinus"> Our Achievements</p>
            <button onClick={handleAchievements} type="submit" className="btn btn-custom btn-lg careersbtn">
             View Here
            </button>
        </div>
        </div> 
      </div>
    </div>
    </div>
  )
}

