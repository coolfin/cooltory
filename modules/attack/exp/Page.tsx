import { boss_attack, exp_attack } from '@/data'
import { Collapse, User } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export const ExpPage = () => {
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
                    <div className={classNames(
                        'grid',
                        'grid-cols-3',
                        'gap-4',

                        'max-sm:grid-cols-1',
                    )}>
                        {exp_attack.map((v, index) => (
                            <User src={`/icon/exp/exp_${v['url']}.png`} name={v['title']} onClick={() => {
                                alert(v['getin'])
                            }} className={classNames(
                                'hover:cursor-pointer',
                                'hover:opacity-80',
                            )}>{v['content']}</User>

                        ))}
                    </div>
                </Collapse>
            </div>

            <div>

                <Collapse shadow title='주간보스 도핑' subtitle='연금술 비약들은 적절한 구글링을 추천드립니다 엣큥'>
                <div className={classNames(
                        'grid',
                        'grid-cols-3',
                        'gap-4',

                        'max-sm:grid-cols-1',
                    )}>
                        {boss_attack.map((v, index) => (
                            <User src={`/icon/boss/${v['url']}.png`} name={v['title']} onClick={() => {
                                alert(v['getin'])
                            }} className={classNames(
                                'hover:cursor-pointer',
                                'hover:opacity-80',
                            )}>{v['content']}</User>

                        ))}
                    </div> 
                </Collapse>
            </div>
        </div>
    )
}

export default ExpPage