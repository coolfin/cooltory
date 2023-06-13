import { EquipType } from '@/@types/next'
import classNames from 'classnames'
import React, { useEffect } from 'react'

const Pt_to_Kr = {
  "lukP": "LUK % ",
  "strP": "STR % ",
  "dexP": "DEX % ",
  "intP": "INT % ",
  "hpP": "HP % ",
  "mpP": "MP % ",
  "allStatP": "올스탯 % ",

  "ignoreDef": "방어력 무시 % ",
  "bossDmg": "보스 공격력 % ",
  "critDmg": "크리티컬 데미지 % ",

  "atkP": "공격력 % ",
  "defP": "방어력 % ",

  "str": "STR + ",
  "dex": "DEX + ",
  "int": "INT + ",
  "luk": "LUK + ",
}

export const UserEquip = ({ equip }: { equip: EquipType[] }) => {
  return (
    <div className={classNames(
      'w-full',
      'h-96',

      'border-x',
      'border-gray-300',
      'max-sm:rounded-md',

      'content-center',
      'justify-items-center',

      'overflow-scroll'
    )}>
      {equip?.map((item: any) => (
        <div className={classNames(
          'w-full',

          'flex',
          'max-sm:flex-col',
          'justify-start',
          'items-center',

          'p-4',

          'text-sm',
          'max-sm:text-xs',

          'hover:opacity-70 cursor-pointer',

        )} 
        key = {item["name"]}
        onClick={() => {

        }}>
          {/* 아이템 이미지 */}
          <div className={classNames(
            'w-1/5',
            'max-sm:w-full',

            'flex',
            'justify-center',
            'items-center', 

            'max-sm:mb-2'
          )}>
          <img src={item["imageUrl"]} className={classNames(
            'w-8',
            
            'border',
            'border-gray-300',
            'rounded-md',

            'p-1',
          )}/>
          </div>

          {/* 잠재능력 */}
         
          <div className={classNames(
            'w-2/5',
            'max-sm:w-full',

            'text-center',

            'max-sm:mb-2'
          )}>{item.name}</div>
          <div className={classNames(
            'w-1/5',
            'max-sm:w-full',

            'text-center',

            'font-bold',

            //색
            item.grade === "rare" ? 'text-blue-500' :
            item.grade === "epic" ? 'text-purple-500' :
            item.grade === "unique" ? 'text-yellow-500' :
            item.grade === "legendary" ? 'text-green-500' : 'text-gray-500'
            
          )}>{
            item.grade === "rare" ? "레어" : 
            item.grade === "epic" ? "에픽" :
            item.grade === "unique" ? "유니크" :
            item.grade === "legendary" ? "레전드리" : "없음"
          }</div>

          {/* 스타포스 */}
          {item.star >= 0 && <div className={classNames(
            'w-1/5',
            'max-sm:w-full',

            'text-center',


          )}> {
            item.star === 0 ? "-" :
            item.star >= 1 ? "⭐"+item.star+"성" : "" 
          } </div>}
        </div>
      ))}
    </div>
  )
}

export default UserEquip