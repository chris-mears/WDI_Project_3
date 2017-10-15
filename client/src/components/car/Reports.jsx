import React, { Component } from 'react';
import Report from './Report.jsx'

class Reports extends Component {
    render() {
        return (
            <div>
                <h4>Service Reports:</h4>
                <h5>New Report:</h5>
                <button onClick={this.props.createReport}>New Report</button>
                <ul>
                {this.props.serviceReports.map((report) => {
                return (<li key={report._id}>
                    <Report report={report}
                    handleReportChange={this.props.handleReportChange}
                    updateReport={this.props.updateReport} />
                    </li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Reports;