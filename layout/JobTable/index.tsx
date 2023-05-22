import React, { useEffect, useState } from 'react';
import { characters } from '@/data';
import classNames from 'classnames';
import { Card, Checkbox, Slider, Tooltip } from '@geist-ui/core';

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
  const [isLineThrough, setIsLineThrough] = useState<boolean[]>(Array(43).fill(false));
  const [name, setName] = useState('')

  useEffect(() => {
    const n = localStorage.getItem('name')
    setName(n ? n : '')
  }, [])

  useEffect(() => {
    //로컬스토리지에 저장
    localStorage.setItem('c2', JSON.stringify(ckArr));

    //레벨 합계 구하기
    let total = 0;
    ckArr.map((v: string[]) => {
      if (v.length !== 0) {
        //각 요소 중 최댓값을 total에 더해나가기
        let temp_lv = Math.max(...v.map((v) => parseInt(v)));
        total += temp_lv;
      }
    }
    );
    setTotalLv(total);


    //체크박스가 4개가 되면 해당 인덱스의 isLineThrough을 true로 바꿔준다
    ckArr.map((v: string[], index: number) => {
      if (v.length === 4) {
        //해당 인덱스의 isLineThrough을 true로 바꿔준다
        setIsLineThrough((prev: boolean[]) => {
          const newArr = [...prev];
          newArr[index] = true;
          return newArr;
        });
      } else {

        setIsLineThrough((prev: boolean[]) => {
          const newArr = [...prev];
          newArr[index] = false;
          return newArr;
        });
      }
    })

  }, [ckArr])

  const handleChecker = (v: string[], index: number) => {
    //저장 
    setCkArr((prev: any[]) => {
      const newArr = [...prev];
      newArr[index] = v;
      return newArr;
    }
    );
  };


  return (
    <>
      <div className={classNames(
        'w-full',


        'flex',
        'flex-col',

        'gap-y-4',

        'mt-12',
        'mb-20',
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

              'flex',
              'justify-center',
              'items-center',
            )}>
              <img src={`/icon/union/union_${String(Math.floor(totalLv / 1000) + 1)}.png`} className={classNames(
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
      <div>
        {/* 내가 키운 캐릭터 */}
        <div className={classNames(
          'w-fit',
          'text-sm',
          'font-bold',
        )}>
          내가 키워야 될 직업들 👼 <i className='text-xs font-normal ml-2 underline decoration-cyan-400'>200 달성 체크 시 자동 삭제됩니다!</i>
        </div>
        {/* 직업 목록 */}
        <div className={classNames(
          'w-full',
          'h-40',

          'mt-12',

          'grid',
          'grid-cols-5',
          'gap-x-2',
          'gap-y-2',

          'overflow-scroll',

        )}>
          {
            characters.map((v, index: number) => (
              !isLineThrough[index] &&
              <div className={classNames(
                'w-full',

                'text-sm',

                'flex',
                'justify-center',
                'items-center',

                'border-slate-200',
                'border',
                'rounded-full',

                'py-2',

                'hover:cursor-pointer',
                'hover:opacity-50',
              )}>
                  {v['name']}
              </div>
            ))
          }
        </div>
      </div>
      <div className={classNames(
        'w-full',
        'h-12',

        'mt-20',

        'flex',
        'items-center',

      )}>
        <i className='text-sm font-extrabold mr-1'>유니온 및 링크효과</i> 설명 <i className='text-xs font-normal ml-2 text-slate-200'>아래부터 체크박스 일일히 눌러주세요..ㅎ</i>
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

          'py-4',
          'mb-12',

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

              { 'line-through': isLineThrough[index] },
              { 'text-red-500': isLineThrough[index] },

            )}>{v['name']}</div>
            {/* 체크박스 */}
            <div className={classNames('w-4/12')}>
              <Checkbox.Group value={ckArr[index]} onChange={(e) => handleChecker(e, index)}>
                <Checkbox value="70">70</Checkbox>
                <Checkbox value="120">120</Checkbox>
                <Checkbox value="140">140</Checkbox>
                <Checkbox value="200">200</Checkbox>
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
