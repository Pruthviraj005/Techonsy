import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "",
    path: "/",
    newTab: false
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Development",
        path: "/",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Mobile App Development",
            path: "/services/development/MobileApp",
            newTab: false
          },
          {
            id: 412,
            title: "Web Development",
            path: "/",
            newTab: false
          },
          {
            id: 413,
            title: "Cross Platform App Development",
            path: "/",
            newTab: false
          },
          {
            id: 414,
            title: "Ecommerce & CMS",
            path: "/",
            newTab: false
          },
          {
            id: 415,
            title: "UI & UX Designing",
            path: "/",
            newTab: false
          }
        ]
      },
      {
        id: 42,
        title: "Technology",
        path: "/",
        newTab: false,
        submenu: [
          {
            id: 421,
            title: "Opensource Development",
            path: "/",
            newTab: false
          },
          {
            id: 422,
            title: "Quality Assurance",
            path: "/",
            newTab: false
          },
          {
            id: 423,
            title: "NFT Development",
            path: "/",
            newTab: false
          },
          {
            id: 424,
            title: "Blockchain Development",
            path: "/",
            newTab: false
          },
          {
            id: 425,
            title: "App Prototype & Strategy",
            path: "/",
            newTab: false
          }
        ]
      },
      {
        id: 43,
        title: "Solutions",
        path: "/",
        newTab: false,
        submenu: [
          {
            id: 431,
            title: "AI Development",
            path: "/",
            newTab: false
          },
          {
            id: 432,
            title: "IoT Development",
            path: "/",
            newTab: false
          },
          {
            id: 433,
            title: "Cloud Computing",
            path: "/",
            newTab: false
          },
          {
            id: 434,
            title: "Consulting Services",
            path: "/",
            newTab: false
          },
          {
            id: 435,
            title: "Software Maintenance & Support",
            path: "/",
            newTab: false
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Technology",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Frontend",
        path: "/",
        newTab: false,
        submenu: [
          { id: 511, title: "HTML5", path: "/", newTab: false },
          { id: 512, title: "CSS3", path: "/", newTab: false},
          { id: 513, title: "JavaScript", path: "/", newTab: false },
          { id: 514, title: "jQuery", path: "/", newTab: false },
          { id: 515, title: "Bootstrap", path: "/", newTab: false },
          { id: 516, title: "ReactJS", path: "/", newTab: false },
          { id: 517, title: "Angular", path: "/", newTab:false}
        ]
      },
      {
        id: 52,
        title: "Microsoft Technologies",
        path: "/",
        newTab: false,
        submenu: [
          { id: 521, title: "ASP.NET Core", path: "/", newTab: false },
          { id: 522, title: "ASP.NET MVC", path: "/", newTab: false }
        ]
      },
      {
        id: 53,
        title: "Backend",
        path: "/",
        newTab: false,
        submenu: [
          { id: 531, title: "PHP", path: "/", newTab: false },
          { id: 532, title: "Node.JS", path: "/", newTab: false },
          { id: 533, title: "Python", path: "/", newTab: false }
        ]
      },
      {
        id: 54,
        title: "Mobile",
        path: "/",
        newTab: false,
        submenu: [
          { id: 541, title: "Android", path: "/", newTab: false },
          { id: 542, title: "iOS", path: "/", newTab: false },
          { id: 543, title: "Flutter", path: "/", newTab: false },
          { id: 544, title: "React Native", path: "/", newTab: false },
          { id: 545, title: "Wearable", path: "/", newTab: false }
        ]
      },
      {
        id: 55,
        title: "Database",
        path: "/",
        newTab: false,
        submenu: [
          { id: 551, title: "SQL Server", path: "/", newTab: false },
          { id: 552, title: "MySQL", path: "/", newTab: false },
          { id: 553, title: "PostgreSQL", path: "/", newTab: false },
          { id: 554, title: "MongoDB", path: "/", newTab: false },
          { id: 555, title: "Oracle", path: "/", newTab: false }
        ]
      },
      {
        id: 56,
        title: "Frameworks",
        path: "/",
        newTab: false,
        submenu: [
          { id: 561, title: "Laravel", path: "/", newTab: false },
          { id: 562, title: "MERN Stack", path: "/", newTab: false },
          { id: 563, title: "MEAN Stack", path: "/", newTab: false },
          { id: 564, title: "Next.js", path: "/", newTab: false }
        ]
      },
      {
        id: 57,
        title: "Big Data Visualization",
        path: "/",
        newTab: false,
        submenu: [
          { id: 571, title: "Tableau", path: "/", newTab: false },
          { id: 572, title: "D3&DC.js", path: "/", newTab: false },
          { id: 573, title: "Highcharts", path: "/", newTab: false },
          { id: 574, title: "Google Charts", path: "/", newTab: false }
        ]
      },
      {
        id: 58,
        title: "Clouds",
        path: "/",
        newTab: false,
        submenu: [
          { id: 581, title: "Digital Ocean", path: "/", newTab: false },
          { id: 582, title: "Google Cloud", path: "/", newTab: false },
          { id: 583, title: "AWS Services", path: "/", newTab: false },
          { id: 584, title: "Azure", path: "/", newTab: false }
        ]
      },
      {
        id: 59,
        title: "Emerging Technologies",
        path: "/",
        newTab: false,
        submenu: [
          { id: 591, title: "Blockchain", path: "/", newTab: false },
          { id: 592, title: "IoT", path: "/", newTab: false },
          { id: 593, title: "AI&ML", path: "/", newTab: false },
          { id: 594, title: "Bixby Application Development", path: "/", newTab: false }
        ]
      },
      {
        id: 510,
        title: "QA & Testing",
        path: "/",
        newTab: false,
        submenu: [
          { id: 5101, title: "Automation Testing", path: "/", newTab: false },
          { id: 5102, title: "Software Testing", path: "/", newTab: false },
          { id: 5103, title: "Cypress Testing", path: "/", newTab: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Hire Talent",
    path: "/",
    newTab: false
  },
  {
    id: 2,
    title: "About Us",
    path: "/",
    newTab: false
  },
  {
    id: 33,
    title: "Blogs",
    path: "/",
    newTab: false
  }
];

export default menuData;