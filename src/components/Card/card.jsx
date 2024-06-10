import "./Card.css"

const Card = ({content, color}) => {
    return (
        <div className="container">
          <div className="course_box">
            <div className="courses_item">
              <div className="courses-item_link">
                <div className="courses-item_bg" style={{backgroundColor: `#${color}`}}></div>
                <div className="courses-item_title">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card

