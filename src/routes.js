/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Task from "views/Task";

import Project from "views/Project";

import Upgrade from "views/Upgrade.js";
import Album from "views/Album";
import Organization from "views/Organization";
import Contact from "views/Contact";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "bi bi-pie-chart-fill",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "bi bi-person-circle",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/task",
    name: "Tasks",
    icon: "bi bi-list-task",
    component: Task,
    layout: "/admin",
  },
  {
    path: "/Contact",
    name: "Contact",
    icon: "bi bi-person-lines-fill",
    component: Contact,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Project",
    icon: "bi bi-kanban-fill",
    component: Project,
    layout: "/admin",
  },
  {
    path: "/Album",
    name: "Album",
    icon: "bi bi-images",
    component: Album,
    layout: "/admin",
  },
  {
    path: "/Organization",
    name: "Organization",
    icon: "bi bi-building",
    component: Organization,
    layout: "/admin",
  },
];

export default dashboardRoutes;
