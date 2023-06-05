import { Container } from '@/components/Container'
import axios from 'axios'
import classNames from 'classnames'
import React, { useState } from 'react'


export const Page = () => {
    const [value, setValue] = useState<string>()

    //axios로 api 호출
    const handleSearch = async () => {
        try {
            const res = await axios({
                url: `/api/characters`,
                params: {
                    name: value
                },
                method: 'GET',
            })
            console.log(res)
        } catch (e) {
            alert(e);
        }
    }

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

                    onKeyPress={async (e) => {
                        //이벤트 전파 막기
                        e.stopPropagation()
                        if (e.key === 'Enter' && value?.trim() === '') {
                            alert('캐릭터 명을 입력해 주세요')
                            setValue('')
                            return
                        }
                        else if (e.key === 'Enter' && value?.trim() !== '') {
                            alert(value)
                            handleSearch()
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