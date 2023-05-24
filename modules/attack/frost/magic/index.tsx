import styled from '@emotion/styled';
import classNames from 'classnames';
import React from 'react'

export const MagicInfo = ({ visible } : {visible:boolean}) => {
  return (
    <InfoContainer visible={visible}>
    <div className='txt'>
      <i className='font-extrabold'>1 스테이지 [눈덮인 벌판]</i>
      <p>우측 하단에서 <i className='underline decoration-cyan-500'>1,2층 몹을 썬더볼트로 사냥한다</i></p>
    </div>

{/* 
5레벨 1) 늑대나오면 포탈타고 중간가서 얼음사냥
        - 10레벨되면 꼭대기 포탈타고 3스테이지(폐광)이동
       -폐광에서 블리자드 사냥
       - 16레벨되면 스테이지4(불독) 이동 */}
    <div className={classNames(
      'flex',
      'justify-between',
      'items-center',
    )}>
      <div className='w-1/2 txt'>
        <i className='font-extrabold'>2 스테이지 [깎여나간 절벽 : 페페]</i>
        <p>맨 윗층에서 <i className='underline decoration-blue-500'>다크 예티에게 아이스데몬을</i> 개갈겨준다</p>
        <p>10레벨이 되면 4 스테이지로 이동한다</p>
      </div>
      <div> | </div>
      <div className='w-1/2 txt'>

        <i className='font-extrabold'>2 스테이지 [우두머리의 영역 : 라이칸스로프 알파]</i>
        <p>1, 2층에서 궁수와 <i className='underline decoration-cyan-500'>아이스데몬 - 파이어애로우 조합</i>을 이용해 사냥한다</p>
        <p>10레벨이 되면 4스테이지로 이동한다</p>
      </div>
    </div>
    <div className='txt'>
      <i className='font-extrabold'>4 스테이지 [동굴: 라바독]</i>
      <p>19레벨 까지 동굴에서 블리자드로 사냥하며 라바독의 분화구는 <i className='underline decoration-cyan-500'>아이스데몬으로 즉각 지워주며 잡는다</i></p>
    </div>

    <div className='txt'>
      <i className='font-extrabold text-red-400'>자쿰 [BOSS]</i>
      <p>우측 아래에서 세번째 칸에서 <i className='underline decoration-blue-500'> 아이스 데몬을 개갈겨준다</i></p>
      <p>우측 아래에서 두번째 칸에서 <i className='underline decoration-blue-500'> 아이스 데몬을 개갈겨준다</i></p>
      이후 본체에도 아이스데몬을 갈겨주며 마무리한다
    </div>

  </InfoContainer>
  )
}

export default MagicInfo


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