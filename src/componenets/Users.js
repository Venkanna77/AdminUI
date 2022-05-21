const Users = ({ users }) => {
  const test = () => {};
  return (
    <section>
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {users.map((user) => (
            <tr className="border_bottom " key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input
                  type="text"
                  className="input"
                  onChange={() => test()}
                  value={user.name}
                />
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
