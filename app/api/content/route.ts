import { NextResponse } from "next/server";

export interface Post {
  title: string;
  content: string;
  slug: string;
}

const posts: Post[] = [
  {
    title: "First Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "first-post"
  },
  {
    title: "Second Post",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "second-post"
  },
  {
    title: "Third Post",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "third-post"
  },
    {
      title: "Fourth Post",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      slug: "fourth-post"
    },
    {
      title: "Fifth Post",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      slug: "fifth-post"
    },
    {
      title: "Sixth Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "sixth-post"
    },
    {
      title: "Seventh Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      slug: "seventh-post"
    },
    {
      title: "Eighth Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "eighth-post"
    }
];

export async function GET() {
  return NextResponse.json(posts);
}