//import Menu from "../Menu"

// render the menu app 
const exerciseImages = {
  pushups: "https://images.unsplash.com/photo-1603503364272-6e28e046b37a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  jumpingjacks: "https://images.unsplash.com/photo-1510487156526-04f33237c1e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  running: "https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  plank: "https://plus.unsplash.com/premium_photo-1672352100050-65cb2ee4d818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
//get menuData from app js and put it into the menu array.
//map the menuData array into the menu. array
const MainMenuScreen = ({ data, onSelectExercise }) => {
  return (
    <div className="MainMenuScreen">
      <h1 className="menu-title">Let's Get Moving!</h1>
      <ul className="main-menu-selection">
        {data.map(({id, name, type}) => (
          <li className="menu-exercise-card"
            key={id}
            type={type}
            onClick={() => onSelectExercise(type, name)}
            name={name}
            style={{
              backgroundImage: `url(${exerciseImages[id]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div>
              <h1>{name}</h1>
              <p className="exercise-type">
                  {type === 'repetition' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 1l4 4-4 4"></path>
                        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                        <path d="M7 23l-4-4 4-4"></path>
                        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                      </svg>
                      REPETITION
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      DURATION
                    </>
                  )}
                </p>
            </div>
            <button
              onClick={() => onSelectExercise(type, name)}
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
export default MainMenuScreen;