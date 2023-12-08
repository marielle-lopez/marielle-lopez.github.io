const skills = [
  {
    name: "HTML",
    imagePath: "../images/html.png",
  },
  {
    name: "CSS",
    imagePath: "../images/css.png",
  },
  {
    name: "Sass/SCSS",
    imagePath: "../images/sass.png",
  },
  {
    name: "Git",
    imagePath: "../images/git.png",
  },
  {
    name: "Python",
    imagePath: "../images/python.png",
  },
  {
    name: "JavaScript",
    imagePath: "../images/javascript.png",
  },
  {
    name: "React",
    imagePath: "../images/react.png",
  },
  {
    name: "Java",
    imagePath: "../images/java.png",
  },
  {
    name: "Swift",
    imagePath: "../images/swift.png",
  },
  {
    name: "SQL",
    imagePath: "../images/sql.png",
  },
  {
    name: "Amazon Web Services",
    imagePath: "../images/aws.png",
  },
  {
    name: "FireBase & FireStone",
    imagePath: "../images/firebase-firestone.png",
  },
  {
    name: "SpringBoot",
    imagePath: "../images/springboot.png",
  },
  {
    name: "LC-3 Assembly",
    imagePath: "../images/assembly.png",
  },
  {
    name: "Figma",
    imagePath: "../images/figma.png",
  },
];

function setSkillList() {
  let skillList = "";

  skills.map(
    (skill) =>
      (skillList += `<li class="skills__item"><img src="${skill.imagePath}" alt="${skill.name} logo" class="skills__item__logo" /><span class="skills__item__name">${skill.name}</span></li>`)
  );

  let skillListContent = document.getElementById("skillList");
  skillListContent.innerHTML = skillList;
}

setSkillList();
