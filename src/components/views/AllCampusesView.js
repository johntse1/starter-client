
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
    <div><h1>There are no campuses.</h1>
    <Link to={`newCampus`}>
    <button>Add New Student</button>
  </Link></div>);
  }

  const {deleteCampus} = props;
  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <button onClick={()=>deleteCampus(campus.id)}>Remove Campus</button>
        </div>
      ))}
      <Link to={`/addcampus`}>
          <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
