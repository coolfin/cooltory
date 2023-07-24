import { Container } from '@/components/Container';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

function ErrorPage() {
  return (
    <Container
      className={classNames(
        'h-20',

        'flex',
        'flex-col',

        'justify-center',
        'items-center'
      )}
    >
      <div className={classNames('text-xl', 'mb-4', 'text-gray-300')}>
        ver 3.0 이후로 페이지가 변경되었습니다.
      </div>
      <Link href="/" replace legacyBehavior>
        <a>홈으로</a>
      </Link>
    </Container>
  );
}

export default ErrorPage;
