import { boss_attack, exp_attack } from '@/data';
import { Collapse, User } from '@geist-ui/core';
import classNames from 'classnames';
import React from 'react';

export const ExpPage = () => {
  return (
    <div
      className={classNames(
        'w-full',
        'h-full',

        'py-6'
      )}
    >
      <div className={classNames('mb-4')}>
        <Collapse shadow title="경험치 도핑">
          <div
            className={classNames(
              'grid',
              'grid-cols-2',
              'gap-4',

              'max-sm:grid-cols-1'
            )}
          >
            {exp_attack.map((v, index) => (
              <User
                src={`/icon/exp/exp_${v['url']}.png`}
                name={v['title']}
                className={classNames(
                  'hover:cursor-pointer',
                  'hover:opacity-80'
                )}
              />
            ))}
          </div>
        </Collapse>
      </div>

      <div className={classNames('mb-4')}>
        <Collapse shadow title="주간보스 도핑">
          <div
            className={classNames(
              'grid',
              'grid-cols-2',
              'gap-4',

              'max-sm:grid-cols-1'
            )}
          >
            {boss_attack.map((v, index) => (
              <User
                src={`/icon/boss/${v['url']}.png`}
                name={v['title']}
                className={classNames(
                  'hover:cursor-pointer',
                  'hover:opacity-80'
                )}
              />
            ))}
            <div
              className={classNames(
                'py-2',
                'col-span-3',

                'max-sm:col-span-1',

                'text-sm',
                'text-gray-200'
              )}
            >
              {' '}
              <span className="underline decoration-red-500">
                비약2개 / 같은 스탯 물약 간 도핑은 불가능하며, <br />
                아래는 불가능한 예시입니다.
              </span>
              <div
                className={classNames(
                  'pt-2',

                  'text-xs',

                  'grid',
                  'grid-cols-3',
                  'max-sm:grid-cols-1'
                )}
              >
                <User src="/icon/boss/redpotion.png" name="반빨별 + 고보킬" />
                <User src="/icon/boss/bluepotion.png" name="반파별 + 고관비" />
                <User
                  src="/icon/boss/legendpotion.png"
                  name="반황별 + 전영비"
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default ExpPage;
