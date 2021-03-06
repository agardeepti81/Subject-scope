import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

class TopicQuestions extends Component {
  state = { data: null, loading: true };

  async componentDidMount() {
    const url = `/Data/Subjects/${this.props.currentScope}/${this.props.activeTopicId}.json`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(data);
  }

  render() {
    return this.state.loading || !this.state.data ? (
      <div>loading... </div>
    ) : (
      <div className="questionTable">
        <p id="topictitle">{this.props.activeTopicName}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th class="col-sm-1"> </th>
              <th class="col-sm-1">Q-ID</th>
              <th class="col-md-8">Questions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((qus, i) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{i + 1}</td>
                <td>{qus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={this.props.back}> back</Button>
      </div>
    );
  }
}

export default TopicQuestions;
