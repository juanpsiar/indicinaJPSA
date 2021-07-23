import React from 'react';
import IndicinaServices from '../services/Indicina.services';

function LoginPage(props) {
  const code = props.location.state.code;
  let data;
  const getAccesToken = async () => {
    data = await IndicinaServices.postAuthentication({ code });

    console.log(`access token ${data.access_token}`);
  };
  return (
    // <React.Fragment>
    <div>
      <label>GitHub</label>
      <input type='text' placeholder='Search '></input>
      <button onClick={getAccesToken}>Search Github Users</button>
    </div>
    // </React.Fragment>
  );
}

export default LoginPage;
