import React from "react";

function RepliesList({ replies }) {
  return (
    <ul>
      {replies.map((reply) => (
        <li key={reply.content} style={{ color: "green" }}>
          REPLIES {reply.content} <img src={reply.user.image} />
        </li>
      ))}
    </ul>
  );
}

export default RepliesList;
