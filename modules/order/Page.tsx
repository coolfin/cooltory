import { Container } from '@/components/Container';
import { characters } from '@/data';
import { Collapse, Table } from '@geist-ui/core';
import classNames from 'classnames';
import React from 'react';

export const OrderPage = () => {
  return (
    <Container
      className={classNames(
        'max-sm:overflow-x-scroll',
        'max-sm:text-xs',
        'max-sm:whitespace-nowrap',

        'py-4',
        'mt-12'
      )}
    >
      <div
        className={classNames(
          'w-fit',

          'max-sm:font-sm',

          'mb-4',
          'p-2',

          'rounded-md',
          'hover:bg-white'
        )}
      >
        <a
          href="https://docs.google.com/spreadsheets/d/12l0GoZA2Yyvil9sV0N9XTHDC7ym-hHi3gTPTdtjPEjE/edit?usp=sharing"
          target="_blank"
        >
          스프레드 시트에서 한 눈에 확인하기{' '}
        </a>
      </div>
      {/* <div className={classNames(
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
            아크(무아)<br />
            호영(자신감)<br />
            메르세데스(엘프의 축복)<br />
            모험가 궁수(어드벤쳐러 큐리어스)<br />
            라라(자연의 벗)<br />
            선택 2개 👉 <br />
            카데나(인텐시브 어썰트) <br />
            칼리(이네이트 기프트) : 모궁 링크 제외 시 대체 <br/>
            시그너스 직업군(시그너스 블레스) : 5레벨 시  제논 대체<br />
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
            루미너스(퍼미에이트) <br />
            팬텀(데들리 인스팅트) <br />
            선택 2개 👉 <br />
            카데나(인텐시브 어썰트) <br />
            아델(노블레스) <br />
            시그너스 직업군(시그너스 블레스) <br />
            레지스탕스 직업군(스피릿 오브 프리덤)  <br />
            모험가 궁수(어드벤쳐러 큐리어스)<br />
          </i>
        </Collapse>
      </div> */}

      <Table data={characters}>
        <Table.Column prop="name" label="직업" />
        <Table.Column prop="link" label="링크스킬 효과" />
        <Table.Column prop="union" label="유니온 점령효과" />
        <Table.Column prop="order" label="링크 순서" />
        <Table.Column prop="uorder" label="유니온 순서" />
      </Table>
    </Container>
  );
};

export default OrderPage;
