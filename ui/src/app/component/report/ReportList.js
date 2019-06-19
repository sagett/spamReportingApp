import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import './report.scss';


class ReportList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { report, onUpdateReportState } = this.props;
    console.log('report', report);
    return (
      <div key={report['reference_id']} className="reportList" style={{ display: "flex", height: 80 }}>
          <div className="reportList_item_large">
              <div className="reportList_row">id: {report['reference_id']}</div>
              <div className="reportList_row">
                  state: <span className={"reportListCell_status_" + report['status']}>
                      {report['status']}
                  </span>
              </div>
              <div className="reportList_row">
                  <a href="#" onClick={() => console.log("routing function")}>
                      Details
                  </a>
              </div>
          </div>

          <div className="reportList_item_large">
              <div className="reportList_row">Type: {report['report_type']}</div>
              <div className="reportList_row">Message: {report['message']}</div>
          </div>

          <div className="reportList_item">
              <div className="reportList_row">
                  <button className="reportList_item_button" onClick={() => {
                      onUpdateReportState(report['reference_id'], {
                          ticketState: "BLOCK"
                      })
                  }}>Block</button>
              </div>
              <div className="reportList_row">
                  <button className="reportList_item_button" onClick={() => {
                      onUpdateReportState(report['reference_id'], {
                          ticketState: "CLOSED"
                      })
                  }}>Resolve</button>
              </div>
          </div>
      </div>
    )
  }
}

ReportList.propTypes = {
    report: PropTypes.object.isRequired,
    onUpdateReportState: PropTypes.func.isRequired
};

export default ReportList;
