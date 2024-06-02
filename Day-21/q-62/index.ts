// creating a blueprint (interface) for student information
interface StudentInfo {
  name: string;
  age: number;
  courses: string[];
}
// Filling in the blueprint with an example student
let student: StudentInfo = {
  name: "Alice",
  age: 22,
  courses: ["Math", "Science", "History"],
};
// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
