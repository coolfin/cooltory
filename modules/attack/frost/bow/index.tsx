import styled from '@emotion/styled'
import classNames from 'classnames'
import React from 'react'

export const BowInfo = ( { visible } : {visible:boolean}) => {
  return (
    <InfoContainer visible={visible}>
      <div className='txt'>
        <i className='font-extrabold'>1 스테이지 [눈덮인 벌판]</i>
        <p>좌측 상단 <i className='underline decoration-red-500'>낚시자리의 예티를</i> 사냥한다</p>
      </div>


      <div className={classNames(
        'flex',
        'justify-between',
        'items-center',
      )}>
        <div className='w-1/2 txt'>

          <i className='font-extrabold'>2 스테이지 [깎여나간 절벽 : 페페]</i>
          <p>맨 윗층 가운데에 퍼펫을 깔고 우측 상단 끝에서 <i className='underline decoration-red-500'>낚시자리에 가서 파이어 애로우로 </i> 10레벨까지 사냥한다</p>
          <p>10레벨이 되면 1 스테이지의 마녀를 <i className='underline decoration-red-500'>파이어 애로우로 속성 추가피해를 넣으면서</i> 잡는다</p>
        </div>
        <div> | </div>
        <div className='w-1/2 txt'>

          <i className='font-extrabold'>2 스테이지 [우두머리의 영역 : 라이칸스로프 알파]</i>
          <p>1층 가운데 <i className='underline decoration-red-500'>퍼펫을 깔고 파이어 애로우로 </i> 10레벨까지 사냥한다</p>
          <p>10레벨이 되면 1 스테이지의 마녀를 <i className='underline decoration-red-500'>파이어 애로우로 속성 추가피해를 넣으면서</i> 잡는다</p>
        </div>
      </div>
      <div className='txt'>
        <i className='font-extrabold'>4 스테이지 [동굴: 라바독]</i>
        <p>마녀를 잡은 이후 바로 4번째 맵으로 이동, 파이어독을 잡으며 19레벨을 달성하고 <i className='underline decoration-emerald-500'>라바독에게 퍼펫을 사용하지 않고 사냥한다 </i></p>
      </div>

      <div className='txt'>
        <i className='font-extrabold text-red-400'>자쿰 [BOSS]</i>
        <p>입장하자마자 우측 아래에서 3번째 발판에 퍼펫을 깔고,<i className='underline decoration-red-500'>아이스데몬 - 파이어애로우 조합</i>을 개갈겨준다</p>
        <p>우측 팔이 다 떨어지면 좌측 아래에서 2번째 발판 팔쪽에 퍼펫을 깔고,<i className='underline decoration-red-500'>아이스데몬 - 파이어애로우 조합</i>을 개갈겨준다</p>
        이후 본체에도 파이어애로우를 개갈겨주며 마무리한다
      </div>

    </InfoContainer>
  )
}

export default BowInfo

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