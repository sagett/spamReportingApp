import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateReportState, fetchInitialData } from '../../action';
import ReportList from '../report/ReportList';

const mapStateToProps = state => {
    return {
        reports: state.reports
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchInitialData: () => dispatch(fetchInitialData()),
    updateReportState: (id, payload) => dispatch(updateReportState(id, payload))
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <div className = "reports">
        <h2>Reports</h2>
        <ul>
          {this.props.reports.map((report) => {
                    return <ReportList
                        key={report['reference_id']}
                        report={report}
                        onUpdateReportState={(id, payload) => {
                            this.props.updateReportState(id, payload)
                        }}
                        />
                })}
        </ul>
      </div>
    )
  }
}

Main.propType = {
  fetchInitialData: PropTypes.func,
  updateReportState: PropTypes.func,
  reports: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
