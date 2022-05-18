import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../../api/aws-exports";
import { createPost, deletePost } from "../../api/graphql/mutations";
import { listPosts } from "../../api/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import { Post } from "../../api/API";

Amplify.configure(awsExports);
const initialState = { title: "", content: "" };

const ApiAmplify: NextPage = () => {
  const [formState, setFormState] = useState(initialState);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPosts() {
    try {
      const postData: GraphQLResult<any> | Observable<object> =
        await API.graphql(graphqlOperation(listPosts));
      const post = postData.data.listPosts.items;
      setPosts(post);
    } catch (err) {
      console.log("error fetching posts");
    }
  }

  async function addPost() {
    try {
      if (!formState.title || !formState.content) return;
      const postData: GraphQLResult<any> | Observable<object> =
        await API.graphql(graphqlOperation(createPost, { input: formState }));

      setPosts([...posts, postData.data.createPost]);
      setFormState(initialState);
    } catch (err) {
      console.log("error creating post:", err);
    }
  }

  async function removePost(index: string) {
    try {
      await API.graphql(graphqlOperation(deletePost, { input: { id: index } }));

      const newPosts = posts.filter((post, postIndex) => {
        return index != post.id;
      });
      setPosts(newPosts);
    } catch (err) {
      console.log("error deleting post:", err);
    }
  }

  return (
    <div className="m-5 grid justify-items-center">
      <h1 className="text-4xl p-4 m-5">Amplify Posts List</h1>

      <div style={styles.container}>
        <input
          onChange={(event) => setInput("title", event.target.value)}
          style={styles.input}
          value={formState.title}
          placeholder="Title"
        />
        <input
          onChange={(event) => setInput("content", event.target.value)}
          style={styles.input}
          value={formState.content}
          placeholder="Content"
        />
        <button style={styles.button} onClick={addPost}>
          Create Post
        </button>
      </div>
      <div className="w-6/12">
        <ul className="list-inside my-5 list-disc rounded-md">
          {posts.map((post, index) => {
            return (
              <div className="relative w-full bg-gray-200 my-2" key={post.id}>
                <li
                  onClick={() => {
                    // コンテンツクリック時の処理を記載
                  }}
                  className="todo min-w-20 p-2 inline-block"
                >
                  <p style={styles.postTitle}>{post.title}</p>
                  <p style={styles.postContent}>{post.content}</p>
                </li>
                <button
                  className="m-2 absolute right-5"
                  onClick={() => {
                    removePost(post.id);
                  }}
                >
                  {" "}
                  x{" "}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  post: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  postTitle: { fontSize: 20, fontWeight: "bold" },
  postContent: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(ApiAmplify);
