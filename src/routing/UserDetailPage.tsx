import { log } from "console";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log(useSearchParams());

  return <p>User</p>;
};

export default UserDetailPage;
