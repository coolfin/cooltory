import React, { useEffect, useMemo, useState } from 'react';
import { characters } from '@/data';
import classNames from 'classnames';
import { Checkbox } from '@geist-ui/core';

export const JobTable = () => {
  const [lvArr, setLvArr] = useState(Array(43).fill(0));
  const [ckArr, setCkArr] = useState(Array(43).fill([]));
  const handleChecker = (v) => {
    console.log(v);
  };
  return (
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
            'text-slate-300'
          )}
        >
          {/* 직업 */}
          <div className={classNames('w-2/12 text-xs')}>{v['name']}</div>
          {/* 체크박스 */}
          <div className={classNames('w-4/12')}>
            <Checkbox.Group value={ckArr[index]}>
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
  );
};
