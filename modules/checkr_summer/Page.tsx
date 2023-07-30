import { Container } from '@/components/Container';
import { Avatar, Card, User } from '@geist-ui/core';
import classNames from 'classnames';

function Page() {
  return (
    <Container>
      {/* header */}
      <div
        className={classNames(
          'mt-12',
          'mb-4',

          'grid',
          'gap-y-4'
        )}
      >
        <Card>
          <p
            className={classNames(
              'text-sm',

              'max-sm:text-xs'
            )}
          >
            🙏 1주 단위의 숙제를 한 눈에 볼 수 있는 간단한 페이지입니다.{' '}
            <i className="font-extrabold text-red-200">
              과도한 게임은 어쩌구 저쩌구..
            </i>
          </p>
        </Card>
        <Card>
          <p className={classNames('text-sm', 'max-sm:text-xs')}>
            길드컨텐츠, 주간퀘스트 초기화 날짜는{' '}
            <i className="font-extrabold decoration-red-600 underline">
              일요일
            </i>
            , 그 외 퀘스트는{' '}
            <i className="font-extrabold decoration-blue-600 underline">
              목요일
            </i>
            에 초기화됩니다.{' '}
          </p>
        </Card>
      </div>
      {/*

            <일일>
                8. 유니온코인 수령
                10. 몬스터파크 

                <주간>

                2. 1주일에 3번 실험탐험 레범몬 2000마리 처치하고 출석하기
                3. 하버캐 포함 1주일에 3번 식량창고 3번씩 하기
                4. 아쿠아 어드벤쳐 1주일에 3번씩 하기
                5. 주간보스 코인 획득하기
            */}
      <div
        className={classNames(
          'w-full',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',

          'my-12',

          'space-y',

          'text-slate-300'
        )}
      >
        <div className="text-3xl font-bold my-4 text-white underline decoration-blue-500">
          일일 숙제
        </div>
        {[
          '이덴티스크 기본탐험 출석하기',
          '일일 보스(마일리지)',
          '우르스',
          '몬스터파크(익스트림)',
          '아케인리버 일일퀘스트',
          '그란디스 일일퀘스트',
          '유니온 퀘스트',
        ].map((v, i) => (
          <div key={i + '_daily_hw'}>{v}</div>
        ))}

        <h3 className="text-3xl font-bold mb-4 mt-12 text-white underline decoration-red-500">
          주간 1회
        </h3>
        {[
          '바람주화 수령하기',
          '수로 및 플래그 하기 🌟🌟🌟🌟🌟',

          '주간 퀘스트(아케인 리버)',
          '주간 퀘스트(헤이븐, 야영지, 크리티아스)',

          '무릉',
        ].map((v, i) => (
          <div key={i + '_weekly_hw'}>{v}</div>
        ))}

        <h3 className="text-3xl font-bold mb-4 mt-12 text-white underline decoration-green-500">
          주간 3회
        </h3>
        {[
          '티스크 트로피컬 어드벤쳐',
          '티스크의 식량창고',
          '코코넛 스매치 챌린지',
          '이덴티스크 심화탐험',
        ].map((v, i) => (
          <div key={i + '_weekly_hw'}>{v}</div>
        ))}
      </div>
    </Container>
  );
}

export default Page;
