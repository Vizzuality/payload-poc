import { redirect } from 'next/navigation';
import React, { FC, ReactNode } from 'react';
import { me } from '@/actions/auth';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
  const user = await me();

  console.log('user', user);

  if (!user) {
    redirect('/sign-in');
    return null;
  }
  return <>{children}</>;
}

export default Layout;