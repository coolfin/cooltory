import { characters } from '@/data'
import { Card, Collapse, Table } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export const OrderPage = () => {
  return (
    <div className={classNames(
      'max-sm:overflow-x-scroll',
      'max-sm:text-xs',
      'max-sm:whitespace-nowrap',

      'py-4',
    )}>
      <div className={classNames(
        'w-full',
        'grid',
        'grid-cols-1',
        'gap-4',
        'max-sm:whitespace-normal',

        'py-2',

      )}>
        <Collapse title='사냥링크[12개] 🦦' shadow style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>
          <i className={classNames(
            'text-xs',
          )}>
            팬텀(데들리 인스팅트) <br />
            제논(하이브리드 로직) <br />
            데몬어벤져(와일드 레이지)<br />
            키네시스(판단) <br />
            일리움(전투의 흐름)<br />
            에반(룬 퍼시스턴스)<br />
            시그너스 직업군(시그너스 블레스)<br />
            아크(무아)<br />
            호영(자신감)<br />
            모험가 궁수(어드벤쳐러 큐리어스)<br />
            라라(자연의 벗)<br />
            선택 3개 👉 <br />
            메르세데스(엘프의 축복)<br />
            카데나(인텐시브 어썰트) <br />
            칼리(이네이트 기프트) <br/>
          </i>

        </Collapse>

        <Collapse title='보스링크[12개] 👿' shadow style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>
          <i className={classNames(
            'text-xs',
          )}>
            데몬슬레이어(데몬스 퓨리) <br />
            데몬어벤져(와일드 레이지) <br />
            모험가 법사(임피리컬 널리지) <br />
            아크(무아) <br />
            엔젤릭버스터(소울 컨트랙트) <br />
            키네시스(판단) <br />
            모험가도적(시프 커닝) <br />
            카인(프라이어 프리퍼레이션) <br />
            아델(노블레스) <br />
            선택 3개 👉 <br />
            카데나(인텐시브 어썰트) <br />
            루미너스(퍼미에이트) <br />
            팬텀(데들리 인스팅트) <br />
            시그너스 직업군(시그너스 블레스) <br />
            레지스탕스 직업군(스피릿 오브 프리덤)  <br />
            모험가 궁수(어드벤쳐러 큐리어스)<br />
          </i>
        </Collapse>
      </div>


      <Table data={characters}>
        <Table.Column prop="name" label="직업" />
        <Table.Column prop="link" label="링크스킬 효과" />
        <Table.Column prop="union" label="유니온 점령효과" />
        <Table.Column prop="order" label="우선순위" />
      </Table>
    </div>
  )
}

export default OrderPage