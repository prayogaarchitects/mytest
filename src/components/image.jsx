import { Link } from "react-router-dom"
export const Image = ({ title, id, largeImage, mainImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        {/* <a href={largeImage} title={title} data-lightbox-gallery='gallery1'> */}
        <Link to={'/gallery/' + id}>
          {/* <div className='hover-text'>
            <h4>{title}</h4>
          </div> */}
          <img
            src={mainImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </Link>{' '}
      </div>
    </div>
  )
}