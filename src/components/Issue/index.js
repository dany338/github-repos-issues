import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip } from '@material-ui/core';
import { Face } from '@material-ui/icons';
/* Style Components */
import { Container } from './styled';
/* Assets */
import Assets from '../../assets';
/* Hooks */
import { dateFormat } from '../../infrastructure/config/utils';

const Issue = ({ id = 0, number = 0, title = '', labels = [], comments = 0, created_at = '', onClick, onKeyDown, tabIndex }) => {
  const createdAt = dateFormat(created_at);

  if(title === '') return null;

  return (
    <Container tabIndex={0} onClick={onClick} onKeyDown={onKeyDown}>
      <Avatar src={Assets.logo} />
      <div className="issue__info">
        <h2>{title} - <small>{createdAt}</small></h2>
        <h4>{`# ${number} - comments: ${comments}`}</h4>
        {labels.map((label) => (
          <>
            <Chip
              key={label.node_id}
              size="small"
              icon={<Face />}
              label={label.name}
              style={{ backgroundColor: `#${label.color}` }}
            />
            {' '}
          </>
        ))}
      </div>
    </Container>
  )
};

Issue.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number,
  title: PropTypes.string,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      node_id: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      default: PropTypes.bool,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.any])
    })
  ),
  comments: PropTypes.number,
  created_at: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Issue.defaultProps = {
  id: 0,
  number: 0,
  title: '',
  labels: [],
  comments: 0,
  created_at: '',
  onClick: () => { },
  onKeyDown: () => { },
};

export default Issue;
