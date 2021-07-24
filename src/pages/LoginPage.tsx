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
    <React.Fragment>
      <div>
        <LoginGithub
          clientId={process.env.REACT_APP_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText='Login to Github'
        />
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
