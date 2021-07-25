import React, { useEffect, useState } from 'react';
import IndicinaServices from '../services/Indicina.services';
import GithubQuery from '../components/GithubQuery';
import githubLogo from '../images/githubLogo.svg';

function LoginPage(props) {
  const code = props.location.state.code;

  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const variablesRepo = 'name';
  const variablesUser = 'login';

  useEffect(() => {
    getAccesToken();
  }, [searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleClick = () => {
    setShowResults(true);
    setShowRepos(true);
  };

  const getAccesToken = async () => {
    let data = await IndicinaServices.postAuthentication({ code });
    localStorage.setItem('token', data.access_token);
  };

  return (
    <React.Fragment>
      <div className='h-screen flex flex-col '>
        <div
          className={
            !showResults
              ? 'h-screen flex flex-col items-center'
              : ' flex items-center'
          }
        >
          <div className='flex items-center m-2'>
            <img className='h-3/4' src={githubLogo} alt='github logo' />
            <h2 className='text-4xl font-bold'>GitHub</h2>
          </div>
          <input
            className='border rounded-xl h-12 border-gray-400 m-2 w-1/2 sm:w-1/2 md:w-1/2'
            type='text'
            onChange={(e) => handleChange(e)}
          ></input>
          {!showResults && (
            <button
              className='text-white text-md object-center w-1/3 border rounded-md mt-5 h-12 bg-gray-600 md:w-1/4'
              onClick={(e) => handleClick()}
            >
              Search Github
            </button>
          )}
        </div>
        {showResults && (
          <div className='flex justify-evenly bg-gray-100'>
            <div className='flex flex-col items-center justify-center h-24 mt-14 ml-16 bg-white w-1/4'>
              <button
                onClick={() => setShowRepos(true)}
                className={showRepos ? 'w-36 m-1 bg-gray-300' : 'w-36 m-1 '}
              >
                Repositories
              </button>
              <button
                onClick={() => setShowRepos(false)}
                className={!showRepos ? 'w-36 m-1 bg-gray-300' : 'w-36 m-1 '}
              >
                Users
              </button>
            </div>
            <div className='mx-16'>
              {showRepos && (
                <GithubQuery
                  searchText={searchText}
                  repoQuery={true}
                  variables={variablesRepo}
                />
              )}
              {!showRepos && (
                <GithubQuery
                  searchText={searchText}
                  repoQuery={false}
                  variables={variablesUser}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
