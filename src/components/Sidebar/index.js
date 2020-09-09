import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import {
  SearchOutlined,
  RotateLeft
} from '@material-ui/icons';
/* Style Components */
import { Container } from './styled';
/* Assets */
import Assets from '../../assets';
/* Components */
import Issue from '../Issue';

const Sidebar = props => {
  const handleChange = e => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <Container>
      <div className="sidebar__header">
        <Avatar src={Assets.logo} />
        <div className="sidebar__headerRight">
          <IconButton>
            <RotateLeft />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search issues by title" type="text" onChange={e => handleChange(e)} />
        </div>
      </div>

      <div className="sidebar__issues">
        <Issue />
        <Issue />
        <Issue />
      </div>
    </Container>
  )
};

Sidebar.propTypes = {

};

export default Sidebar;
