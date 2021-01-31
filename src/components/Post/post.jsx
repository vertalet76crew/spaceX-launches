import React from "react";

import "./post.scss";

import { formatDate } from "../../helpers/formatDate";

const Post = ({ postData }) => {
  return (
    <a
      className="post"
      href={postData.links.wikipedia}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="post__wrap-logo">
        <img
          src={postData.links.mission_patch_small}
          alt="logo"
          className="post__logo"
        />
      </div>
      <div className="post__content">
        <div className="post__header">
          <h1 className="post__title">{postData.mission_name}</h1>
          <p className="post__date">{formatDate(postData.launch_date_utc)}</p>
        </div>
        <p className="post__text">
          {postData.details ? postData.details : "Not description"}
        </p>
      </div>
    </a>
  );
};

export default Post;
