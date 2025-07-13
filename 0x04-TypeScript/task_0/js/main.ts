interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Sarah",
    lastName: "Lee",
    age: 21,
    location: "San Francisco"
}

const student2: Student = {
    firstName: "Talisman",
    lastName: "Zen",
    age: 25,
    location: "Peru"
}

const studentList: Student[] = [student1, student2];

const tableContainer: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const rowHead: HTMLTableRowElement = document.createElement('tr');
const nameHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader:HTMLTableCellElement = document.createElement('th');

nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

rowHead.append(nameHeader);
rowHead.append(locationHeader);
tableHead.append(rowHead);
tableContainer.append(tableHead);

const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentList.forEach((student: Student) => {
    const rowBody:  HTMLTableRowElement= document.createElement('tr')
    const nameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    rowBody.append(nameCell);
    rowBody.append(locationCell);
    tableBody.append(rowBody);
})

tableContainer.append(tableBody);
document.body.append(tableContainer);
