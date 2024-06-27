import React from "react";
import { getPostsByUser, getUserDetails, getUserDetails2 } from "../../p/[...id]/funcs/actions";
import { PostCard4 } from "@/_compo/postcards/PostCard4";
import { Profile1 } from "./Profile1";

export default async function Page({params}) {
  let postsByUsername = await getPostsByUser({ username: params.id[0] });
  let user = await getUserDetails2({username : params.id[0]});


  return (
    <div>
      <Profile1 user={user} posts={postsByUsername}/>
      {/* {postsByUsername.map((post) => (
        <PostCard4 key={post.id} post={post} />
      ))} */}

    </div>
  );
}
