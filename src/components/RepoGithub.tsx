const RepoGithub = ({ repogit }) => {
  console.log('repogit', repogit);
  return (
    <div>
      <h3>Repo</h3>
      {repogit.name}
    </div>
  );
};

export default RepoGithub;
