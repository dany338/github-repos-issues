import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import {
  InsertEmoticon,
  Send,
  RotateLeft
} from '@material-ui/icons';
/* Style Components */
import { Container } from './styled';
/* Assets */
import Assets from '../../assets';
/* Hooks */
import { useGithub } from '../../infrastructure/hooks';

const Content = props => {
  const { githubCommentsIssueRequest, comments } = useGithub();

  const reset = async e => {
    e.preventDefault();
    await githubCommentsIssueRequest('');
  };

  return (
    <Container>
      <div className="content__header">
        <Avatar src={Assets.logo} />
        <div className="content__headerInfo">
          <h3>Facebook</h3>
          <p>Repo: react...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <RotateLeft onClick={(e) => reset(e) } />
          </IconButton>
        </div>
      </div>

      <div className="content__body">
        {comments.map((comment) => (
          <div key={`comment-${comment.id}`} className="content__message">
            <span className="content__name">{comment.user.login}</span>
            <Avatar src={comment.user.avatar_url} /> {comment.body}
            <span className="content__timestamp">
              {new Date(comment.created_at).toUTCString()}
            </span>
          </div>
        ))}
      </div>

      <div className="content__footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a comment" type="text" />
          <button type="submit">Send a comment</button>
        </form>
        <Send />
      </div>
    </Container>
  )
};

Content.propTypes = {

};

export default Content;
