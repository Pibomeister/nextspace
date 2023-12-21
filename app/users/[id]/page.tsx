/* eslint-disable @next/next/no-img-element */
// import FollowButton from '@/components/FollowButton/FollowButton';

import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import FollowButton from '../../../components/FollowButton/FollowButton';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <div className="max-w-lg mx-auto py-4">
      <h1 className="text-xl font-semibold text-gray-800">{name}</h1>

      <img
        className="w-72 mx-auto my-4 rounded"
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />

      <h3 className="text-lg font-medium text-gray-700">Bio</h3>
      <p className="text-gray-600">{bio}</p>

      <div className="mt-4 flex w-full justify-center">
        <FollowButton targetUserId={params.id} />
      </div>
    </div>

  );
}