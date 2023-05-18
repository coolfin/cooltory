import { Container } from '@/components/Container'
import { JobTable } from '@/layout/JobTable'
import { Card } from '@geist-ui/core'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

function Page() {
  const [lv, setLv] = useState(0) //유니온레벨
  const [name, setName] = useState('')
  useEffect(() => {
    const n = localStorage.getItem('name')
    setName(n)
  })
  return (
    <Container>
      <div className={classNames(
        'w-full',


        'flex',
        'flex-col',

        'gap-y-4',

        'mt-4',
        'mb-12',
      )}>
        <Card>
          <p className={classNames(
            'text-sm',
          )}>💡 입력되는 정보는 <i className={classNames(
            'font-bold',

            'decoration-pink-500',
            'underline',
          )}>인터넷 기록 삭제 전까지</i> 유효합니다람쥐🐿</p>
        </Card>
        <Card>
          {/* 티어 및 유니온 숫자 */}
          <div className={classNames(
            'w-full',
            'h-fit',

            'flex',
            'flex-row',
            'justify-start',
            'items-center',
          )}>
            <div className={classNames(
              'w-16',
              'h-16',

              'mr-10',
            )}>
              <img src={`/icon/union/bronze_${String(Number(lv / 500) + 1)}.png`} className={classNames(
                'w-2',

              )} />

            </div>

            <div className={classNames(
              'w-1/2',
              'py-4',
            )}>
              <div>{name}님의 유니온 레벨</div>
              <div>{lv}</div>
            </div>
          </div>
        </Card>
      </div>

      <JobTable/>
    </Container>
  )
}

export default Page