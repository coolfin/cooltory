import { Spinner } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function UnionPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      'https://docs.google.com/spreadsheets/d/12l0GoZA2Yyvil9sV0N9XTHDC7ym-hHi3gTPTdtjPEjE/edit?usp=sharing'
    );
  }, []);
  return <Spinner />;
}

export default UnionPage;
