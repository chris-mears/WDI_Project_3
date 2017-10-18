import React, {Component} from 'react';
import Report from './Report'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';

const ReportsDiv = styled.div `
    margin: 20px;
`

class Reports extends Component {
    render() {
        return (
            <ReportsDiv>
                <h4>Service Reports:</h4>
                <FlatButton
                    label="New Report"
                    primary={true}
                    type="submit"
                    onClick={() => this.props.createReport(this.props.carId)}/> {this
                    .props
                    .reports
                    .map((report) => {
                        return (<Report
                            key={report._id}
                            report={report}
                            handleReportChange={this.props.handleReportChange}
                            updateReport={this.props.updateReport}
                            carId={this.props.carId}
                            deleteReport={this.props.deleteReport}/>)
                    })}
            </ReportsDiv>
        )
    }
}

export default Reports;