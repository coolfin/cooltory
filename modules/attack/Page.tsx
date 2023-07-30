import { Container } from '@/components/Container';
import { Card, Spinner, Tabs } from '@geist-ui/core';

import { ExpPage } from './exp/Page';

import classNames from 'classnames';
import MidnightPage from './midnight/Page';
import Mayak from './mayak';
import { useRouter } from 'next/router';
import EspPage from './esp/Page';

export const Page = () => {
  const router = useRouter();
  return (
    <Container>
      <div
        className={classNames(
          'w-full',
          'h-full',

          'pt-12'
        )}
      >
        <Card>
          <p className={classNames('text-sm', 'py-2')}>
            📸 각종 공략 탭 입니다. 또한,{' '}
            <i className="decoration-cyan-400 underline">[🐣]</i>은 얻을 수 없을
            수 있는 도핑입니다.
          </p>
        </Card>
        <div
          className={classNames(
            'w-full',
            'h-full',

            'pt-12'
          )}
        >
          <Tabs hideDivider>
            {/* 도핑 */}
            <Tabs.Item label="도핑" value="1">
              <ExpPage />
            </Tabs.Item>
            {/* 플래그 */}
            {/* <Tabs.Item label="플래그" value="2">
              <FlagPage />
            </Tabs.Item> */}
            {/* 던전 프로스트 */}
            {/* <Tabs.Item label="던전 프로스트" value="3" >
                            <DgPage />
                        </Tabs.Item> */}
            {/* 미드나잇체이서 */}
            <Tabs.Item label="미드나잇 체이서" value="4">
              <MidnightPage />
            </Tabs.Item>
            <Tabs.Item label="프로텍트 에스페라" value="5">
              <EspPage />
            </Tabs.Item>
            <Tabs.Item label="이덴티스크 마약 시뮬레이터" value="6">
              <div className={classNames('w-full', 'my-8')}>
                <Card>
                  <p className={classNames('text-sm', 'py-2')}>
                    🙏 포인트 꼬였으면 새로고침 한 번 진행해 주실게요~!
                  </p>
                </Card>
              </div>
              <Mayak />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Page;
