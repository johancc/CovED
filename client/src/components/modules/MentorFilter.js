import React, { Component } from "react";
import "../../utilities.css";
import "./MentorFilter.css";
import Select from "react-select";
import { subjects, tags } from "../Constants";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const OPTIONS = subjects.concat(tags);

class MentorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }


  handleChange = (selected) => {
    if (selected === null) selected = [];
    this.setState({ value: selected });
    this.props.onChange(selected.map(sub => sub.value));
  }

  render() {

    return (
      <Container fluid>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Search by Tags:</Form.Label>
          <Select width='200px' value={this.state.value} options={OPTIONS} isMulti onChange={this.handleChange} />
        </Form.Group>
      </Container>
    );
  }
}

export default MentorFilter;
