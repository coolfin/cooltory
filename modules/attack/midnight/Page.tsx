import { Button } from '@geist-ui/core'
import classNames from 'classnames'
import React, { useState } from 'react'

export const MidnightPage = () => {
  const [imgClick, setImgClick] = useState<boolean[][]>(Array(9).fill(0).map(() => Array(9).fill(false)));

  const handleImg = (container_index : number, index: number) => {

    const tempClick = [...imgClick]
    console.log(tempClick)
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(i === container_index) {
          if(j !== index) {
            tempClick[i][j] = true
          }
        } else {
          if(j === index && tempClick[i][j] === false) {
            tempClick[i][j] = true
          } 
        }
      }
    }

    setImgClick(tempClick)
  }

  const handleReset = () => {
    alert("초기화 되었습니다.")
    setImgClick(Array(9).fill(0).map(() => Array(9).fill(false)))
  }

  return (
    <div className={classNames(
      'flex',
      'justify-center',
      'items-center',

      'py-4',
      'my-8',

      'flex',
      'flex-col',
    )}>
      {/* 초기화 버튼 */}
      <div className={classNames(
        'w-1/2',
        'mb-8',

        'flex',
        'justify-center',
        'items-center',
      )}>
        <Button width={"100%"} onClick={handleReset}

        >초기화 해버리기</Button>
      </div>
      {/* 3칸씩 9개 테이블 */}
      <div className={classNames(
        'w-1/2',

        'grid',
        'grid-cols-3',
        'gap-5',

        'max-sm:w-full',

        'text-sm'
      )}>
        {imgClick.map((val: boolean[], index: number) => (
          <div className={classNames(
            'w-full',
            'aspect-square',

            'rounded-md',
            'border-slate-200',
            'border',

            'shadow-md',
            'shadow-purple-500',

            'grid',
            'grid-cols-3',
            'gap-1',
          )}
            key={index + "_outer_chaser"}
          >
            {val.map((v: boolean, i: number) => (

              <div
                key={index + "_inner_chaser_" + i}
                onClick={() => {
                  handleImg(index, i)
                }} className={classNames(
                  'w-4/5',
                  'aspect-square',

                  'flex',
                  'justify-center',
                  'items-center',
                  
                  'hover:cursor-pointer',
                  'hover:opacity-50',

                  //선택된 블럭은 해당 숫자 빼고 모두 흐리게, 선택되지 않은 블럭은 숫자만 흐리게
                  //v는 selected[i]에서는 반대 기능을 해야 함
                  {'invisible': v},
                  )}>
                {/* <img src={`/icon/chaser/place_${i}.png`} alt="미드나잇 체이서" /> */}
                <img alt='chaser' src='http://via.placeholder.com/300x300'/>
              </div>

            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MidnightPage