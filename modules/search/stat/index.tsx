import { StatType } from '@/@types/next';
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export const UserStat = ({ stat }: { stat: StatType }) => {
  const [impStat, setImpStat] = useState<StatType>(stat);

  useEffect(() => {
    setImpStat(stat);
  }, [stat]);

  return (
    <div className={classNames(
      'w-full',
      'h-96',

      'overflow-y-scroll',

      
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
    )}>
      
      {/* 스공 */}
      <div className={classNames(
        
      )}>
      <p>statAtkHigh: {impStat.statAtkHigh}</p>
      <p>statAtkLow: {impStat.statAtkLow}</p>
      </div>
      
      {/* 주스탯 */}
      <div>

      <p>힘 {impStat.str}</p>
      <p>dex: {impStat.dex}</p>
      <p>int: {impStat.int}</p>
      <p>luk: {impStat.luk}</p>
      </div>

      {/* 크뎀 보공 방무  */}
      <div>
              <p>critDmg: {impStat.critDmg}</p>
      <p>bossDmg: {impStat.bossDmg}</p>
      <p>ignoreDef: {impStat.ignoreDef}</p>
      </div>


      {/* 포스 */}
      <div>
        <p>arcaneForce: {impStat.arcaneForce}</p>
      </div>
      
    </div>
  )
}

export default UserStat
