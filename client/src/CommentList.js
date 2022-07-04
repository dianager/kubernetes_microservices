import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    const { status, content: commentContent } = comment;

    if (status === "approved") {
      content = commentContent;
    }

    if (status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
