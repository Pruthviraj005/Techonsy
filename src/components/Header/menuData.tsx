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
    path: "/",
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
            path: "/",
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
    id: 6,
    title: "Hire Talent",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Frontend",
        path: "/",
        newTab: false,
        submenu: [
          { id: 611, title: "Angular Developer", path: "/", newTab: false },
          { id: 612, title: "React Developer", path: "/", newTab: false },
          { id: 613, title: "Vue Developer", path: "/", newTab: false },
          { id: 614, title: "Javascript Developer", path: "/", newTab: false },
          { id: 615, title: "UI/UX Developer", path: "/", newTab: false },
          { id: 616, title: "HTML/CSS Developer", path: "/", newTab: false },
          { id: 617, title: "Tailwind CSS Developer", path: "/", newTab: false },
        ],
        content: "Your Very Own UI/UX Architects",
        buttonText: "Hire Frontend Developer ->",
        buttonLink: "/"

      },
      {
        id: 62,
        title: "Backend",
        path: "/",
        newTab: false,
        submenu: [
          { id: 621, title: "Node.js Developer", path: "/", newTab: false },
          { id: 622, title: "Python Developer", path: "/", newTab: false },
          { id: 623, title: "PHP Developer", path: "/", newTab: false },
          { id: 624, title: "Java Developer", path: "/", newTab: false },
          { id: 625, title: ".NET Developer", path: "/", newTab: false },
          { id: 626, title: "Ruby on Rails Developer", path: "/", newTab: false },
        ],
         content: "Your Very Own Backend Developer",
        buttonText: "Hire Backend Developer ->",
        buttonLink: "/"
      },
       {
        id: 63,
        title: "Software",
        path: "/",
        newTab: false,
        submenu: [
          { id: 631, title: "QA Engineer", path: "/", newTab: false },
          { id: 632, title: "Automation Engineer", path: "/", newTab: false },
          { id: 633, title: "Software Architect", path: "/", newTab: false },
          { id: 634, title: "Project Manager", path: "/", newTab: false },
          { id: 635, title: "Business Analyst", path: "/", newTab: false },
        ],
         content: "Your Very Own Software Tester",
        buttonText: "Hire Software Tester ->",
        buttonLink: "/"
      },
       {
        id: 64,
        title: "Mobile App",
        path: "/",
        newTab: false,
        submenu: [
          { id: 641, title: "iOS Developer", path: "/", newTab: false },
          { id: 642, title: "Android Developer", path: "/", newTab: false },
          { id: 643, title: "React Native Developer", path: "/", newTab: false },
          { id: 644, title: "Flutter Developer", path: "/", newTab: false },
          { id: 645, title: "Swift Developer", path: "/", newTab: false },
        ],
        content: "Your Very Own Mobile App Developer",
        buttonText: "Hire Mobile App Developer ->",
        buttonLink: "/"
      },
       {
        id: 65,
        title: "Automation",
        path: "/",
        newTab: false,
        submenu: [
          { id: 651, title: "RPA Developer", path: "/", newTab: false },
          { id: 652, title: "Selenium Automation Tester", path: "/", newTab: false },
          { id: 653, title: "Test Automation Engineer", path: "/", newTab: false },
        ],
         content: "Your Very Own Automation Tester",
        buttonText: "Hire Automation Tester ->",
        buttonLink: "/"
      },
       {
        id: 66,
        title: "Platforms",
        path: "/",
        newTab: false,
        submenu: [
          { id: 661, title: "Salesforce Developer", path: "/", newTab: false },
          { id: 662, title: "Shopify Developer", path: "/", newTab: false },
          { id: 663, title: "WordPress Developer", path: "/", newTab: false },
          { id: 664, title: "Magento Developer", path: "/", newTab: false },
        ],
         content: "Your Very Own Platform Expert",
        buttonText: "Hire Platform Expert ->",
        buttonLink: "/"
      },
       {
        id: 67,
        title: "Artificial Intelligence",
        path: "/",
        newTab: false,
        submenu: [
          { id: 671, title: "Machine Learning Engineer", path: "/", newTab: false },
          { id: 672, title: "Data Scientist", path: "/", newTab: false },
          { id: 673, title: "AI Developer", path: "/", newTab: false },
        ],
         content: "Your Very Own AI Developer",
        buttonText: "Hire AI Developer ->",
        buttonLink: "/"
      },
       {
        id: 68,
        title: "Machine Learning",
        path: "/",
        newTab: false,
        submenu: [
          { id: 681, title: "NLP Engineer", path: "/", newTab: false },
          { id: 682, title: "Computer Vision Engineer", path: "/", newTab: false },
        ],
         content: "Your Very Own Machine Learning Engineer",
        buttonText: "Hire Machine Learning Engineer ->",
        buttonLink: "/"
      },
       {
        id: 69,
        title: "DevOps",
        path: "/",
        newTab: false,
        submenu: [
          { id: 691, title: "DevOps Engineer", path: "/", newTab: false },
          { id: 692, title: "Cloud Engineer", path: "/", newTab: false },
        ],
         content: "Your Very Own DevOps Engineer",
        buttonText: "Hire DevOps Engineer ->",
        buttonLink: "/"
      },
       {
        id: 610,
        title: "Data Science",
        path: "/",
        newTab: false,
        submenu: [
          { id: 6101, title: "Data Engineer", path: "/", newTab: false },
          { id: 6102, title: "Data Analyst", path: "/", newTab: false },
        ],
        content: "Your Very Own Data Scientist",
        buttonText: "Hire Data Scientist ->",
        buttonLink: "/"
      },
       {
        id: 611,
        title: "Cloud",
        path: "/",
        newTab: false,
        submenu: [
          { id: 6111, title: "AWS Developer", path: "/", newTab: false },
          { id: 6112, title: "Azure Developer", path: "/", newTab: false },
          { id: 6113, title: "Google Cloud Developer", path: "/", newTab: false },
        ],
         content: "Your Very Own Cloud Engineer",
        buttonText: "Hire Cloud Engineer ->",
        buttonLink: "/"
      },
    ]
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
