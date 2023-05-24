import styled from '@emotion/styled'
import classNames from 'classnames'
import React from 'react'

export const TheifInfo = ( { visible } : {visible:boolean}) => {
  return (
    <InfoContainer visible={visible}>
      <div className='txt'>
        <i className='font-extrabold'>1 스테이지 [눈덮인 벌판]</i>
        <p>2, 3층에서 <i className='underline decoration-emerald-500'>궁수가 피격되지 않게 신경쓰며</i> 잡몹을 사냥한다</p>
      </div>


      <div className={classNames(
        'flex',
        'justify-between',
        'items-center',
      )}>
        <div className='w-1/2 txt'>

          <i className='font-extrabold'>2 스테이지 [깎여나간 절벽 : 페페]</i>
          <p>맨 윗층부터 <i className='underline decoration-blue-500'>예티들을 잡으며</i> 내려간다</p>
          <p>10레벨이 되면 눈덩이를 굴리는 페페를 다같이 백어택으로만 잡는다</p>
        </div>
        <div> | </div>
        <div className='w-1/2 txt'>

          <i className='font-extrabold'>2 스테이지 [우두머리의 영역 : 라이칸스로프 알파]</i>
          <p>1, 2층의 <i className='underline decoration-gray-500'>늑대들을 잡는다</i></p>
          <p>10레벨이 되면 도적의 베놈 패시브로만 잡을 수 있는 라이칸스로프 알파를 <i className='underline decoration-cyan-500'>트리플 스로우로</i> 잡는다</p>
        </div>
      </div>
      <div className='txt'>
        <i className='font-extrabold'>3, 4 스테이지 [폐광 : 리치], [동굴: 라바독]</i>
        <p>이후 바로 4번째 맵으로 이동, 트리플 스로우로 파이어독을 잡다가 17레벨이 되면 폐광으로 이동하여 혼자 리치를 잡는다
          리치 사거리 끝거리에서 조금씩 뒤로 빼며 딜하면 되며, <i className='underline decoration-emerald-500'>보스를 포탈쪽으로 유도</i>하며 딜링하여 시간 낭비를 줄인다</p>
      </div>

      <div className='txt'>
        <i className='font-extrabold text-red-400'>자쿰 [BOSS]</i>
        <p>팔을 위에서부터 1,2,3,4 라고 했을때 <i className='underline decoration-red-500'> 우측 1,2 좌측 3을 우선으로 깬다</i></p>
      </div>

    </InfoContainer>
  )
}

export default TheifInfo

const InfoContainer = styled.div(({ visible }: {visible : boolean}) => ({
  fontWeight: 'normal',
  display: visible ? 'none' : 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '4rem',

  '& p': {
      opacity: 0.8,
      fontSize: '0.8rem',
  },

  '& .txt': {
      padding: '0 3rem',
  },
}));