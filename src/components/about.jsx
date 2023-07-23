import Slide from 'react-reveal/Slide';

export const About = (props) => {
  return (
    <div id='' className='text-center about' >
       <div id='portfolio' className='text-center'>
      <div className='container'>
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
        </div> 
      </div>
    </div>
    </div>
  )
}

