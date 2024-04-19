import Link from "next/link";
//"use clients";
export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">E-mail: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
