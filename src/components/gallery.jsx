import { Image } from "./image";
import { useState, useEffect } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import PinterestGrid from 'rc-pinterest-grid';

const breakPoints = [
  {
    minScreenWidth: 0,
    maxScreenWidth: 400,
    columns: 1,
    columnWidth: 350,
  },
  {
    minScreenWidth: 400,
    maxScreenWidth: 900,
    columns: 2,
    columnWidth: 350,
  },
  {
    minScreenWidth: 900,
    maxScreenWidth: Infinity,
    columns: 3,
    columnWidth: 450,
  },
]

export const Gallery = (props) => {
  const [value, setValue] = useState('ALL');

  const handleClick = (a) => {
    setValue(a)
  }
  
  return (
    <div id='portfolio' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
        <Slide left cascade><h2 id="h2l">Luxury Homes</h2></Slide>
          <div id="sectionsdiv">
            <span onClick={() => handleClick('ALL')}>All Projects</span>
            <span onClick={() => handleClick('Interiors')}>Interiors</span>
            <span onClick={() => handleClick('BOTH')}>Architecture + Interiors</span>
            <span onClick={() => handleClick('Architecture')}>Architecture</span>
          </div>
        </div>
        
        <div className='row'>
        
          <div className='portfolio-items'>
          <PinterestGrid
            columns={3}               // how many columns in one row
            columnWidth={420}         // width of each block
            gutterWidth={10}          // horizontal gutter between each block
            gutterHeight={10} 
            responsive={{customBreakPoints: breakPoints}}  // vertical gutter between each block
            >
            {props.data
              ? props.data.filter(u => u.classification==value || value=="ALL"||u.secondclass==value).map((d, i) => (
                
                <div key={`${d.title}-${i}`} className='individualcards'>
                 <Image title={d.title} id={d.id} mainImage={d.mainImage} sourcep = "gallery"/>
                  <div>
                  <span className="title">{d.title}</span><br/>
                  {d.classification=="BOTH"?<span className="classification">Architecture+Interiors</span>:<span className="classification">{d.classification}</span>}
                  </div>
                </div>
               
              ))
              : 'Loading...'}
            </PinterestGrid>
          </div>
        </div>
       
      </div>
    </div>
  )
}
