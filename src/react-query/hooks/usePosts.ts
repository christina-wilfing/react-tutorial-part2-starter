import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userID: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userID ? ["users", userID, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userID
          }
        })
        .then((res) => res.data),
    staleTime: 60 * 1000,
  });

export default usePosts;
