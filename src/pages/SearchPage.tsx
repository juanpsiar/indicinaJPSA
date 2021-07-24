import React, { useEffect, useState } from 'react';
import IndicinaServices from '../services/Indicina.services';
import GithubQuery from '../components/GithubQuery';
import './styles/SearchPage.css';

function LoginPage(props) {
  const code = props.location.state.code;
  const [accessToken, setAccessToken] = useState();
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const variablesRepo = 'name';
  const variablesUser = 'login';

  console.log('props data', props);
  let data;

  useEffect(() => {
    getAccesToken();
  }, []);

  const handleChange = (event) => setSearchText(event.target.value);
  const handleClick = () => setShowResults(true);

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
      {showResults && (
        <div className='container'>
          <GithubQuery
            searchText={searchText}
            repoQuery={true}
            variables={variablesRepo}
          />

          <GithubQuery
            searchText={searchText}
            repoQuery={false}
            variables={variablesUser}
          />
        </div>
      )}
    </div>
    // </React.Fragment>
  );
}

export default LoginPage;
