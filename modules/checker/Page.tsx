import { Container } from '@/components/Container'
import { Card, User } from '@geist-ui/core'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { type } from 'os'

const PLAYER: string[] = [
  '🍳본캐', '🐥부캐', '🐣쀼캐', '🥚쀼부캐'
]
function Page() {
  const [counter, setCounter] = useState(1);
  
  //6크기의 2차원 배열 생성
  const [isDone , setIsDone] = useState<boolean[][]>(new Array(4).fill(new Array(7).fill(false)))
  const [weeklyDone, setWeeklyDone] = useState<boolean[][]>(new Array(4).fill(new Array(5).fill(false)))
  useEffect(() => {
    const tempCounter = localStorage.getItem('counter')
    if(tempCounter && document) {
      setCounter(JSON.parse(tempCounter))
    }

    if(document) {
      const localIsDone = localStorage.getItem('isDone')
      if(localIsDone) {
        setIsDone(JSON.parse(localIsDone))
      }
      const localWeeklyDone = localStorage.getItem('weeklyDone')
      if(localWeeklyDone) {
        setWeeklyDone(JSON.parse(localWeeklyDone))
      }
    }

  },[])
  //localstorage에 저장
  useEffect(() => {
    localStorage.setItem('isDone', JSON.stringify(isDone))
    localStorage.setItem('weeklyDone', JSON.stringify(weeklyDone))
  }, [isDone, weeklyDone])


  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])

  return (
    <Container>
      {/* header */}
      <div className={classNames(
        'mt-12',
        'mb-4',
      )}>
        <Card>
          <p className={classNames(
            'text-sm',

            'max-sm:text-xs'
          )}>🙏 클릭으로 지울 수 있으며, 추가는 최대 4개까지만 가능합니다! <i className='font-extrabold text-red-200'>과도한 게임은 어쩌구 저쩌구..</i></p>
        </Card>
      </div>
      <div className={classNames(
        'w-full',
        'h-fit',

        'mt-10',

        'flex',
        'justify-end',

        'font-bold'
      )}>
        <span className={classNames(
          'text-sm',
          'mr-2',

          'hover:cursor-pointer',
          'hover:opacity-80'
        )} onClick={() => {
          if (counter < 4) {
            setCounter(counter + 1)
          } else if (counter === 4) {
            alert('그만 추가해....')
          }
        }}>추가</span>|
        <span className={classNames(
          'text-sm',
          'ml-2',
          'hover:cursor-pointer',
          'hover:opacity-80'
        )} onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1)
          } else if (counter === 1) {
            alert('삭제 안됨')
          }
        }}>삭제</span>
      </div>
      {/* 테이블 */}
      <div className={classNames(
        'w-full',
        'h-screen',
        'flex',
      )}>
        <div className={classNames(
          'w-full',
          'h-full',

          'py-10',

          'grid',
          'gap-x-2',
          'gap-y-10',

          'max-sm:grid-cols-1',
          'sm:grid-cols-1',
          'md:grid-cols-2',
          'lg:grid-cols-3',
          'xl:grid-cols-4',

          'max-sm:px-10',

          'text-center',
        )}>
          {/* 테이블 헤더 */}
          {
            PLAYER.filter((_, i) => i < counter).map((player, i) => (
              <div className={classNames(
                // 'bg-blue-200'
                'border',
                'rounded-md',

                'p-4',

                'overflow-scroll'
              )}
                key={player}
                >
                <p className={classNames(
                  'font-bold',
                  'border-b',
                  'border-slate-400',

                  'flex',
                  'justify-center',
                  'items-center',

                  'pb-4',

                  {'text-red-400 line-through' : weeklyDone[i].every((v) => v === true) && isDone[i].every((v) => v === true)},
                  
                )}>{player}</p>

                {/* 테이블 내용 */}
                <p className={classNames(
                  'text-sm',
                  'py-2',
                  'font-extrabold',

                  {'line-through opacity-50' : isDone[i].every((v) => v === true)},
                )}>일일숙제</p>
                <div className={classNames(
                  'grid',
                  'grid-cols-2',

                  'max-sm:grid-cols-1',
                  'gap-x-2',
                  'gap-y-10',

                  'pb-8'
                )}
                >
                {
                [
                  ["몬스터파크", "2회", "monster_park"],
                  ["우르스", "3회", "urus"],
                  ["일일보스", "", "boss"],
                  ["레오나 찬스", "3회", "event"],
                  ["위시오브", "출석", "event"],
                  ["던전프로스트", "1회","dongeon"],
                  ["챌린저스", "500개","event"]
                  ].map((val : string[], index) =>(<User src={`/icon/hw/${val[2]}.png`} name={val[0]} key={index + "_daily"} onClick={() => {
                    const temp = [...isDone];
                    temp[i][index] = !temp[i][index]
                    setIsDone(temp)
                  }} className={classNames(
                    'hover:cursor-pointer',
                    {'line-through opacity-50' : isDone[i][index]},
                  )}>{val[1]}</User>))}

                </div>
                <hr/>
                <p className={classNames(
                  'text-sm',
                  'py-2',
                  'font-extrabold',

                  {'line-through opacity-50' : weeklyDone[i].every((v) => v === true)},
                )}>주간숙제</p>
                <div className={classNames(
                  'grid',
                  'grid-cols-2',

                  'max-sm:grid-cols-1',
                  'gap-x-2',
                  'gap-y-10',
                )}
                >
                {
                [
                  ["심볼퀘", "여로,츄츄,...", "symbol"],
                  ["세계수", "스우", "siu"],
                  ["헤이븐", "데미안", "demian"],
                  ["주간보스", "", "boss"],
                  ["플래그", "길드", "flagrace"],
                  ].map((val : string[], index) =>(<User src={`/icon/hw/${val[2]}.png`} name={val[0]} key={index + "_weekly"} onClick={() => {
                    const temp = [...weeklyDone];
                    temp[i][index] = !temp[i][index]
                    setWeeklyDone(temp)
                  }} className={classNames(
                    'hover:cursor-pointer',
                    {'line-through opacity-50' : weeklyDone[i][index]},
                  )}>{val[1]}</User>))}

                </div>
              </div>
            ))
          }
        </div>
      </div>

    </Container>
  )
}

export default Page