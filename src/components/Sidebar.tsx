
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from "phosphor-react";

import "./Sidebar.css";

import Logo from "../assets/logo-twitter.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <img className='logo' src={Logo} alt="Logo" />
        <nav className='main-navigation'>
          <NavLink to={"/"} className='active'>
            <House weight='fill'/>
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash />
            <span>Explorer</span>
          </a>
          <a href="">
            <Bell/>
            <span>Notifications</span>
          </a>
          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>
          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText />
            <span>List</span>
          </a>
          <a href="">
            <User />
            <span>Profile</span>
          </a>
          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
  )
}
