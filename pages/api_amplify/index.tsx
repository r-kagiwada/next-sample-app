import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../../src/aws-exports";
import { createPost, deletePost } from "../../src/graphql/mutations";
import { listPosts } from "../../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import { Post } from "../../src/API";

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
      <AmplifySignOut />

      <div className="w-[400px] my-0 flex flex-col justify-center p-5">
        <input
          onChange={(event) => setInput("title", event.target.value)}
          className="border-none bg-gray-200 mb-2.5 p-2 text-[18px]"
          value={formState.title}
          placeholder="Title"
        />
        <input
          onChange={(event) => setInput("content", event.target.value)}
          className="border-none bg-gray-200 mb-2.5 p-2 text-[18px]"
          value={formState.content}
          placeholder="Content"
        />
        <button
          className="bg-gray-900 text-white outline-none text-[18px] py-3"
          onClick={addPost}
        >
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
                  <p className="font-bold text-[20px]">{post.title}</p>
                  <p className="mb-0">{post.content}</p>
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

export default withAuthenticator(ApiAmplify);
