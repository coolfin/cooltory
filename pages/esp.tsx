import classNames from 'classnames';
import React from 'react';

function MidNightPage() {
  return (
    <div className={classNames('flex', 'flex-col')}>
      <span className={classNames('text-xs', 'text-gray-500')}>
        ref{' '}
        <a
          href="https://www.inven.co.kr/board/maple/2304/28788"
          target="_blank"
        >
          메이플스토리 인벤
        </a>
      </span>
      <div
        className={classNames(
          'w-full',
          'h-full',

          'flex',
          'justify-center',
          'items-center',

          'pt-12'
        )}
      >
        <img src="/icon/espera.png" alt="프로텍트 에스페라" />
      </div>
    </div>
  );
}

export default MidNightPage;
