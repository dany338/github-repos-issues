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

const Content = props => {
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
            <RotateLeft />
          </IconButton>
        </div>
      </div>

      <div className="content__body">
        <p className="content__message">
          <span className="content__name">....</span>
          This is a comment
          <span className="content__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="content__message chat__reciever">
          <span className="content__name">....</span>
          This is a comment
          <span className="content__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
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
