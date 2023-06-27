// import { Container } from '@/components/Container'
// import { Card, Radio, Select } from '@geist-ui/core'
// import RadioGroup from '@geist-ui/core/esm/radio/radio-group'
// import classNames from 'classnames'
// import React from 'react'

// const ALPHA_NUM = [
//     [3,5,6,8,9],
//     [3,4,5,6]
// ]   

// function Page() {
//     const [num, setNum] = React.useState<number[]>([-1,-1])
        
    

//     return (
//         <Container className={classNames(
//             'flex',
//             'flex-col',
//         )}>
//             <div className={classNames(
//                 'py-12'
//             )}>
//                 <Card> 🥴 모든 중첩 코어를 지원하지는 않으며 직접 계산해야하는 불편함은 감수 부탁드립니다... ㅎ</Card>
//             </div>

//             <div className={classNames(
//                 'w-full',
//                 'h-full',

//                 'py-4',

//                 'flex',
//                 'flex-col',
//                 'max-sm:text-xs'
//             )}>
//                 {/* N중 M코어 선택 */}
//                 <div className={classNames(
//                     'w-full',

//                     'flex',
//                     'max-sm:flex-col',
//                     'justify-between',
//                     'items-center',

//                     'mb-8',
//                     'max-sm:space-y-4',
//                 )}>
//                     <div className={classNames(
//                         'w-2/3',
//                         'text-xl',
//                         'max-sm:text-sm',

//                         'flex',
//                         'max-sm:justify-center',
//                         'items-center',
//                     )}>N중첩 M코어 선택하기 <i className='underline decoration-red-300'>[직업별 상이]</i>
//                     </div>

//                     <div className={classNames(
//                         'w-1/3',
//                         'max-sm:w-full',

//                         'flex',
//                         'justify-between',
//                         'max-sm:justify-around',
//                         'items-center',
//                     )}>
//                         <Select placeholder="N중첩" onChange={(e) => {
//                             setNum([Number(e), num[1]])
//                         }}>
//                             <Select.Option value='0'>2중첩</Select.Option>
//                             <Select.Option value='1'>3중첩</Select.Option>
//                         </Select>


//                         {
//                             num[0] === 0 ? (
//                                 <Select placeholder="M코어" onChange={(e) => {
//                                     setNum([num[0], Number(e)])
//                                 }}>
//                                     <Select.Option value='0'>2코어</Select.Option>
//                                     <Select.Option value='1'>3코어</Select.Option>
//                                     <Select.Option value='2'>4코어</Select.Option>
//                                     <Select.Option value='3'>5코어</Select.Option>
//                                     <Select.Option value='4'>6코어</Select.Option>
//                                 </Select>
//                             ) : num[0] === 1 ? (
//                                 <Select placeholder="M코어" onChange={(e) => {
//                                     setNum([num[0], Number(e)])
//                                 }}>
//                                     <Select.Option value='0'>3코어</Select.Option>
//                                     <Select.Option value='1'>4코어</Select.Option>
//                                     <Select.Option value='2'>5코어</Select.Option>
//                                     <Select.Option value='3'>6코어</Select.Option>
//                                 </Select>
//                             ) : (
//                                 <Select placeholder="중첩을 선택해주세요" disabled>
//                                 </Select>
//                             )
//                         }

//                     </div>
//                 </div>

//                 <div>
//                     { num[1] >=0 && 
//                     }
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Page