import useFetch from './useFetch'
import MenuItems from "./MenuItems"

const NavBottom = ({menus, error, isPending}) => {

  return (
    <div className="nav-bottom">
      <ul className="menus" >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {menus && (
          menus.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          })
        )}
      </ul>
    </div>
  )
}

export default NavBottom 