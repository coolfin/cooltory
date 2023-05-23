import { Container } from '@/components/Container';
import { Card, Collapse } from '@geist-ui/core';
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
            'mt-12',
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
        <div className={classNames('w-full', 'h-full',
        )}>
          <Collapse.Group>
            <Collapse
              title="CASE 1 [6블 7트]"
              subtitle="해당 직업 : 제로 은월 키네시스 블래스터 카데나 일리움 아크 패스파인더 호영 아델 카인 라라 칼리 제외한 모든 직업"
            >
              <div className={classNames(
                'flex',
                'py-10',

                'justify-between',
                'items-center',

                'max-sm:flex-col',
                'max-sm:gap-y-2',

              )}>
                <img src="/eq_1.PNG" className={classNames('w-40')} />
                {/* 이전장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식,
                  벨트, 보조무기, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i> (모자, 한벌옷, 견장,
                  장갑, 신발, 펜던트, 무기)
                </span>
                <i>>></i>
                {/* 업글 장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-cyan-200">카오스 루타비스</i> (모자, 상의, 하의,
                  무기)
                  <br />
                  <br />
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식, 벨트, 보조무기, 망토)
                  <br/>
                  <br/>
                  <i className='text-purple-200'>트레져</i>(견장, 장갑, 신발)
                  <br/>
                  <br/>
                  <i className='text-green-200'>보스장신구</i> (실버블라썸링, 고피아 반지, 성배, 매커네이터(도미), <br/> 아쿠아틱레터,데아시두스(지옥의 불꽃), 크리스탈 웬투스 뱃지)
                </span>
                <img src="/case1.PNG" className={classNames('w-40')} />
              </div>
            </Collapse>
            <Collapse title="CASE 2 [6블 7트]" subtitle="해당 직업 : 은월">
            <div className={classNames(
                'flex',
                'py-10',

                'justify-between',
                'items-center',

                'max-sm:flex-col',
                'max-sm:gap-y-2',

              )}>
                <img src="/eq_2.PNG" className={classNames('w-40')} />
                {/* 이전장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식,
                  모자, 벨트, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i> (펜던트, 무기, 한벌옷, 견장, 장갑, 신발, 보조무기)
                </span>
                <i>>></i>
                {/* 업글 장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-cyan-200">카오스 루타비스</i> (모자, 상의, 하의,
                  무기)
                  <br />
                  <br />
                  <i className="text-red-200">블랙</i> (반지)
                  <br/>
                  <br/>
                  <i className='text-purple-200'>트레져</i>(펜던트, 견장, 장갑, 신발, 보조무기, 망토)
                  <br/>
                  <br/>
                  <i className='text-green-200'>보스장신구</i> (실버블라썸링, 고피아 반지, 성배, 매커네이터(도미), <br/> 아쿠아틱레터,데아시두스(지옥의 불꽃), 크리스탈 웬투스 뱃지,<br/> 응축된 힘의 결정석, 골든 클로버 벨트)
                </span>
                <img src="/case2.PNG" className={classNames('w-40')} />
              </div>
            </Collapse>
            <Collapse title="CASE 3 [6블 6트]" subtitle="해당 직업 : 아크 라라">
            <div className={classNames(
                'flex',
                'py-10',

                'justify-between',
                'items-center',

                'max-sm:flex-col',
                'max-sm:gap-y-2',

              )}>
                <img src="/eq_3.PNG" className={classNames('w-40')} />
                {/* 이전장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식,
                  벨트, 망토, 모자)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i> (펜던트, 무기, 한벌옷, 견장, 장갑, 신발)
                </span>
                <i>>></i>
                {/* 업글 장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-cyan-200">카오스 루타비스</i> (모자, 상의, 하의,
                  무기)
                  <br />
                  <br />
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식, 벨트, 망토)
                  <br/>
                  <br/>
                  <i className='text-purple-200'>트레져</i>(견장, 장갑, 신발)
                  <br/>
                  <br/>
                  <i className='text-green-200'>보스장신구</i> (실버블라썸링, 고피아 반지, 성배, 매커네이터(도미), <br/> 아쿠아틱레터,데아시두스(지옥의 불꽃), 크리스탈 웬투스 뱃지)
                </span>
                <img src="/case3.PNG" className={classNames('w-40')} />
              </div>
            </Collapse>
            <Collapse
              title="CASE 4 [5블 6트]"
              subtitle="해당 직업 : 제로 키네시스 블래스터 카데나 일리움 패스파인더 호영 아델 카인 칼리"
            >
              <div className={classNames(
                'flex',
                'py-10',

                'justify-between',
                'items-center',

                'max-sm:flex-col',
                'max-sm:gap-y-2',

              )}>
                <img src="/eq_4.PNG" className={classNames('w-40')} />
                {/* 이전장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식, 벨트, 망토)
                  <br />
                  <br />
                  <i className="text-purple-200">트레져</i> (모자, 펜던트, 한벌옷, 견장, 장갑, 신발)
                </span>
                <i>>></i>
                {/* 업글 장비 */}
                <span className={classNames('text-xs', 'ml-12', 'font-bold')}>
                  <i className="text-cyan-200">카오스 루타비스</i> (모자, 상의, 하의,
                  무기)
                  <br />
                  <br />
                  <i className="text-red-200">블랙</i> (반지, 펜던트, 얼굴장식, 벨트, 망토)
                  <br/>
                  <br/>
                  <i className='text-purple-200'>트레져</i>(견장, 장갑, 신발)
                  <br/>
                  <br/>
                  <i className='text-green-200'>보스장신구</i> (실버블라썸링, 고피아 반지, 성배, 매커네이터(도미), <br/> 아쿠아틱레터,데아시두스(지옥의 불꽃), 크리스탈 웬투스 뱃지)
                </span>
                <img src="/case4.PNG" className={classNames('w-40')} />
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </Container>
  );
};

export default Page;
