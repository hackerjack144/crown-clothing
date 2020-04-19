import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// when we import connect, after that we made changes from class component to a function and remove all constructor 
// and other default declaration

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStatesToProps = createStructuredSelector({
  sections: selectDirectorySections
}) ;

export default connect(mapStatesToProps)(Directory);
