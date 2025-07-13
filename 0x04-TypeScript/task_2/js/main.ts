interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Gettung a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export const createEmployee = (salary: number | string): DirectorInterface | TeacherInterface => {
    return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director();
}

export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is DirectorInterface => {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string => {
    return (todayClass === "Math") ? "Teaching Math" : "Teaching History";
}

