import React, { useEffect, useState } from 'react';
import IndicinaServices from '../services/Indicina.services';
import GithubQuery from '../components/GithubQuery';

function SearchPage(props) {
  const code = props.location.state.code;

  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [countRepos, setCountRepos] = useState('');
  const [countUser, setCountUser] = useState('');
  const variablesRepo = 'name';
  const variablesUser = 'login';

  useEffect(() => {
    getAccesToken();
  }, []);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleClick = () => {
    setShowResults(true);
    setShowRepos(true);
  };

  const updateRepoCount = (countRepositoy) => setCountRepos(countRepositoy);
  const updateRepoUser = (countUser) => setCountUser(countUser);

  const getAccesToken = async () => {
    let data = await IndicinaServices.postAuthentication({ code });
    localStorage.setItem('token', data.access_token);
  };

  return (
    <React.Fragment>
      <div className='h-screen flex flex-col'>
        <div
          className={
            !showResults
              ? 'h-screen flex flex-col flex-wrap items-center'
              : 'flex flex-wrap items-center justify-center'
          }
        >
          <div className='flex items-center m-2'>
            <img
              className='h-16'
              src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
              alt='github logo'
            />
            <h2 className='text-4xl font-bold'>GitHub</h2>
          </div>
          <input
            className='border rounded-xl h-12 p-1 border-gray-400 m-2 w-1/2 sm:w-1/2 md:w-1/2'
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
            <div className='flex flex-col m-2 justify-center w-1/4 h-28 bg-white text-sm  sm:ml-16'>
              <div
                className={
                  showRepos
                    ? 'flex m-1 items-center bg-gray-200 w-11/12'
                    : 'flex m-1 items-center w-11/12'
                }
                onClick={() => setShowRepos(true)}
              >
                <label className='w-3/5'>Repositories</label>
                <label
                  className={
                    countRepos.length > 0
                      ? 'w-2/5 border rounded-xl ml-3 p-0.5 text-center bg-gray-300'
                      : ''
                  }
                >
                  {countRepos.length > 0 ? countRepos : ''}
                </label>
              </div>
              <div
                className={
                  !showRepos
                    ? 'flex m-1  items-center bg-gray-200  w-11/12'
                    : 'flex m-1  items-center w-11/12'
                }
                onClick={() => setShowRepos(false)}
              >
                <label className='w-3/5'>Users</label>
                <label
                  className={
                    countUser.length > 0
                      ? 'w-2/5 border rounded-xl ml-3 p-0.5 text-center bg-gray-300'
                      : ''
                  }
                >
                  {countUser.length > 0 ? countUser : ''}
                </label>
              </div>
            </div>
            <div className='w-3/4 sm:mx-5 md:mx-5'>
              {showRepos && (
                <GithubQuery
                  searchText={searchText}
                  repoQuery={true}
                  variables={variablesRepo}
                  repoCount={updateRepoCount}
                />
              )}
              {!showRepos && (
                <GithubQuery
                  searchText={searchText}
                  repoQuery={false}
                  variables={variablesUser}
                  repoCount={updateRepoUser}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default SearchPage;
