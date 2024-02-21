"use client";

import { useState } from "react";
import Link from "next/link";
import navData from "./navData";
import classes from "./SideNav.module.scss";

const SideNav = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.Container}>
        <div
          className={`${classes.Hamburger} ${Open ? classes.Open : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${Open ? classes.Open : ""} ${classes.NavItems}`}>
          {navData.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={classes.Links}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>

      {Open && (
        <div
          className={classes.Backdrop}
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default SideNav;
