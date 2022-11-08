import React from "react";
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
} from '../../utils/auth';
import styled from 'styled-components'
import Link from "next/link";

const AuthorizationPage = ({ profile }) => {
  return (
    <>
      <h3>Authorization</h3>
      <p>Content is only available for authenticated users with admin role</p>
      {
        profile && profile.role === 'admin'
          ?
          <>
            <Block>
              <h3>Content for users with admin role</h3>
              <p>
                Authorization allows to see specific content based on user&apos;s role,
                for instance this content is available only for admin users.
              </p>
            </Block>
          </>
          :
          <>
            <p>
              Please <Link href='/authentication-page/jwt' style={{color: '#0099cc'}}>Log In</Link> with an admin user
            </p>
          </>
      }
    </>
  )
}

export default AuthorizationPage

const Block = styled.div`
  display: flex;
  width: 512px;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
  h3, p {
    margin: 4px;
  }
`

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';
  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}
