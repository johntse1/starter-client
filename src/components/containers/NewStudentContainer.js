import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          email:"",
          gpa:0,
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            email: this.state.email,
            gpa: this.state.gpa
        };
        if(this.state.campusId==null){
          this.state.campusId==0;
        }
        let newStudent = await this.props.addStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null,
          email: "",
          gpa:0,
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(NewStudentContainer);