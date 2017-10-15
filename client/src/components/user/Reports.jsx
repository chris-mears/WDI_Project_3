import React, { Component } from 'react';

class Reports extends Component {
    render() {
        return (
            <div>
                <h4>Service Reports:</h4>
                <ul>
                {this.props.reports.map((report) => {
        return (<li>{report.title}<button>Delete</button></li>
        )
      })}</ul>
            </div>
        );
    }
}

export default Reports;