/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Cpp = Subjects.Cpp;
var Java = Subjects.Java;
var React = Subjects.React;
// Create teacher object
export var cTeacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
};
// Create subjects
export var cpp = new Cpp();
export var java = new Java();
export var react = new React();
// Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map