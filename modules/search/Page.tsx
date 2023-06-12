import { UserType } from '@/@types/next'
import { Container } from '@/components/Container'
import { Card } from '@geist-ui/core'
import axios from 'axios'
import classNames from 'classnames'
import React, { useState } from 'react'
import UserEquip from './equip'
import UserStat from './stat'


export const Page = () => {
    const [value, setValue] = useState<string>()
    const [user, setUser] = useState<UserType>()
    //axios로 api 호출
    const handleSearch = async () => {
        try {
            const res = await axios.get('/api/characters', {
                params: {
                    name: value
                }
            }).then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
        } catch (e) {
            alert('캐릭터 정보를 불러오는데 실패했습니다. 정보공개 설정을 확인해 주세요.')
            //console.log(e)
        }
    }

    return (
        <Container>
            <div className={classNames(
                'w-full',
                'h-full',

                'flex',
                'flex-col',
                'justify-center',
                'items-center',

                'py-12',
            )}>
                <Card width={"100%"}>
                    <div className={classNames(
                        'flex',
                        'justify-between',

                        'max-sm:flex-col',
                        'max-sm:items-center',
                        'max-sm:text-xs',
                        'max-sm:space-y-2',
                    )}>
                        <i> 👀 검색을 위해서는 공식 홈페이지에서 정보공개를 진행해 주셔야 합니다.</i> <a href='https://maplestory.nexon.com/MyMaple/Account/Character/Visibility' target='_blank'>캐릭터 정보공개 설정하러 가기</a>
                    </div>
                </Card>
                <input type='text'
                    className={classNames(
                        'w-1/2',
                        'h-12',

                        'border',
                        'border-gray-300',
                        'rounded-md',
                        'bg-transparent',

                        'px-4',
                        'mt-12',

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
            {user &&
                <div className={classNames(
                    'w-full',

                    'grid',
                    'grid-cols-1',
                    'gap-8',
                )}>
                    <div className={classNames(
                        'text-xs',
                        'text-slate-500',
                    )}>ref <a href='https://github.com/leesangb/mapleutils-parser-api'>mapleutils api</a></div>

                    <div className={classNames(
                        'w-full',
                        'h-96',

                        'grid',
                        'grid-cols-3',

                        'max-sm:grid-cols-1',
                    )}>
                        {/* 캐릭터 */}
                        <div className={classNames(
                            'flex',
                            'flex-col',
                            'justify-start',
                            'items-center',

                            'py-4',


                            'border',
                            'border-gray-300',
                            'rounded-md',
                        )}>
                            <div>

                            </div>
                            <img src={user?.imageUrl} />
                            <div className={classNames(
                                'w-full',
                                'text-sm',

                                'flex',
                                'flex-col',
                                'justify-center',
                                'items-center',
                                'max-sm:text-xs',
                            )}>
                                <div className={classNames(
                                    'w-1/2',

                                    'flex',
                                    'justify-center',
                                    'items-center',

                                    'max-sm:flex-col',
                                )}> <i className={classNames(
                                    'font-bold',
                                    'mr-2',

                                    'underline',
                                    'decoration-cyan-500',
                                )}>캐릭터 명</i>{user?.name}</div>
                                <div className={classNames(
                                    'w-1/2',

                                    'flex',
                                    'justify-center',
                                    'items-center',

                                    'max-sm:flex-col',
                                )}> <i className={classNames(
                                    'font-bold',
                                    'mr-2',

                                    'underline',
                                    'decoration-cyan-500',
                                )}>레벨</i>{user?.level}</div>
                                <div className={classNames(
                                    'w-1/2',

                                    'flex',
                                    'justify-center',
                                    'items-center',

                                    'max-sm:flex-col',
                                )}> <i className={classNames(
                                    'font-bold',
                                    'mr-2',

                                    'underline',
                                    'decoration-cyan-500',
                                )}>직업</i>{user?.job}</div>
                            </div>
                        </div>

                        {/* 장비 */}
                        <UserEquip/>

                        {/* 스탯 */}
                        <UserStat/>
                    </div>
                </div>
            }
        </Container>
    )
}

export default Page