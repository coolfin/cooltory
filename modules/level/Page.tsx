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


        'gap-y-4',

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
          <b className='text-slate-200'> ❔ 각 서버를 돌면서 <i className='text-red-300'>버닝 필드</i>가 가장 높은 곳을 우선으로 사냥해 주세요</b> <br/>
          -10 : 직업별 튜토리얼 <br />
          -20 : [골렘의 사원3 : 파이어골렘]<br />
          -30 : [들개들의 싸움터 1 : 스펙터 들개]
        </span>
        
        <span>
          <b className='text-slate-200'> ❔ 테마던전을 <i className='text-purple-300'>엘리넬 리에나</i>로 하는 이유 : 장신구를 많이 줌</b> <br/>
          <b className='text-slate-200'> ❔ 35레벨 부터 <i className='text-cyan-300'>마이스터빌</i> 즉시이동으로 절대 경뿌 챙기기</b> <br/>
          -45 : 요정학원 엘리넬   <br />
          -60 : 리에나 해협
        </span>


        <span>
          -70 : [조용한 습지, 축축한 습지 : 드레이크] <br/>
          -85 : [붉은 산호 숲 : 포이즌 푸퍼] or [구름공원 6 : 러스터픽시] <br/>
          -95 : [유랑단의 텐트 : 갈색 모래토끼] or [갱도 4 : 경비로봇 L] <br/>
          -100: [연구소 C-2구역 : 로이드, 네오 휴로이드] or [관계자 외 출입금지 : 사이티]
        </span>
        <span>
        <b className='text-slate-200'> ❔ 101레벨 부터 좌측의 ⭐을 눌러 <i className='text-yellow-300'>메이프릴 아일랜드</i>를 절대 챙기세요</b> <br/>
          -115: [미나르숲 동쪽 경계 : 듀얼 비틀] or [하늘둥지 3: 🌟5 블러드 하프]<br/>
          -126: [삐뚤어진 시간 : 🌟26 듀얼 파이렛]<br/>
          -141: [시련의 동굴 3 : 🌟50 파이어독]
        </span>

      </div>
    </Container>
  )
}

export default Page
