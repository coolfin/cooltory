import { EquipType, StatType, UserType } from '@/@types/next'
import { Container } from '@/components/Container'
import { Avatar, Card } from '@geist-ui/core'
import axios from 'axios'
import classNames from 'classnames'
import React, { useState } from 'react'
import UserEquip from './equip'
import UserStat from './stat'
import UserLoad from './loading'

export const Page = () => {
    const [value, setValue] = useState<string>()
    const [user, setUser] = useState<UserType>()

    const [stat, setStat] = useState<StatType>()
    const [equip, setEquip] = useState<EquipType[]>()
    //axios로 api 호출
    const handleSearch = async () => {
        try {
            const res = await axios.get('/api/characters', {
                params: {
                    name: value
                },
            }).then((res) => {
                alert("불러오는 중 입니다. 잠시만 기다려주세요")
                setUser(res.data)
                setStat(res.data.spec)
                setEquip(res.data.equipments)
            })
        } catch (e) {
            alert('캐릭터 정보를 불러오는데 실패했습니다❗\n캐릭터 명을 다시 확인해주시고 맞다면 \n정보공개 설정을 확인해 주세요 😵‍💫')
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
                            setUser(undefined) //로딩을 위해 초기화
                            handleSearch()
                        }
                    }}
                />
            </div>
            {!user ? (<UserLoad />) :
                <div className={classNames(
                    'w-full',
                    'h-full',

                    'grid',
                    'grid-cols-1',
                    'gap-8',
                )}>
                    <div className={classNames(
                        'text-xs',
                        'text-slate-500',
                    )}>ref <a href='https://github.com/leesangb/mapleutils-parser-api'>mapleutils api</a> <br />
                    추가로 공식 홈페이지의 api를 불러오는 것이기 때문에, 빠른 갱신이 되지 않을 수 있습니다.</div>

                    <div className={classNames(
                        'w-full',

                        'grid',
                        'grid-cols-3',

                        'max-sm:grid-cols-1',

                        'border',
                        'border-gray-300',
                        'rounded-md',
                    )}>
                        {/* 캐릭터 */}
                        <div className={classNames(
                            'flex',
                            'flex-col',
                            'justify-center',
                            'items-center',
                        )}>
                            <div>

                            </div>
                            <img src={user?.imageUrl} className={classNames(
                                'w-1/2',
                            )} />
                            <div className={classNames(
                                'w-full',
                                'text-sm',

                                'grid',
                                'grid-cols-1',
                                'gap-y-2',

                                'justify-items-center',
                                'content-center',

                                'max-sm:text-xs',
                            )}>
                                <div className={classNames(
                                    'w-2/3',

                                    'flex',
                                    'justify-center',
                                    'items-center',
                                    'max-sm:mb-2',
                                )}>
                                    <div className={classNames(
                                        'w-1/2',
                                        'font-bold',
                                        'mr-2',
                                        'text-center',
                                        'underline',
                                        'decoration-cyan-500',
                                    )}>캐릭터 명
                                    </div>
                                    <div className={classNames(
                                        'w-1/2',
                                        'text-center',
                                    )}>
                                        {user?.name}
                                    </div>
                                </div>

                                <div className={classNames(
                                    'w-2/3',

                                    'flex',
                                    'justify-center',
                                    'items-center',

                                    'max-sm:mb-2',
                                )}>
                                    <div className={classNames(
                                        'w-1/2',
                                        'font-bold',
                                        'mr-2',

                                        'text-center',

                                        'underline',
                                        'decoration-cyan-500',
                                    )}>레벨
                                    </div>
                                    <div className={classNames(
                                        'w-1/2',
                                        'text-center',
                                    )}>
                                        {user?.level}
                                    </div>
                                </div>

                                <div className={classNames(
                                    'w-2/3',

                                    'flex',
                                    'justify-start',
                                    'items-center',

                                    'max-sm:mb-2',
                                )}>
                                    <div className={classNames(
                                        'w-1/2',
                                        'font-bold',
                                        'mr-2',

                                        'text-center',

                                        'underline',
                                        'decoration-cyan-500',
                                    )}>직업
                                    </div>
                                    <div className={classNames(
                                        'w-1/2',
                                        'text-center',
                                    )}>
                                        {user?.job}
                                    </div>
                                </div>

                                <div className={classNames(
                                    'w-2/3',

                                    'flex',
                                    'justify-start',
                                    'items-center',

                                    'max-sm:mb-2'
                                )}>
                                    <div className={classNames(
                                        'w-1/2',
                                        'font-bold',
                                        'mr-2',

                                        'text-center',

                                        'underline',
                                        'decoration-red-500',
                                    )}>길드
                                    </div>
                                    <div className={classNames(
                                        'w-1/2',
                                        'text-center',
                                    )}>
                                        {user?.guild}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 장비 */}
                        <UserEquip equip={equip} />

                        {/* 스탯 */}
                        <UserStat stat={stat} />
                    </div>
                </div>
            }
        </Container>
    )
}

export default Page