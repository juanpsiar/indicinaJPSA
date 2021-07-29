const UserGithub = ({ data, id }) => {
  if (data.name) {
    return (
      <div className='flex flex-col bg-white my-5 border p-3 w-5/6' key={id}>
        <div>
          <h3>{data.name}</h3>

          <h2 className='font-bold text-lg my-2'>{data.name}</h2>
          {data.email && <h3 className='text-md'>{data.email} </h3>}
        </div>
      </div>
    );
  }
};

export default UserGithub;
