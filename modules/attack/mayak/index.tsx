import { mayak } from '@/data'
import { Button } from '@geist-ui/core'
import classNames from 'classnames'
import React, { useEffect } from 'react'

//레벨 당 고정 포인트
const LV_PT = [5, 10, 15, 30, 50, 60]


export const Mayak = () => {
    const [pt, setPt] = React.useState<number>()
    const [lv, setLv] = React.useState<number[]>(Array(16).fill(0))

    useEffect(() => {
        handleReset()
    }, [])

    const handleReset = () => {
        setPt(520)
        setLv(Array(16).fill(0))
    }
    return (
        <div className={classNames(
            'w-2/3',
            'max-sm:w-full',

            'm-auto',

            'flex',
            'flex-col',
        )}>
            <div className={classNames(
                'w-full',
                'flex',
                'justify-center',
                'items-center',

                'text-3xl',
                'font-bold',
            )}>마약 포인트 {pt} / 520</div>
            <p className='text-center text-gray-400 pb-4'>레벨 별 포인트 [ 5, 10 , 15 , 30 , 50 , 60 ]</p>
            <Button onClick={handleReset} width={"100%"}>초기화하기</Button>
            <div className={classNames(
                'grid',
                'grid-cols-4',
                'gap-y-4',

                "max-sm:grid-cols-2",

                'justify-items-center',
                'content-center',
                'py-12',
            )}>
                {mayak.map((v: any[], i: number) => (
                    <div className={classNames(
                        "w-1/2",
                        'aspect-square',

                        'flex',
                        'flex-col',
                        'justify-around',
                        'items-center',


                        { 'border border-slate-200 rounded-md': v[0] !== '' },
                        { 'max-sm:hidden': v[0] === '' },
                        'cursor-pointer',

                    )}
                        key={v[0] + i + "_mayak"}
                    >
                        <div className={classNames(
                            'font-bold',
                            'text-sm'
                        )}>{v[0]}</div>
                        <div className={classNames(
                            'w-full',
                            'text-sm',

                            'flex',
                            'justify-between',
                            'items-center',

                            'px-4'
                        )}>
                            <div className={classNames(
                                'hover:opacity-70',

                                'text-blue-500',
                                'font-bold'
                            )}
                                onClick={() => {
                                    const newLv = [...lv]

                                    if (newLv[i] === 0) {
                                        alert("0이야 그만눌러요 ㅡㅡ")
                                        return
                                    }
                                    if(pt + LV_PT[newLv[i]] > 520){
                                        alert("포인트가 부족합니다.")
                                        return
                                    }
                                    newLv[i] = lv[i] - 1
                                    setLv(newLv)
                                    setPt((cur) => cur  + LV_PT[newLv[i]])
                                }}
                            >{v[0] && "-"}
                            </div>

                            <div>{v[0] && lv[i] + " / 6"}</div>

                            <div className={classNames(
                                'hover:opacity-70',

                                'text-red-500',
                                'font-bold'
                            )}
                                onClick={() => {
                                    const newLv = [...lv]

                                    if (newLv[i] === 6) {
                                        alert("6이야 그만눌러요 ㅡㅡ")
                                        return
                                    }
                                    if(pt - LV_PT[newLv[i]] < 0){
                                        alert("포인트가 부족합니다.")
                                        return
                                    }
                                    newLv[i] = lv[i] + 1
                                    setLv(newLv)
                                    setPt((cur) => cur - LV_PT[lv[i]])
                                }}
                            >{v[0] && "+"}
                            </div>
                        </div>
                        <div className={classNames(
                            'text-xs',
                            'text-slate-200',
                        )}>{v[0] && v[1][lv[i]]}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Mayak