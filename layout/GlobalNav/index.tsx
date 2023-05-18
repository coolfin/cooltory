import { Container } from "@/components/Container"
import { Tabs } from "@geist-ui/core"
import classNames from "classnames"
import { useRouter } from "next/router"

const NAV = [
  '유니온', '장비', '레벨링', '숙제체커'
]

const NAV_NAME = [
  'union', 'eq', 'lv', 'check'
]

export const GlobalNav = () => {
  const router = useRouter();
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
          initialValue="1"
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
