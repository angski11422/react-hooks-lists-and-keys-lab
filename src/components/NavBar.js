import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const pages = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));

  return <nav>{pages}</nav>;
}

export default NavBar;
