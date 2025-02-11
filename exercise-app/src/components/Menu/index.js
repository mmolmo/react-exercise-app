import React from "react"
import MenuItem from "../MenuItem"

// render all of the menu items in the menu
export default class Menu extends React.Component {
  render() {
    return (
      <div>
        {this.props.menuItems.map(item => (
          <MenuItem key={item.itemId} items={item} />
        ))}
      </div>
      )
    }
}