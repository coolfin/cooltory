import { Container } from '@/components/Container';
import { Card, Collapse, Note } from '@geist-ui/core';
import classNames from 'classnames';
import React from 'react';

export const Page = () => {
  return (
    <Container>
      <div
        className={classNames(
          'w-full',
          'h-fit',

          'flex',
          'flex-col',
          'justify-start',

          'gap-y-2',
          'mt-12',
          'mb-4'
        )}
      >
        {/* header */}
        <div
          className={classNames(
            'w-full',
            'h-fit',

            'text-sm',
            'font-bold'
          )}
        >
          <Card shadow>
            📢 Ctrl+F로 직업이 나오면 참고하고 없으면 CASE 1으로 가주십셔{' '}
          </Card>
        </div>
        <div
          className={classNames(
            'w-full',
            'h-24',

            'gap-y-1',
            'mt-12'
          )}
        >
          <h3>유니온 육성 세팅</h3>
          <span className={classNames('text-xs', 'text-gray-500')}>
            ref{' '}
            <a
              href="https://www.inven.co.kr/board/maple/2304/33764?my=chu"
              target="_blank"
            >
              메이플스토리 인벤
            </a>
          </span>
        </div>
        {/* body */}
        <div className={classNames('w-full', 'h-full')}>
          <Collapse.Group>
            <Collapse
              title="CASE 1 [6블 7트]"
              subtitle="해당 직업 : 제로 은월 키네시스 블래스터 카데나 일리움 아크 패스파인더 호영 아델 카인 라라 칼리 제외한 모든 직업"
            >
              <div className="flex py-10 items-center">
                <img src="/eq_1.PNG" className={classNames('w-40')} />
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i>(반지, 펜던트, 얼굴장식,
                  벨트, 보조무기, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i>(모자, 한벌옷, 견장,
                  장갑, 신발, 펜던트, 무기)
                </span>
              </div>
            </Collapse>
            <Collapse title="CASE 2 [6블 7트]" subtitle="해당 직업 : 은월">
              <div className="flex py-10 items-center">
                <img src="/eq_2.PNG" className={classNames('w-40')} />
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i>(반지, 펜던트, 얼굴장식,
                  벨트, 모자, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i>(보조무기, 한벌옷,
                  견장, 장갑, 신발, 펜던트, 무기)
                </span>
              </div>
            </Collapse>
            <Collapse title="CASE 3 [6블 6트]" subtitle="해당 직업 : 아크 라라">
              <div className="flex py-10 items-center">
                <img src="/eq_4.PNG" className={classNames('w-40')} />
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i>(반지, 펜던트, 얼굴장식,
                  벨트, 모자, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i>(한벌옷, 견장, 장갑,
                  신발, 펜던트, 무기)
                </span>
              </div>
            </Collapse>
            <Collapse
              title="CASE 4 [5블 6트]"
              subtitle="해당 직업 : 제로 키네시스 블래스터 카데나 일리움 패스파인더 호영 아델 카인 칼리"
            >
              <div className="flex py-10 items-center">
                <img src="/eq_4.PNG" className={classNames('w-40')} />
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i>(반지, 펜던트, 얼굴장식,
                  벨트, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i>(모자,한벌옷, 견장,
                  장갑, 신발, 펜던트)
                </span>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </Container>
  );
};

export default Page;
