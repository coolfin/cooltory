import { Card, Collapse } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export const Exp = () => {
    return (
        <div className={classNames(

            'w-full',
            'h-full',

            'py-6',
        )}>
            <div className={classNames(
                'mb-4',
            )}>

                <Collapse shadow title='경험치 도핑'>
                    test
                </Collapse>
            </div>

            <div>

                <Collapse shadow title='주간보스 도핑'>
                    test
                </Collapse>
            </div>
        </div>
    )
}

export default Exp