import styled from '@emotion/styled'
import { Divider, Rating } from '@geist-ui/core'
import classNames from 'classnames'
import { useState } from 'react'
import TheifInfo from './thief'
import MagicInfo from './magic'
import BowInfo from './bow'
import WarInfo from './worrior'

export const DgPage = () => {
    const [isVisible, setIsVisible] = useState<boolean[]>([false, false, false, false])
    const jobComponent = [
        <WarInfo visible={isVisible[0]} />,
        <MagicInfo visible={isVisible[1]} />,
        <BowInfo visible={isVisible[2]} />,
        <TheifInfo visible={isVisible[3]} />,
    ]


    return (
        <div className={classNames(
            'flex',
            'flex-col',
        )}>
            <span className={classNames('text-xs', 'text-gray-500')}>
                ref{' '}
                <a
                    href="https://www.inven.co.kr/board/maple/2304/34022"
                    target="_blank"
                >
                    메이플스토리 인벤
                </a> 그리고 나
            </span>
            {[["전사", 3], ["법사", 1], ["궁수", 2], ["도적", 2]].map((v: any[], index: number) => (
                <div className={classNames(
                    'text-md',

                    'mt-4',
                    'py-2',

                    'gap-y-8',
                    'grid',
                )}>
                    <Divider className={classNames(
                        'hover:cursor-pointer',
                        'hover:opacity-80',
                    )} onClick={() => {
                        const tempVisible = [...isVisible]
                        tempVisible[index] = !tempVisible[index]
                        setIsVisible(tempVisible)

                        console.log(isVisible)
                    }}><span className='mr-10'>{v[0]}</span>{"🌚 ".repeat(3-v[1]) + "🌕".repeat(v[1])}</Divider>
                    {jobComponent[index]}
                </div>
            ))}



        </div>
    )
}

export default DgPage