import React from "react";
import Item from "./Item";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";

const NavBar = () => {
  const theme = useSelector(selectTheme);
  console.log("navbar rendered");
  return (
    <nav
      style={{ backgroundColor: theme.componentBG }}
      className={`p-4 h-[calc(100vh-102px)] w-64 flex z-10 flex-col gap-5 font-semibold `}
    >
      <ul>
        <Item single={true}>hi</Item>
        <Item title="Dashboard">
          <ListItem>Main</ListItem>
          <ListItem>Project List</ListItem>
          <ListItem>Scurm Boread</ListItem>
          <ListItem>Issues</ListItem>
        </Item>
        <Item title="Dashboard">
          <ListItem>Main</ListItem>
          <ListItem>Project List</ListItem>
          <ListItem>Scurm Boread</ListItem>
          <ListItem>Issues</ListItem>
        </Item>
        <Item title="Dashboard">
          <ListItem>Main</ListItem>
          <ListItem>Project List</ListItem>
          <ListItem>Scurm Boread</ListItem>
          <ListItem>Issues</ListItem>
        </Item>
      </ul>
    </nav>
  );
};

export default NavBar;
