import React, { useState } from 'react'
import classes from './Styles.module.css'
import { connect } from 'react-redux';
import { filterVideos } from '../../actions'
import PropTypes from 'prop-types';

const FormFilter = ({ filterVideos }) => {
  const filterByCount = ['All', '10', '20', '30', '40']
  const filterByPublishedDate = ['ASC', 'DES']
  const [filters, setFilters] = useState({ count: '', date: ''})

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
    filterVideos(filters);
    setFilters({count: '', date: ''})
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className={classes.FilterForm}>
      <select name="count" onChange={(e) => setFilters({...filters, count: e.target.value})}>
        <option value=''>Number of videos</option>
        {filterByCount.map(option => <option value={option}>{option}</option>)}
      </select>
      <select name="date" onChange={(e) =>  setFilters({...filters, date: e.target.value})}>
        <option value=''>Publish Date</option>
        {filterByPublishedDate.map(option => <option value={option}>{option}</option>)}
      </select>
      <button type="submit">Filter</button>
    </form>
  )
};

FormFilter.propTypes = {
  filterVideos: PropTypes.func.isRequired
}

export default connect(null, { filterVideos })(FormFilter);