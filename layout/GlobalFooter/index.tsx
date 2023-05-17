import { Container } from '@/components/Container'
import classNames from 'classnames'
import React from 'react'

export const GlobalFooter = () => {
    return (
        <Container className={classNames(
            'w-full',
            'h-20',

            'flex',
            'justify-between',
            'items-center',

            'py-4',
        )}>
            {/**좌측 */}
            <div className={classNames(
                'font-normal',
                'text-xs',
                'text-gray-400'
            )}>
                <a href="#" className='font-extrabold'>근붕트.com</a>은 리부터들을 위한 BynnArk의 모작이며, 작성되어 있는 정보는 실제 정보와 다를 수 있습니다.<br/>
                오류 제보 또는 문의/피드백은 <b>쿨핀</b>에게 알려주세요.<br/>
                copyright 2023. 근붕트.com all rights reserved.<br/>
            </div>

            <div className={classNames(
                'font-light',
                'text-xs',
            )}>
                Last Update<br/>
                <b>2023.05.16</b>
            </div>
        </Container>
    )
}