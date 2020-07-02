import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div``;

const SubInfo = ({ username, publishedDate }) => {
  return (
    <SubInfoBlock>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};
export default SubInfo;
