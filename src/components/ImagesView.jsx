import { useParams } from "react-router-dom"
import {GrLocationPin} from "react-icons/gr"
import { useState,useCallback } from "react";
import { Image } from "./image";
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

export const ImagesView = (props) => {
  let { id } = useParams();

  const images = props.data? props.data.filter(u=>u.id==id)[0].images : null;


  return (
    
    <div id='imagesview' className='text-center'>
      <div className='container-fluid'>          
          {
            props.data
            ? props.data.filter(u => u.id==id).map(item => {
              return <div className="row spacex" key={item.id}>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <h2 className="imagetitle">{item.title}</h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 image-description">
                 
                  <p>{item.description}</p>
                  
                  <p>Location : <GrLocationPin/> {item.location}</p>
                 
                  <p>Site Area : {item.sitearea}</p>
                  <p>Property Type : {item.projecttype}</p>
                </div>
              </div>
            }) : ""
          }
      <div className='portfolio-items'>
          <PinterestGrid
            columns={3}               // how many columns in one row
            columnWidth={420}         // width of each block
            gutterWidth={10}          // horizontal gutter between each block
            gutterHeight={10} 
            responsive={{customBreakPoints: breakPoints}} // vertical gutter between each block
            >
            {images
              ? images.map((d, i) => (
                
                <div key={`${i}`} className='individualcards'>
                 <Image mainImage={d} sourcep = "imagesview"/>
                  
                </div>
               
              ))
              : 'Loading...'}
            </PinterestGrid>
          </div>
      
        
      </div>
    </div>
  )
}
