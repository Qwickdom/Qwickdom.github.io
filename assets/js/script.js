class Project {
  constructor(title, body, techUsed, githubName, githubLink) {
    this.title = title;
    this.body = body;
    this.tech = techUsed;
    this.githubName = githubName;
    this.githubLink = githubLink;
  }
}

function createProjectEntry(projectEntry) {
  const projectContainer = document.createElement("div");
  const title = document.createElement("h3");
  const body = document.createElement("p");
  const tech = document.createElement("div");
  const link = document.createElement("div");

  projectContainer.classList.add("project-entries__project");

  let hammer = '<i class="fas fa-hammer"></i> '
  let linkAnchor = `<i class="fab fa-github"></i> <a href="${projectEntry.githubLink}">${projectEntry.githubName}</a>`;

  title.textContent = projectEntry.title;
  body.insertAdjacentHTML('afterbegin', projectEntry.body);
  tech.textContent = projectEntry.tech;
  tech.insertAdjacentHTML('afterbegin', hammer);
  link.insertAdjacentHTML('afterbegin', linkAnchor);

  projectContainer.appendChild(title);
  projectContainer.appendChild(body);
  projectContainer.appendChild(tech);
  projectContainer.appendChild(link);

  projectsContainer.appendChild(projectContainer);
}

const projects = [
                  new Project(
                    "Rofi Scripts",
                    "A colecction of scripts that I use on Arch Linux (BSPWM) for \
                    menus/applets.",
                    "Bash",
                    "Qwickdom/rofi",
                    "https://github.com/Qwickdom/rofi"
                  ),
                  new Project(
                    "Git Basics",
                    "Simple Git concepts like introduction, basic commands, branching, etc.",
                    "Markdown",
                    "Qwickdom/Git-basics",
                    "https://github.com/Qwickdom/Git-basics"
                  ),
                  new Project(
                    "Website",
                    "Simple personal website, showing off some of my web skills.",
                    "HTML/CSS, JS",
                    "https://github.com/Qwickdom/Qwickdom.git.io"
                  ),
                  new Project(
                    "Dotfiles",
                    "Simple personal backup of my Linux system. Some configs and preferences.",
                    "Python, CSS, Bash",
                    "https://github.com/Qwickdom/dotfiles-bspwm"
                  ),
];

const projectsContainer = document.querySelector(".project-entries");

for (let i = 0; i < projects.length; i++) {
  createProjectEntry(projects[i]);
}
