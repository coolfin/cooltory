import { Spinner } from '@geist-ui/core';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function EspPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('https://www.inven.co.kr/board/maple/2304/28788');
  });
  return (
    <div
      className={classNames(
        'w-full',
        'my-8',
        'flex items-center justify-center'
      )}
    >
      <Spinner />
    </div>
  );
}

export default EspPage;
