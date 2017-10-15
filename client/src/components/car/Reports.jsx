import React, { Component } from 'react';

class Reports extends Component {
    render() {
        return (
            <div>
                <h4>Service Reports:</h4>
                <h5>New Report:</h5>
                <button onClick={this.props.createReport}>New Report</button>
                <ul>
                {this.props.reports.map((report) => {
        return (<li key={report._id}>{report.title}<button onClick={() =>this.props.deleteReport(report._id)}>Delete</button>
        <ul><li>{report.description}</li></ul>
        </li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Reports;