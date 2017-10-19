import React, {Component} from 'react'
import styled from 'styled-components'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'

const DetailsDiv = styled.div `
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const styles = {
  block: {
    maxWidth: '50px'
  },
  checkbox: {
    marginBottom: 16
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  small: {
    width: 72,
    height: 50,
    padding: 0
  }
};

class Report extends Component {
  state = {
    expanded: false
  }
  //handle expand change
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  //handles card expand
  handleExpand = () => {
    this.setState({expanded: true});
  };
  //handles card reduce
  handleReduce = () => {
    this.setState({expanded: false});
  };
  //handle form change
  handleUpdateChange = (event) => {
    this.props.handleReportChange(event, this.props.carId, this.props.report._id)
  }
  //functionality to update report
  updateReport = (event) => {
    event.preventDefault()
    this.props.updateReport(this.props.carId, this.props.report._id)
  }

  render() {
    //Got from https://www.sitepoint.com/javascript-media-queries/
    const mq = window.matchMedia( "(max-width: 500px)" );
    let reportDate = new Date(this.props.report.date).toUTCString().substring(0, 17)
    if (mq.matches) {
      reportDate = new Date(this.props.report.date).toLocaleString().substring(0,10)
    }

    return (
      <div>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.props.report.title}
            subtitle={`Satisfaction: ${this.props.report.satisfaction}`}
            actAsExpander={true}
            showExpandableButton={true}
            style={{
            textAlign: 'left'
          }}/>
          <CardTitle
            title={< TextField onBlur = {
            this.updateReport
          }
          onChange = {
            this.handleUpdateChange
          }
          name = "title" value = {
            this.props.report.title
          }
          inputStyle = {{textAlign: 'center'}}/>}
            expandable={true}/>
          <CardText expandable={true}>
            <IconButton
              iconStyle={styles.mediumIcon}
              style={styles.small}
              onClick={() => this.props.deleteReport(this.props.carId, this.props.report._id)}>
              <i className="material-icons">delete</i>
            </IconButton>
            <DetailsDiv>
              <div>Date: {reportDate}</div>
              <div>
                Location:
                <TextField
                onBlur={this.updateReport}
                onChange={this.handleUpdateChange}
                name="location"
                value={this.props.report.location}
                style={{
                width: String(this.props.report.satisfaction).length + 'em'
              }}
                inputStyle={{
                textAlign: 'center',
                minWidth: '8px'
              }}/>
              </div>

              <div>
                Satisfaction:
                <TextField
                  onBlur={this.updateReport}
                  onChange={this.handleUpdateChange}
                  name="satisfaction"
                  value={this.props.report.satisfaction}
                  style={{
                  width: String(this.props.report.satisfaction).length + 'em'
                }}
                  inputStyle={{
                  textAlign: 'center',
                  minWidth: '8px'
                }}/>
              </div>
            </DetailsDiv>
            <TextField
              onBlur={this.updateReport}
              onChange={this.handleUpdateChange}
              name="description"
              value={this.props.report.description}
              fullWidth={true}
              multiLine={true}/>
          </CardText>
        </Card>

      </div>

    )
  }
}

export default Report;