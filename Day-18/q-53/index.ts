// // A list showing a programmer's skills in detail
let developerSkills = {
  languages: ["javascript", "typescript", "python"],
  frameworks: ["react", "angular", "vue"],
  tools: ["git ", "webpack", "docker"],
};

let { languages, frameworks, tools } = developerSkills;
// Showing a skill from each category
console.log(
  `language: ${languages[0]}, framework: ${frameworks[0]}, tool: ${tools[0]}`
);
