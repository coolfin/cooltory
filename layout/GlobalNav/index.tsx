import { Container } from "@/components/Container"
import { Tabs } from "@geist-ui/core"
import classNames from "classnames"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const NAV = [
   '캐릭터 검색','육성순서','레벨링', '공략','숙제',//'유니온',
]

const NAV_NAME = [
  'search', 'order','lv', 'attack' ,'check',// 'union',
]

export const GlobalNav = () => {
  const router = useRouter();

  const [activetab, setActiveTab] = useState<string>(router.pathname)

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  return (
    <Container>

      {/* header */}
      <div className={classNames(
        'w-full',
        'h-20',


        'flex',
        'justify-between',
        'items-center',

        'py-4',

        'max-sm:flex-col'
      )}>
        {/* logo */}
        <div className={classNames(
          'w-24',
          'flex',
          'items-center',

          'font-extrabold',

          'hover:cursor-pointer',
          'hover:bg-slate-500',
          'hover:rounded-md',
        )}
          onClick={() => router.push('/')}
        >
          <img src="/reboot.jpeg" className={classNames(
            'w-10',
            'h-10',

            'rounded-md',
            'scale-75',
            'mr-2',

            'font-extrabold',
          )} />
          근붕트
        </div>

        <Tabs
          value={activetab}
          hideDivider
          onChange={(v) => {
            router.push(v)
          }}
        >
          {
            NAV.map((v, index) => (
              <Tabs.Item label={v} value={"/"+NAV_NAME[index]} key={index}></Tabs.Item>
            ))
          }
        </Tabs>

      </div>
    </Container>
  )
}
