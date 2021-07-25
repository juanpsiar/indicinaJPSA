const UserGithub = ({ usergit, key }) => {
  if (usergit.name) {
    return (
      <div className='flex flex-col bg-white my-5 border p-5 w-96' key={key}>
        <div>
          <h3>{usergit.name}</h3>

          <h2 className='font-bold text-lg my-2'>{usergit.name}</h2>
          {usergit.email && <h3 className='text-md'>{usergit.email} </h3>}
        </div>
      </div>
    );
  }
};

export default UserGithub;
