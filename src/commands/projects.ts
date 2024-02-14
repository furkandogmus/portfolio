import command from '../../config.json' assert {type: 'json'};
const createProject = (): string[] => {
  const projects: string[] = [];
  const files = `${command.projects.length} Project(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>");

  command.projects.forEach((ele) => {
    const link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    const projectNameLength = ele[0].length;
    const spacesNeeded = Math.max(0, 17 - projectNameLength);
    const spaces = SPACE.repeat(spacesNeeded);

    const projectString = `${SPACE.repeat(2)}${link}${spaces}${ele[1]}`;
    projects.push(projectString);
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects;
};


export const PROJECTS = createProject()
