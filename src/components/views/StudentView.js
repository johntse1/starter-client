import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <img src={student.img}></img>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h1>{student.campus.name}</h1>
      <li key={student.campusId}>
        <Link to={`/campus/${student.campusId}`}>Campus Info</Link>
      </li>
      <h3>{student.email}</h3>
      <h3>{student.gpa}</h3>
    </div>
  );

};

export default StudentView;