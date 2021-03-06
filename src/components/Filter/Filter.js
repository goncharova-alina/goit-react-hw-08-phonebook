import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';

const Filter = ({ value, onChangeFilter }) => (
  <div className={s.wrapper}>
    <label className={s.field}>
      <span className={s.label}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        placeholder="Enter to find"
        onChange={onChangeFilter}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(phoneBookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
