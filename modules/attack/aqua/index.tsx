import { Avatar } from '@geist-ui/core'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

export const Aqua = () => {
  return (
    <div className={classNames(
      'w-full',

      'flex',
      'justify-start',
      'items-center',

      'py-4',
    )}>
      {/* 기본팁 */}
      <div>
        <h3>기본 팁 및 적정 레벨</h3>
        <div className={classNames(
          'text-sm',
          'text-gray-300',

          'mb-20',
        )}>
          산소는 체력으로 표시되며, 산소가 0이 되면 모아둔 수확 포인트가 초기화됩니다.<br />
          산소는 레벨이 증가함에 따라 늘아나게되며, 산소가 부족할 시에는 <i className='underline decoration-red-500'>스페이스바로 긴급 탈출</i>을 할 수 있습니다. <br /> <br />

          SHIFT는 직선 이동 스킬이지만, <i className='underline decoration-red-500'>지상에서 아래 방향키와 함께 사용하면</i> 즉시 물 속으로 이동할 수 있습니다.

          수심에 따라 몬스터의 레벨이 달라지며, 레벨이 높을수록 더 많은 포인트를 얻을 수 있습니다.<br />
          좌측의 수심 지도를 보면 ❗가 발생하는데, 이는 <i className='underline decoration-cyan-500'>스페셜 몬스터</i>로 본인의 레벨에 맞는 스페셜 몬스터가 등장하면 절대 잡아주세요. <br />
        </div>

        
        {/* 적정레벨 */}
        <div className={classNames(
          'w-full',

          'flex',
          'flex-col',
          'justify-start',
          'items-center',

          'space-y-4',
        )}>
          <div className={classNames(
            'w-full',
            'h-1/4',

            'flex',
            'max-sm:flex-col',
            'justify-start',
            'items-center',

            'mb-4',
          )}>
            <h3 className={classNames(
              'mr-4',
            )}>2레벨</h3>
            <div className={classNames(
              'flex',
              'max-sm:flex-col',

              'space-x-2',
              'max-sm:space-x-0',
            )}>
              <Image src='/icon/aqua/mob1.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
              <Image src='/icon/aqua/mob2.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
            </div>
          </div>
          <div className={classNames(
            'w-full',
            'h-1/4',

            'flex',
            'max-sm:flex-col',
            'justify-start',
            'items-center',
          )}>
            <h3 className={classNames(
              'mr-4',
            )}>4레벨</h3>
            <div className={classNames(
              'flex',
              'max-sm:flex-col',

              'space-x-2',
              'max-sm:space-x-0',
            )}>
              <Image src='/icon/aqua/mob3.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
            </div>
          </div>
          <div className={classNames(
            'w-full',
            'h-1/4',

            'flex',
            'max-sm:flex-col',
            'justify-start',
            'items-center',
          )}>
            <h3 className={classNames(
              'mr-4',
            )}>6레벨</h3>
            <div className={classNames(
              'flex',
              'max-sm:flex-col',

              'space-x-2',
              'max-sm:space-x-0',
            )}>
              <Image src='/icon/aqua/mob_6.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
              <Image src='/icon/aqua/mob_6_1.png' alt='아쿠아 어드벤쳐 몬스터' width={300} height={50} />
            </div>
          </div>

          <div className={classNames(
            'w-full',

            'flex',
            'max-sm:flex-col',
            'justify-start',
            'items-center',
          )}>
            <h3 className={classNames(
              'mr-4',
            )}>7레벨 (발칸)</h3>
            <div className={classNames(
              'flex',
              'max-sm:flex-col',

              'space-x-2',
              'max-sm:space-x-0',
            )}>
              <Image src='/icon/aqua/valkan_1.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
              <Image src='/icon/aqua/valkan_2.png' alt='아쿠아 어드벤쳐 몬스터' width={150} height={50} />
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Aqua