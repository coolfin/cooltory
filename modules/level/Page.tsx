import { Container } from '@/components/Container'
import { Card, Toggle } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export const Page = () => {
  return (
    <Container>

      <Card hoverable shadow>
        <p className={classNames(
          'py-2',
          'text-sm',
          'font-extrabold',

          'hover:cursor-pointer',
        )}>💡 더 효율적인 레벨업 루트가 있다면 쿨핀에게..</p>
      </Card>

      <div className={classNames(
        'w-full',
        'h-fit',

        'my-12',
        'py-4',


        'gap-y-2',

        'flex',
        'flex-col',
        'justify-center',

        'text-sm',
        'text-indigo-200',

      )}>
        <h3 className='text-white'>준비물 🧳</h3>
        <span className={classNames(
          'text-indigo-200',
          'mb-12',
        )}>
          키우려는 직업의 블랙 보조무기를 메모리아에서 사전에 뚫어놓기 <br />
          몬스터파크 익스트림 골드 🧂 <br />
          몬스터파크 익스트림 그린 🧂 <br />
          몬스터파크 익스트림 레드(공격력) / 블루(마력)  🧂<br />
          새싹칭호 <a onClick={() => {
            alert('길라잡이 30레벨 보상획득으로 얻을 수 있는 \n개꿀 쑥쑥 새싹 칭호입니다🌟\n설치 칸에 있으며, 창고를 통해 옮길 수 있습니다.')
          }}>🌱</a> <br />
          경험치쿠폰(3배짜리 1개 2배는 선택) </span>


        <h3 className='text-white'>141 루트⚡</h3>
        <span>
          -10 : 직업별 튜토리얼 <br />
          -20 : [골렘의 사원3 : 파이어골렘]<br />
          -30 : [들개들의 싸움터 1 : 스펙터 들개]
        </span>
        
        <span>
          <b className='text-slate-200'> ❔ 테마던전을 엘리넬 리에나로 하는 이유 : 장신구를 많이 줌</b> <br/>
          <b className='text-slate-200'> ❔ 35레벨 부터 마이스터빌 즉시이동으로 절대 경뿌 챙기기</b> <br/>
          -45 : 요정학원 엘리넬   <br />
          -60 : 리에나 해협
        </span>


        <span>
          60-70 : 드레이크 <br/>
          70-80 : 적당한 오르비스 또는 아리안트 아무 사냥터 <br/>
          80-90 : 아리안트 까만 모래토끼 <br/>
          90-100: C2또는 관출 
        </span>


        <span>
          (101때 꼭 이벤트 다 받기 + 6트6블 사전작업 = 스타포스 등등)<br/>
          100-110: 비틀 또는 블러드하프 (경쿠 2배 1개)<br/>
          110-130: 듀얼파이렛(삐뚤어진 시간)<br/>
          130-141: 파이어불독 (2배 1개 안빨아도 댐)
        </span>

      </div>
    </Container>
  )
}

export default Page
