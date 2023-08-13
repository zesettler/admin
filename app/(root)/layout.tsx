// import { redirect } from 'next/navigation';
// import { auth } from '@clerk/nextjs';

// import prismadb from '@/lib/prismadb';

// export default async function SetupLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const { userId } = auth();

//   if (!userId) {
//     redirect('/sign-in');
//   }

//   const store = await prismadb.store.findFirst({
//     where: {
//       userId,
//     }
//   });

//   if (store) {
//     redirect(`/${store.id}`);
//   };

//   return (
//     <>
//       {children}
//     </>
//   );
// };


import { useRouter } from 'next/router';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  const router = useRouter();

  if (!userId) {
    router.push('/sign-in');
    return null; // You may want to return something here or remove the return statement if not needed
  }

  // Assuming the usage of Prisma is correct, you should handle any errors properly
  try {
    const store = await prismadb.store.findFirst({
      where: {
        userId,
      },
    });

    if (store) {
      router.push(`/${store.id}`);
      return null; // You may want to return something here or remove the return statement if not needed
    }
  } catch (error) {
    console.error('Error fetching store:', error);
    // Handle the error as appropriate for your application
  }

  return <>{children}</>;
}
