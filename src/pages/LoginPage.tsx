import React from 'react';
import LoginGithub from 'react-login-github';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const onSuccess = (response) => {
    console.log('onSuccess ', response);
    history.push('/searchpage', response);
  };
  const onFailure = (response) => console.error('error', response);
  let history = useHistory();
  return (
    // <React.Fragment>
    <div>
      <LoginGithub
        clientId='4f262cc9e20d3043da02'
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText='Login to Github'
      />
    </div>
    // </React.Fragment>
  );
}

export default LoginPage;
