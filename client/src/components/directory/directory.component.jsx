import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import {DirectoryContainer} from './directory.styles';

// when we import connect, after that we made changes from class component to a function and remove all constructor 
// and other default declaration

const Directory = ({sections}) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStatesToProps = createStructuredSelector({
  sections: selectDirectorySections
}) ;

export default connect(mapStatesToProps)(Directory);
