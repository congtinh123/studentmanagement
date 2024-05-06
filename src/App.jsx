import { useState } from "react";
import "./App.css";
import ListStudent from "./ListStudent";
import StudentInformation from "./assets/StudentInformation";
import StudentEdit from "./StudentEdit";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [listStudent, setListStudent] = useState(
    JSON.parse(localStorage.getItem("listStudent")) || []
  );

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleShowInfo = (student) => {
    // show student information:
    alert(`
    Student: ${student.name}
    Age: ${student.age} 
    Student ID: ${student.studentId}
    Gender: ${student.gender}
    `);
    console.log(student);
  };
  const deleteStudent = (student) => {
    alert(`Delete student: ${student.name}`);
    const indexStudent = listStudent.findIndex((item) => item.id == student.id);
    listStudent.splice(indexStudent, 1);
    setListStudent([...listStudent]);
    localStorage.setItem("listStudent", JSON.stringify(listStudent));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target, "aaa");
    const newStudent = {
      studentId: Math.floor(Math.random() * 1000),
      studentName: event.target[1].value,
      studentAge: event.target[2].value,
      studentGender: event.target[3].value,
      studentDate: event.target[4].value,
      studentLocation: event.target[5].value,
    };
    setListStudent([...listStudent, newStudent]);
    localStorage.setItem(
      "listStudent",
      JSON.stringify([...listStudent, newStudent])
    );
    alert("Add student successfully!");
    setShowForm(!showForm);
    event.target.reset();
  };

  const [showFormEdit, setShowFormEdit] = useState(false);

  const editStudent = (student) => {
    setShowFormEdit(!showFormEdit);
    const indexStudent = listStudent.findIndex((item) => item.id == student.id);
    console.log(indexStudent);
  };

  const handleEdit = (event) => {
    event.preventDefault();

    console.dir(event.target, "aaa");
  };

  return (
    <>
      <ListStudent
        listStudent={listStudent}
        onClick={handleShowForm}
        showInfo={handleShowInfo}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
      {showForm && <StudentInformation handleSubmit={handleSubmit} />}
      {showFormEdit && <StudentEdit handleEdit={handleEdit} />}
    </>
  );
}

export default App;
