import { Link } from "react-router-dom"
export const Image = ({ title, id, largeImage, mainImage, sourcep }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        {/* <a href={largeImage} title={title} data-lightbox-gallery='gallery1'> */}
        {
          sourcep==="gallery"? <><Link to={'/gallery/' + id}>
          
          <img
            src={mainImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </Link>{' '} </>: 
        
          
        <img
          src={mainImage}
          className='img-responsive'
          alt={title}
        />
        }
        
      </div>
    </div>
  )
}