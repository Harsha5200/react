import './index.css'

const TechnologyCard = props => {
  const {TechnologyCardDetails} = props
  const {title, description, imgUrl, className} = TechnologyCardDetails

  return (
    <li className={`${className} card-container`}>
      <div className="technology-container">
        <div className="content-container">
          <h1 className="heading">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="img-container">
          <img src={imgUrl} className="imgClass" alt="{title}" />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCard
