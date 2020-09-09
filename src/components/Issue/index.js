import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
/* Style Components */
import { Container } from './styled';
/* Assets */
import Assets from '../../assets';

const Issue = props => {
  return (
    <Container>
      <Avatar src={Assets.logo} /> issue...
    </Container>
  )
};

Issue.propTypes = {

};

export default Issue;
