import React from "react";

import Post from "../Post/post";

const PostFilter = ({ postData, dirty, activeFilter }) => {
  if (!dirty) {
    return <Post postData={postData} />;
  }

  return postData.launch_site.site_name == activeFilter ||
    postData.rocket.rocket_name === activeFilter ? (
    <Post postData={postData} />
  ) : null;
};

export default PostFilter;
