
//icon imports
import durationIcon from '../../img/timer_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import repIcon from '../../img/repeat_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import backIcon from '../../img/arrow_back_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';

//get menuData from app js and put it into the menu array.
//map the menuData array into the menu. array

//data, onSelectExercise are props from App.js

//maps each list item from data with the image url from the image attr of each object.
//displays an icon and exercise type in the list item using ternary.
//displays the appropriate menu on click

const MainMenuScreen = ({ data, onSelectExercise }) => {
  return (
    <div className="MainMenuScreen">
      <h1 className="menu-title">Let's Get Moving!</h1>
      <ul className="main-menu-selection">
        {data.map(({id, name, type, image}) => (
          <li className="menu-exercise-card"
            key={id}
            type={type}
            onClick={() => onSelectExercise(type, name, image)}
            name={name}
            image={image}
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0.7) 17%,
                  rgba(0, 0, 0, 0)
                ),
                url(${image})
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div>
              <h1>{name}</h1>
              <p className="exercise-type">
                  {type === 'repetition' ? (
                    <>
                      <img src={repIcon} alt="rep icon" className="type-icon" /> 
                      {type.toUpperCase()}
                    </>
                  ) : (
                    <>
                      <img src={durationIcon} alt="duration icon" className="type-icon" /> 
                      {type.toUpperCase()}
                    </>
                  )}
                </p>
            </div>
            <button
              onClick={() => onSelectExercise(type, name, image)}
            >
              <img src={backIcon} alt="forward button" className="button-icon" 
                style={{
                  transform: 'rotate(180deg)',
                }}
              />
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  )
}
export default MainMenuScreen;