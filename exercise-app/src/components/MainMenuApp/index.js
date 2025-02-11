//import Menu from "../Menu"

// render the menu app 

//get menuData from app js and put it into the menu array.
//map the menuData array into the menu. array
const MainMenuApp = ({ data, onSelectExercise }) => {
  return (
    <div className="MainMenuApp">
      <ul>
        {data.map(({id, name, type}) => (
          <li style={{listStyleType: "none"}}>
            <button
              key={id}
              type={type}
              onClick={() => onSelectExercise(type, name)}
              name={name}
            >
              {name}
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  )
}
export default MainMenuApp;