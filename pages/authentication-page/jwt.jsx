import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'js-cookie';

/* middleware */
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from '../../utils/auth';

/* components */
import Login from 'components/Login';

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* login schemas */
const FORM_DATA_LOGIN = {
  email: {
    value: '',
    label: 'Email',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: 'Please insert valid email',
    },
  },
  password: {
    value: '',
    label: 'Password',
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid password',
    },
  },
};

export default function JWTPage(props) {
  const { baseApiUrl, profile } = props;
  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  function onChangeHandler(e) {
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    /* validation handler */
    validationHandler(stateFormData, e);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    /* email */
    data = { ...data, email: data.email.value || '' };
    /* password */
    data = { ...data, password: data.password.value || '' };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      setLoading(!loading);
      const loginApi = await fetch(`${baseApiUrl}/auth`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(error => {
        console.error('Error:', error);
      });
      let result = await loginApi.json();
      if (result.success && result.token) {
        Cookies.set('token', result.token);
        // window.location.href = referer ? referer : "/";
        // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
        Router.push('/authentication-page/jwt');
      } else {
        setStateFormMessage(result);
      }
      setLoading(false);
    }
  }

  function validationHandler(states, e) {
    const input = (e && e.target.name) || '';
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} min ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} max ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === 'object'
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach(item => {
        item.forEach(field => {
          errors[item[0]] = '';
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} min ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} max ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === 'object') {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
  }

  function handleOnClickLogout(e) {
    setLogout(e);
  }

  return (
    <div className="container">
      <main>
        <h2>JWT Authentication</h2>
        {!profile ? (
          <>
            <h3>Login to continue</h3>
            <p className="description">
              Available accounts :
            </p>
            <table style={{border: '1px solid gray'}}>
              <thead>
                <tr>
                  <th>email</th>
                  <th>password</th>
                  <th>role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    test1@test.com
                  </td>
                  <td>
                    password
                  </td>
                  <td>
                    admin
                  </td>
                </tr>
                <tr>
                  <td>
                    test2@test.com
                  </td>
                  <td>
                    password
                  </td>
                  <td>
                    user
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <Login
                props={{
                  onSubmitHandler,
                  onChangeHandler,
                  loading,
                  stateFormData,
                  stateFormError,
                  stateFormMessage,
                }}
              />
            </div>
          </>
        ) : (
          <div>
            {/* <Link href={{ pathname: '/about' }}>
              <a style={{ marginRight: '.75rem' }}>&bull; About Page</a>
            </Link> */}
            <h3>Logged in</h3>
            <p>
              This content is only shown for authenticated users
            </p>
            <button onClick={e => handleOnClickLogout(e)}>Logout</button>
          </div>
        )}
      </main>
    </div>
  );
}

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