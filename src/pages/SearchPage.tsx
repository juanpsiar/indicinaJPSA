import React, { useEffect, useState } from 'react';
import IndicinaServices from '../services/Indicina.services';
//import ExchangeRates from '../services/currency.services';
import GithubGraphql from '../services/githubgraphql.services';

function LoginPage(props) {
  const code = props.location.state.code;
  const [accessToken, setAccessToken] = useState();
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);

  let data;

  useEffect(() => {
    getAccesToken();
  }, []);

  const handleChange = (event) => {
    console.log('value input', event.target.value);
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    // El componente que busca y muestra los GIFs solo se mostrara
    // cuando showResults sea true.
    setShowResults(!showResults);
  };

  const getAccesToken = async () => {
    data = await IndicinaServices.postAuthentication({ code });

    console.log(`access token ${data.access_token}`);
    localStorage.setItem('token', data.access_token);
    setAccessToken(data);
  };
  return (
    // <React.Fragment>
    <div>
      <label>GitHub</label>
      <input
        type='text'
        onChange={(e) => handleChange(e)}
        placeholder='Search '
      ></input>
      <button onClick={(e) => handleClick()}>Search Github Users</button>
      {/* {showResults && <ExchangeRates />} */}
      {showResults && <GithubGraphql searchText={searchText} />}
    </div>
    // </React.Fragment>
  );
}

export default LoginPage;
