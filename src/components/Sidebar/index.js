import React, { useRef } from 'react';
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
/* Hooks */
import { useGithub } from '../../infrastructure/hooks';
/* Constants */
import {
  KEY_UP,
  KEY_DOWN,
  KEY_RETURN,
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_TAB
} from '../../infrastructure/config/const';

const Sidebar = () => {
  const textInputRef = useRef(null);

  const {
    githubSearchIssuesRequest,
    githubCommentsIssueRequest,
    data: issues,
    total_count
  } = useGithub();

  const handleChange = async e => {
    e.preventDefault();
    const { value: query } = e.target;
    console.log(query, textInputRef.current.value);
    const { msg, err } = await githubSearchIssuesRequest(query);
    if(err) {
      console.log(msg);
    }
  };

  const handleSelection = async (e, { comments_url }) => {
    e.preventDefault();
    await githubCommentsIssueRequest(comments_url);
  };

  const handleKeyDown = async  (e, { comments_url }) => {
    switch (e.keyCode) {
      case KEY_ESCAPE:
        textInputRef.current.value = '';
        await githubSearchIssuesRequest('');
      break;
      case KEY_UP:
      case KEY_DOWN:
      case KEY_ENTER:
      case KEY_RETURN:
      case KEY_TAB:
        await githubCommentsIssueRequest(comments_url);
      break;
      default:
        console.log(e);
      break;
    }
  };

  const reset = async e => {
    e.preventDefault();
    textInputRef.current.value = '';
    const { msg, err } = await githubSearchIssuesRequest(textInputRef.current.value);
    if(err) {
      console.log(msg);
    }
  };

  return (
    <Container>
      <div className="sidebar__header">
        <Avatar src={Assets.logo} />
        <div className="sidebar__headerRight">
          <IconButton>
            <RotateLeft onClick={(e) => reset(e) } />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input ref={textInputRef} placeholder="Search issues by title min 3 letters" type="text" onChange={e => handleChange(e)} />
        </div>
      </div>

      <div className="sidebar__issues">
        {total_count === 0 ? (
          <Issue />
        ) : (
          issues.map((issue) => (
            <Issue key={`issue-${issue.id}`} {...issue} onClick={(e) => handleSelection(e, issue) } onKeyDown={(e) => handleKeyDown(e, issue)} />
          ))
        )}
      </div>
    </Container>
  )
};

Sidebar.propTypes = {

};

export default Sidebar;
