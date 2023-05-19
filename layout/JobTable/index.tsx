import React, { useEffect, useState } from 'react';
import { characters } from '@/data';
import classNames from 'classnames';
import { Card, Checkbox } from '@geist-ui/core';

export const JobTable = () => {
  const [totalLv, setTotalLv] = useState(0);
  const [ckArr, setCkArr] = useState(() => {
    if (typeof window !== 'undefined') {
      const localCkArr = localStorage.getItem('c2');

      if (localCkArr) {
        return JSON.parse(localCkArr);
      }
      return Array(43).fill([]);
    } else {
      return Array(43).fill([]);
    }
  });
  const [name, setName] = useState('')
  
  useEffect(() => {
    const n = localStorage.getItem('name')
    setName(n?n:'')
  })

  const handleChecker = (v: string[], index: number) => {
    //저장 
    setCkArr((prev: any[]) => {
      const newArr = [...prev];
      newArr[index] = v;
      return newArr;
    }
    );
  };

  useEffect(() => {
    //localstore
    localStorage.setItem('c2', JSON.stringify(ckArr));

    let total = 0;
    ckArr.map((v: string[]) => {
      if (v.length !== 0) {
        //각 요소 중 최댓값을 total에 더해나가기
        total += Math.max(...v.map((v) => parseInt(v)));
      }
    }
    );
    //console.log(total)
    setTotalLv(total);

  }, [ckArr])
  return (
    <>
      <div className={classNames(
        'w-full',


        'flex',
        'flex-col',

        'gap-y-4',

        'mt-4',
        'mb-12',
      )}>
        <Card>
          <p className={classNames(
            'text-sm',
          )}>💡 입력하시는 정보는 <i className={classNames(
            'font-bold',

            'decoration-pink-500',
            'underline',
          )}>인터넷 기록 삭제 전까지</i> 유효합니다람쥐🐿</p>
        </Card>
        <Card>
          {/* 티어 및 유니온 숫자 */}
          <div className={classNames(
            'w-full',
            'h-fit',

            'flex',
            'flex-row',
            'justify-start',
            'items-center',
          )}>
            <div className={classNames(
              'w-16',
              'h-16',

              'mr-10',
            )}>
              <img src={`/icon/union/bronze_${String(Math.round(totalLv / 500) + 1)}.png`} className={classNames(
                'w-2',

              )} />

            </div>

            <div className={classNames(
              'w-1/2',
              'py-4',
            )}>
              <div>{name}님의 유니온 레벨</div>
              <div>{totalLv}</div>
            </div>
          </div>
        </Card>
      </div>
      <div
        className={classNames(
          'w-full',
          'h-full',
          'max-h-96',

          'flex',
          'flex-col',
          'items-center',

          'gap-y-12',

          'py-12',
          'mb-4',

          'overflow-scroll'
        )}
      >
        <div
          className={classNames(
            'w-full',
            'h-12',

            'flex',
            'items-center',

            'border-b',
            'border-slate-300',

            'text-sm',
            'text-slate-200',
            'font-extrabold'
          )}
        >
          {/* 직업 */}
          <div className="w-2/12">직업</div>
          {/* 체크박스 */}
          <div className="w-4/12">체크박스</div>
          {/* 유니온효과 */}
          <div className="w-2/12">유니온 효과</div>
          {/* 링크효과 */}
          <div className="w-4/12">링크 효과</div>
        </div>
        {characters.map((v, index) => (
          <div
            key={index}
            className={classNames(
              'w-full',
              'h-fit',
              'flex',
              'items-center',

              'text-sm',
              'text-slate-300',
            )}
          >
            {/* 직업 */}
            <div className={classNames(
              'w-2/12',
              'text-xs',

              { 'line-through': ckArr[index].length === 3 },
              { 'text-red-500': ckArr[index].length === 3 },

            )}>{v['name']}</div>
            {/* 체크박스 */}
            <div className={classNames('w-4/12')}>
              <Checkbox.Group value={ckArr[index]} onChange={(e) => handleChecker(e, index)}>
                <Checkbox value="70">70</Checkbox>
                <Checkbox value="120">120</Checkbox>
                <Checkbox value="140">140</Checkbox>
              </Checkbox.Group>
            </div>
            {/* 유니온효과 */}
            <div className={classNames('w-2/12')}>{v['union']}</div>
            {/* 링크효과 */}
            <div className={classNames('w-4/12')}>{v['link']}</div>
          </div>
        ))}
      </div>

    </>
  );
};
