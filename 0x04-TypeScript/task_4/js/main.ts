/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;
import Teacher = Subjects.Teacher;

// Create teacher object
export const cTeacher: Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

// Create subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

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
