import styled from '@emotion/styled'
import classNames from 'classnames'
import React from 'react'

export const WarInfo = ({ visible } : {visible:boolean}) => {
  return (
      <InfoContainer visible={visible}>
        <div className='txt'>
          <i className='font-extrabold'>1 스테이지 [눈덮인 벌판]</i>
          <p>시작 직후 낙하할 때 <i className='underline decoration-purple-400'>파워가드로 피격을 막아주고,</i> 이후 4-5레벨까지 좌측 하단에서 잡몹을 사냥한다</p>
        </div>
  
  
        <div className={classNames(
          'flex',
          'justify-between',
          'items-center',
        )}>
          <div className='w-1/2 txt'>
  
            <i className='font-extrabold'>2 스테이지 [깎여나간 절벽 : 페페]</i>
            <p>맨 윗층부터 <i className='underline decoration-blue-500'>도적과 함께 몹들을 쓸며</i> 내려간다</p>
            <p>10레벨이 되면 눈덩이를 굴리는 페페를 잡는데,<i className='underline decoration-purple-400'> 퍼펫을 깔고 나오는 궁수에게 파워가드를 주고</i> 어그로가 걸린 페페에게 <i className='underline decoration-purple-400'>코마로 기절을 먹인다</i> </p>
          </div>
          <div> | </div>
          <div className='w-1/2 txt'>
  
            <i className='font-extrabold'>2 스테이지 [우두머리의 영역 : 라이칸스로프]</i>
            <p>들어가자마자 맨 아래늑대들을 잡는다 이후 마법사 궁수와 합류하여 사냥한다</p>
            <p>10레벨이 되면 보스 좌측 포탈을 타고 <i className='underline decoration-green-500'>좀비 보스</i>를 잡는다</p>
          </div>
        </div>
          
        <div className={classNames(
          'flex',
          'justify-between',
          'items-center',
        )}>
          <div className='w-1/2 txt'>
            <i className='font-extrabold'>3 스테이지 [황폐해진 나무의 숲 : 내려찍는 쿨리]</i>
            <p>바로 보스에게 가서 주먹을 들고 내려찍는 타이밍에 <i className='underline decoration-purple-400'>파워가드로 카운터를 칩니다</i> 2번 성공 시 죽습니다</p>
          </div>
          <div> | </div>
          <div className='w-1/2 txt'>
            <i className='font-extrabold'>3 스테이지 [시들어진 나무의 숲 : 흩뿌리는 마이너]</i>
            <p>흩뿌리는 마이너는 근접 공격만 들어간다 독을 뿌릴 때 <i className='underline decoration-purple-400'>파워가드로 카운터를 치고</i> 계속 때려서 잡습니다 </p>
          </div>
        </div>
  
        <div className='txt'>
          <i className='font-extrabol'>4스테이지 [폐광 : 라바독]</i>
          <p>잡몹을 잡아 19레벨을 달성한다 라바독이 내려찍을 때 <i className='underline decoration-purple-400'>파워가드로 카운터를 친다</i> 추가로 코마 풀스택을 모은다</p>
        </div>

        <div className='txt'>
          <i className='font-extrabold text-red-400'>자쿰 [BOSS]</i>
          <p>들어가자마자 뛰어내리며 <i className='underline decoration-red-500'>우측 1,2를 코마로 기절시킨다</i></p>
          <p>히든포탈을 타고 반대쪽으로 이동, <i className='underline decoration-red-500'>아래에서 첫번째 높이의 발판</i>에서 모든 팔에 코마로 기절시킨다</p>
          <p>본체에서 한 줄 당 패턴을 한 번만 봐야하며, 기절로 패턴을 씹을 수 있으며, 파워가드는 기절을 실수로 썼을 때 쓰면 된다 <br/><i className='font-bold'>🌟손으로 잡고있는 비석을 쿵 쿵 찍을 때 | 가운데로 기운을 모아 광역패턴을 쓸 때 코마로 기절시킨다🌟</i></p>
        </div>
  
      </InfoContainer>
  )
}

export default WarInfo

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