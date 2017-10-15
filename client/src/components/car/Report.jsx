import React, { Component } from 'react';
import styled from 'styled-components'

const ReportSpan = styled.span`
  margin: 20px;

  input, textarea {
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    background-color: initial;
  }
`

class Report extends Component {
    handleUpdateChange = (event) => {
    this.props.handleReportChange(event, this.props.report._id)
}
updateReport = (event) => {
    event.preventDefault()
    this.props.updateReport(this.props.report._id)
}
    render() {
        return (
        <span>
        <ReportSpan>
        <input onBlur={this.updateReport} 
        onChange={this.handleUpdateChange} 
        name="title" value={this.props.report.title} />
        </ReportSpan>
        <button onClick={() =>this.props.deleteReport(this.props.report._id)}>Delete</button>
        <ReportSpan>
        <ul><li>
        <textarea onBlur={this.updateReport} 
        onChange={this.handleUpdateChange} 
        name="description" value={this.props.report.description} />
        </li></ul>
        </ReportSpan> 
        </span>
        );
    }
}

export default Report;