import React from 'react';
import IndicinaServices from '../services/Indicina.services';

function LoginPage(props) {
  const code = props.location.state.code;
  const getAccesToken = () => {
    const data = IndicinaServices.postAuthentication(code);
    console.log(`response auth ${data}`);
  };
  return (
    // <React.Fragment>
    <div>
      <label>GitHub</label>
      <input type='text' placeholder='Search '></input>
      <button onClick={getAccesToken}>Search Github</button>
    </div>
    // </React.Fragment>
  );
}

export default LoginPage;
