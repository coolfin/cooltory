import { Container } from '@/components/Container';
import { Button } from '@geist-ui/core';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  function handleDiscord() {
    router.push('https://discord.gg/Hm2ezTUWwk');
  }

  return (
    <Container
      className={classNames(
        'w-full',
        'h-96',
        'my-28',

        'flex',
        'flex-col',
        'justify-center',
        'items-center'
      )}
    >
      <p className={classNames('text-3xl', 'text-white', 'font-extrabold')}>
        환영합니다 🙌
      </p>
      <br />
      <Button onClick={handleDiscord}>뽀삐길드 디스코드 바로가기</Button>
    </Container>
  );
}
