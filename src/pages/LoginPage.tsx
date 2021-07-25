import React from 'react';
import LoginGithub from 'react-login-github';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const onSuccess = (response) => {
    history.push('/searchpage', response);
  };
  const onFailure = (response) => console.error('error', response);
  let history = useHistory();
  return (
    <React.Fragment>
      <div className='h-screen flex flex-col justify-center items-center'>
        <LoginGithub
          className='text-white text-lg object-center w-1/2 border rounded-md bg-gray-600 sm:w-1/3 md:w-1/4'
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
