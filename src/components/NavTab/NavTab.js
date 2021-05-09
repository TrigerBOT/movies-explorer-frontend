import React from "react";
function NavTab() {
  const navInfo = [
    {
      title: "О проекте",
      link: "#about-project",
      id: 1,
      listItemClassName: "nav-tab__list-item",
      listLinkClassName: "nav-tab__list-link",
    },
    {
      title: "Технологии",
      link: "#technologies",
      id: 2,
      listItemClassName: "nav-tab__list-item",
      listLinkClassName: "nav-tab__list-link",
    },
    {
      title: "Студент",
      link: "#student",
      id: 3,
      listItemClassName: "nav-tab__list-item",
      listLinkClassName: "nav-tab__list-link",
    },
  ];

  const navTabs = navInfo.map((tab) => {
    return (
      <li className={tab.listItemClassName} key={tab.id}>
        <a className={tab.listLinkClassName} href={tab.link}>
          {tab.title}
        </a>
      </li>
    );
  });

  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">{navTabs}</ul>
    </nav>
  );
}
export default NavTab;
