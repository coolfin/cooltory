import { Container } from '@/components/Container'
import { Card } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

function Page() {
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
          <div>ss</div>
          <div>dd</div>
        </Card>
      </div>
    </Container>
  )
}

export default Page