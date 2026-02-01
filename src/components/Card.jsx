import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='card'>
    <div>
        <div className="top">
        <img src={props.logo} alt="Logo" />
        <button>Save <Bookmark size={15} /></button>
      </div>

      <div className="center">
          <h4>{props.company}<span>{props.post}</span></h4>
          <h3>{props.role}</h3>
          <div className='tag'>
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
          </div>
      </div>
    </div>

      <div className="bottom">
        <div>
          <h4>{props.payment}</h4>
          <p>{props.location}</p>
        </div>
          <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
