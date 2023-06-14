import { StatType } from '@/@types/next';
import { Avatar } from '@geist-ui/core';
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export const UserStat = ({ stat }: { stat: StatType }) => {
  const [impStat, setImpStat] = useState<StatType>(stat);

  return (
    <div className={classNames(
      'w-full',
      'h-96',

      'overflow-scroll',


      'flex',
      'flex-col',

      'justify-center',
      'items-center',


      'max-sm:my-4',
      'py-4',

      'text-sm',
      'max-sm: text-xs',
    )}>

      {/* 주스탯 */}
      <div className={classNames(
        'w-full',
        'h-1/6',

        'grid',
        'grid-cols-4',
        'gap-2',

        'justify-items-center',
        'content-center',

      )}>
        {
          [[impStat.str, "STR"], [impStat.dex, "DEX"], [impStat.int, "INT"], [impStat.luk, "LUK"]].map(([key, name]) => (
            <div className={classNames(
              'w-full',

              'flex',
              'justify-center',
              'items-center',

              'font-bold',

              'underline',
              'decoration-red-200',

              {'border-r border-slate-50': name !== 'LUK'},
            )}
            key={name+"_stat"}
            >
              {name + " : "}  {(Number(key)/10000).toFixed(1)}
            </div>
          ))
        }
      </div>
      {/* 스공 */}
      <div className={classNames(
        'w-full',
        'h-1/6',

        'flex',
      )}>
        <div className={classNames(
          'w-1/4',

          'flex',
          'justify-center',
          'items-center',
        )}>
          <Avatar src='/icon/spec/statAtk.png' isSquare />
        </div>

        <div className={classNames(
          'w-2/6',

          'flex',
          'justify-center',
          'items-center',
        )}>
          노버프 스공(만)
        </div>
        <div className={classNames(
          'w-5/12',

          'flex',
          'justify-center',
          'items-center',
        )}>
          {
            Math.floor(impStat.statAtkLow/10000)+"만"
            +" ~ "
            +Math.floor(impStat.statAtkHigh/10000)+"만"
          }
        </div>
      </div>

      {/* 크뎀 보공 방무  */}
      <div className={classNames(
        'w-full',
        'h-3/6',

        'flex',
        'flex-col',
        'justify-around',
        'items-center',

        'space-y-2',
      )}>
        {[[impStat.critDmg, "크리티컬 데미지"], [impStat.bossDmg, "보스 공격력"], [impStat.ignoreDef, "방어력 무시"]].map(([key, name]) => (
          <div className={classNames(
            'w-full',
            'text-sm',
            'max-sm: text-xs',

            'flex',
            'justify-start',
            'items-center',
          )}
            key={name}>
            <div className={classNames(
              'w-1/4',

              'flex',
              'justify-center',
              'items-center',
            )}
            key={name + "_avatar"}
            ><Avatar src={`/icon/spec/${name}.png`} isSquare/></div>
            <div className={classNames(
              'w-1/2',

              // 'border-x',
              // 'border-gray-300',

              'flex',
              'justify-center',
              'items-center',
            )}
            key={name + "_name"}
            >{name+"(%)"}</div>
            <div className={classNames(
              'w-1/4',

              'flex',
              'justify-center',
              'items-center',

              'font-bold',
            )}
            key={name + "_value"}
            >{key}</div>
          </div>
        ))}
      </div>


      {/* 포스 */}
      <div className={classNames(
        'w-full',
        'h-1/6',

        'flex',
        'justify-center',
        'items-center',
      )}>
        <div className={classNames(
          'w-full',

          'flex',
          'justify-start',
          'items-center',
        )}>
          <div className={classNames(
            'w-1/4',

            'flex',
            'justify-center',
            'items-center',
          )}><Avatar src='/icon/spec/arcaneForce.png' /></div>
          <div className={classNames(
            'w-1/2',

            // 'border-x',
            // 'border-gray-300',

            'flex',
            'justify-center',
            'items-center',
          )}>아케인 포스</div>
          <div className={classNames(
            'w-1/4',

            'flex',
            'justify-center',
            'items-center',

            'font-bold',
          )}>{stat.arcaneForce}</div>
        </div>
      </div>

    </div>
  )
}

export default UserStat
