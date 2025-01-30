import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Full Stack Development",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "UI/UX Design",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Mean/Mern Stack Development",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "QA Testing",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Cloud Services",
        path: "/",
        newTab: false,
      },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 3,
    title: "Careers",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/",
    newTab: false,
  },
  {
    id: 33,
    title: "Contact",
    path: "/",
    newTab: false,
  },

];
export default menuData;
