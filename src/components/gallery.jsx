import { Image } from "./image";
import { useState, useEffect } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import PinterestGrid from 'rc-pinterest-grid';


export const Gallery = (props) => {
  const [value, setValue] = useState('ALL');

  const handleClick = (a) => {
    setValue(a)
  }
  
  return (
    <div id='portfolio' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
        <Slide left cascade><h2>Gallery</h2></Slide>
          <div id="sectionsdiv">
            <span onClick={() => handleClick('ALL')}>All Projects</span>
            <span onClick={() => handleClick('INTERIOR')}>Interiors</span>
            <span onClick={() => handleClick('INTANDARCH')}>Architecture + Interiors</span>
            <span onClick={() => handleClick('ARCHITECTURE')}>Architecture</span>
          </div>
        </div>
        
        <div className='row'>
        
          <div className='portfolio-items'>
          <PinterestGrid
            columns={3}               // how many columns in one row
            columnWidth={420}         // width of each block
            gutterWidth={10}          // horizontal gutter between each block
            gutterHeight={10} 
            responsive={true}        // vertical gutter between each block
            >
            {props.data
              ? props.data.filter(u => u.classification==value || value=="ALL").map((d, i) => (
                
                <div key={`${d.title}-${i}`} className='individualcards'>
                 <Image title={d.title} id={d.id} mainImage={d.mainImage} sourcep = "gallery"/>
                  <span>{d.title + " - "+ d.projecttype}</span>
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
