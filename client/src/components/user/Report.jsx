import React, { Component } from 'react';
import styled from 'styled-components'

const ReportSpan = styled.span`
  margin: 20px;

  input {
    font-weight: bold;
  }
  input {
    font-size: 1.2rem;
    border: none;
    background-color: initial;
  }
`

class Report extends Component {
    handleUpdateChange = (event) => {
    this.props.handleReportChange(event, this.props.carId, this.props.report._id)
}
updateReport = (event) => {
    event.preventDefault()
    this.props.updateReport(this.props.carId, this.props.report._id)
}
    render() {
        return (
            <ReportSpan>
        <input onBlur={this.updateReport} 
        onChange={this.handleUpdateChange} 
        name="title" value={this.props.report.title} />
        </ReportSpan> 
        );
    }
}

export default Report;