const style = {
  list: `flex space-x-10`,
  element: `font-semibold text-white-600 transition-all hover:text-white dark:text-white-300 `,
}

const NavMenus = ({ menus }) => {
  return (
    <nav>
      <ul className={style.list}>
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.href} className={style.element}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenus
