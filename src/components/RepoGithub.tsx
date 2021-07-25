const RepoGithub = ({ repogit, id }) => {
  const checkValues = () => {
    let dataRepo = '';
    if (repogit.primaryLanguage !== null && repogit.primaryLanguage.name) {
      dataRepo += `${repogit.primaryLanguage.name} `;
    }
    if (repogit.licenseInfo != null && repogit.licenseInfo.name) {
      dataRepo += `| ${repogit.licenseInfo.name} `;
    }
    if (repogit.latestRelease && repogit.latestRelease.updatedAt) {
      dataRepo += `| ${repogit.latestRelease.updatedAt}`;
    }

    return dataRepo;
  };

  return (
    <div className='flex flex-col bg-white my-5 border p-5 w-96' key={id}>
      <h2 className='font-bold text-lg my-2'>{repogit.name}</h2>
      <h3 className='text-md'>{repogit.description.substring(0, 60)}... </h3>
      <div className='text-gray-600'>{checkValues()}</div>
    </div>
  );
};

export default RepoGithub;
