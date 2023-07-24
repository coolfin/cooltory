import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const NAV = [
  '캐릭터 검색',
  '육성순서',
  '레벨링',
  '공략',
  '숙제', //'유니온',
];

const NAV_NAME = [
  'search',
  'order',
  'lv',
  'attack',
  'check', // 'union',
];

export const GlobalNav = () => {
  const router = useRouter();

  const [activetab, setActiveTab] = useState<string>(router.pathname);

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  return (
    <div>
      {/* header */}
      <div
        className={classNames(
          'w-full',

          'py-4',

          'max-sm:flex justify-center'
        )}
      >
        {/* logo */}
        <Link href="/" replace>
          <Logo />
        </Link>

        {/* <Tabs
          value={activetab}
          hideDivider
          onChange={(v) => {
            router.push(v);
          }}
        >
          {NAV.map((v, index) => (
            <Tabs.Item
              label={v}
              value={'/' + NAV_NAME[index]}
              key={index}
            ></Tabs.Item>
          ))}
        </Tabs> */}
      </div>
    </div>
  );
};
