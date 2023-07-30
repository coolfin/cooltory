import { Container } from '@/components/Container';
import styled from '@emotion/styled';
import { Tabs } from '@geist-ui/core';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <Container
      className={classNames(
        'w-full',
        'h-96',
        'my-28',

        'flex',
        'flex-col',
        'justify-center',
        'items-center',

        'text-3xl',
        'text-white',
        'font-extrabold'
      )}
    >
      환영합니다 🙌
      <br />
    </Container>
  );
}
