import { Post } from "../../api/content/route";

export const revalidate = 420;

interface Props {
  params: { slug: string; }
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    res => res.json()
  );

  return posts.map(post => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json());
  const post = posts.find(post => post.slug === params.slug)!;
  return (
    <div>
      <h1 className="font-sans text-xl font-semibold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )

}