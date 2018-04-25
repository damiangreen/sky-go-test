import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleItemCompletion } from "../../logic/todos";

export class ToggleButton extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  };

  onToggleClicked = () => {
    const { onToggle, id } = this.props;
    onToggle(id);
  };

  render() {
    const { checked } = this.props;
    return (
      <span>
        <label>Complete</label>
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={this.onToggleClicked}
        />
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleItemCompletion(id))
});

export default connect(null, mapDispatchToProps)(ToggleButton);
