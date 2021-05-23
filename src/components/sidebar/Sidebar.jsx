import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">EXPORE VOLCANOES</span>
                <img className="sideImg"src="/images/volcano.jpeg" alt="" />
                <p>Stratovolcanoes can erupt with great violence. Pressure builds in the magma chamber
                     as gases, under immense heat and pressure, are dissolved in the liquid rock.
                      When the magma reaches the conduits the pressure is released and the gases explode,
                     .</p>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="sidebarList">
                  <a href="/#" className="sidebarListItem"><li>Cinder cones</li></a>
                  <a href="/#" className="sidebarListItem"><li>Supervolcanoes</li></a>
                  <a href="/#" className="sidebarListItem"><li>Magmatic eruptions</li></a>
                  <a href="/#" className="sidebarListItem"><li>Extinct</li></a>
                  <a href="/#" className="sidebarListItem"><li>Decade volcanoes</li></a>
                  <a href="/#" className="sidebarListItem"><li>Benefits</li></a>
                  <a href="/#" className="sidebarListItem"><li> Geothermal power</li></a>
                  <a href="/#" className="sidebarListItem"><li>History of volcanology</li></a>
                  <a href="/#" className="sidebarListItem"><li>Volcano observatory</li></a>
                  <a href="/#" className="sidebarListItem"><li>radioactive </li></a>
                  <a href="/#" className="sidebarListItem"><li>Arenal Volcano</li></a>
                  <a href="/#" className="sidebarListItem"><li>Sheveluch</li></a>

                  </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CLASSIFICATIONS</span>
              <ul className="sidebarList">
                  <a href="/#" className="sidebarListItemNm"><li>Active</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Dormant(inactive)</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Extinct (dead volcano)</li></a>
                  <a href="/#" className="sidebarListItemNm"><li> Ash cloud</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Parasitic cone</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Bedrock</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Earth's crust.</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Mount Rainier</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Volcano observatory</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>radiation </li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Deep Volcano</li></a>
                  <a href="/#" className="sidebarListItemNm"><li>Shevanchia</li></a>

                  </ul>
            </div>
            <div className="sdebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
            <i className=" sidebarIcon fab fa-facebook-square"></i>
            <i className=" sidebarIcon fab fa-twitter-square"></i>
            <i className=" sidebarIcon fab fa-pinterest-square"></i>
            <i className=" sidebarIcon fab fa-github-square"></i>
                </div>
            </div>
        </div>
    )
}
