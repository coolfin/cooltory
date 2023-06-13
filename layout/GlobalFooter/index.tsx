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
            'mt-4',
        )}>
            {/**좌측 */}
            <div className={classNames(
                'font-normal',
                'text-xs',
                'text-gray-400',
            )}>
                <a href="#" className='font-extrabold'>근붕트.com</a>은 리부터들을 위해 만들어졌으며, 작성되어 있는 정보는 실제 정보와 다를 수 있습니다.<br/>
                오류 제보 또는 문의/피드백은 <a href='mailto:sorlti6952@gmail.com'>쿨핀</a>에게 알려주세요. thanks to <b className='text-cyan-300'>셜광</b>, <b className='text-red-300'>이상혁</b>, <b className='text-blue-500'>러셀</b>, <b className='text-purple-500'>젤리</b>, <b className='text-red-500'>죽창석</b><br/> 
                copyright 2023. 근붕트.com all rights reserved.<br/>
                designs rights are reserved by Maplestory.
            </div>

            <div className={classNames(
                'font-light',
                'text-xs',
            )}>
                Last Update<br/>
                <b>2023.06 [Ver. 1.91]</b>
            </div>
        </Container>
    )
}