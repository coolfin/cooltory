import styled from "@emotion/styled"
import { Tabs } from "@geist-ui/core";
import classNames from "classnames";


const NAV = [
  '유니온', '장비', '레벨링', '공략'
]
export default function Home() {
  return (
    <Container>
      {/* header */}
      <div className={classNames(
        'w-full',
        'h-16',

        'bg-red-500',

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
        )}>
          testsssss
        </div>

        <Tabs 
          initialValue="1"
          hideDivider
        >
          {
            NAV.map((v,index)=> (
               <Tabs.Item label={v} value={v} key={index}>s</Tabs.Item>
            ))
          }
        </Tabs>

      </div>
    </Container>
  )
}

const Container = styled.div({
  maxWidth: '1248px',
  minWidth: '368px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 24px',
  boxSizing: 'border-box',

});