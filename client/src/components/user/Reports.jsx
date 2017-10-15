import React, { Component } from 'react';

class Reports extends Component {
    render() {
        return (
            <div>
                <h4>Service Reports:</h4>
                <button onClick={() => this.props.createReport(this.props.carId)}>New Report</button>
                <ul>
                {this.props.reports.map((report) => {
        return (<li key={report._id}>{report.title}<button onClick={() =>this.props.deleteReport(this.props.carId, report._id)}>Delete</button></li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Reports;