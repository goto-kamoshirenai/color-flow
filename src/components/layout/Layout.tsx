import { LocaleProvider } from '@/contexts/LocaleContext';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocaleProvider>
      { children }
    </LocaleProvider>
  );
}

export default Layout;