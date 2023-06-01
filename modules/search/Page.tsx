import { Container } from '@/components/Container'
import classNames from 'classnames'
import React, { useState } from 'react'

export const Page = () => {
    const [value, setValue] = useState<string>()
    return (
        <Container>
            <div className={classNames(
                'w-full',
                'h-full',

                'flex',
                'justify-center',
                'items-center',

                'py-12',
            )}>
                <input type='text'
                    className={classNames(
                        'w-1/2',
                        'h-12',

                        'border',
                        'border-gray-300',
                        'bg-transparent',

                        'px-4',

                        'max-sm:w-4/5',

                        'focus:drop-shadow-2xl',
                    )}
                    placeholder='캐릭터 명을 입력해 주세요'

                    onChange={(e) => {
                        setValue(e.target.value)
                    }}

                    onKeyPress={(e) => {
                        //이벤트 전파 막기
                        e.stopPropagation()
                        if (e.key === 'Enter' && value?.trim() === '') {
                            alert('캐릭터 명을 입력해 주세요')
                            return
                        }
                        else if (e.key === 'Enter' && value?.trim() !== '') {
                            console.log(value)
                        }
                    }}
                />
            </div>

            <div className={classNames(
                'w-full',
                'h-96',



            )}>
                {value}
            </div>
        </Container>
    )
}

export default Page