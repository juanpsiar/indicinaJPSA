const RepoGithub = ({ data, id }) => {
  const checkValues = () => {
    let dataRepo = '';
    if (data.primaryLanguage !== null && data.primaryLanguage.name) {
      dataRepo += ` ${data.primaryLanguage.name} `;
    }
    if (data.licenseInfo != null && data.licenseInfo.name) {
      if (dataRepo.length > 0) {
        dataRepo += `| ${data.licenseInfo.name} `;
      } else {
        dataRepo += `${data.licenseInfo.name} `;
      }
    }
    if (data.latestRelease && data.latestRelease.updatedAt) {
      if (dataRepo.length > 0) {
        dataRepo += `| ${data.latestRelease.updatedAt}`;
      } else {
        dataRepo += ` ${data.latestRelease.updatedAt}`;
      }
    }

    return dataRepo;
  };

  return (
    <div className='flex flex-col bg-white my-5 border p-3 w-5/6' key={id}>
      <h2 className='font-bold text-lg my-2'>{data.name}</h2>
      <h3 className='text-md'>{data.description.substring(0, 60)}... </h3>
      <div className='text-gray-600'>{checkValues()}</div>
    </div>
  );
};

export default RepoGithub;
