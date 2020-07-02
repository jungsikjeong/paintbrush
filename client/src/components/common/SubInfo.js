import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  padding: 1rem;

  .subInfoBox {
    display: flex;
    justify-content: flex-end;
    width: 16rem;

    span + span:before {
      color: #ced4da;
      padding-left: 0.25rem;

      content: '\\B7'; /* 가운뎃점 문자 */
    }
  }
`;

const SLink = styled(Link)`
  font-weight: bold;
`;

const SubInfo = ({ username, publishedDate }) => {
  return (
    <SubInfoBlock>
      <div className="subInfoBox">
        <span>
          <SLink to={`/@${username}`}>{username}</SLink>
        </span>
        <span>{new Date(publishedDate).toLocaleDateString()}</span>
      </div>
    </SubInfoBlock>
  );
};
export default SubInfo;
