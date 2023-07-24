import { Container } from '@/components/Container';
import classNames from 'classnames';
import React, { Fragment } from 'react';

export const GlobalFooter = () => {
  return (
    <div
      className={classNames(
        'w-full',

        'flex',
        'justify-between',
        'items-end',

        'py-4',
        'mt-4'
      )}
    >
      {/**좌측 */}
      <div className={classNames('font-normal', 'text-xs', 'text-gray-400')}>
        <a href="#" className="font-extrabold">
          뽀삐.com
        </a>
        은 메이플 유저를 위해 만들어졌으며, 작성되어 있는 정보는 실제 정보와
        다를 수 있습니다.
        <br />
        오류 제보 또는 문의/피드백은{' '}
        <a href="mailto:sorlti6952@gmail.com">쿨핀</a>에게 알려주세요. thanks to{' '}
        {/* <b className="text-cyan-300">셜광</b>,{' '}
        <b className="text-red-300">이상혁</b>,{' '}
        <b className="text-yellow-500">러셀</b>,{' '}
        <b className="text-purple-500">안오묘</b>,{' '}
        <b className="text-red-500">창석팔라딘</b> */}
        <br />
        copyright 2023. 근붕트.com all rights reserved.
        <br />
        designs rights are reserved by Maplestory.
      </div>

      <div className={classNames('font-light', 'text-xs')}>
        Last Update
        <br />
        <b>2023.07 [Ver. 3.0 beta]</b>
      </div>
    </div>
  );
};
