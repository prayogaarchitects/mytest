import Slide from 'react-reveal/Slide';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='row section-title'>
            <Slide left cascade><h2 id="h2s">Services</h2></Slide>
          </div>
          <div className="row d-flex">
            <div className="col-sm-12 col-md-12 col-lg-6 servicesp">
              <h3 id='servicescap'>{props.data ? props.data.servicescaption : ""}</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 servicesp">
              <span>{props.data ? props.data.servicesdescription : ""}</span>
              <span>{props.data ? props.data.servicesdescription2 : ""}</span>
              <span>{props.data ? props.data.servicesdescription3 : ""}</span>
              <span>{props.data ? props.data.servicesdescription4 : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
