import { Container } from '@/components/Container'
import { Avatar, Card, User } from '@geist-ui/core'
import classNames from 'classnames'

function Page() {

    return (
        <Container>
            {/* header */}
            <div className={classNames(
                'mt-12',
                'mb-4',

                'grid',
                'gap-y-4',
            )}>
                <Card>
                    <p className={classNames(
                        'text-sm',

                        'max-sm:text-xs'
                    )}>🙏 1주 단위의 숙제를 한 눈에 볼 수 있는 페이지입니다. <i className='font-extrabold text-red-200'>과도한 게임은 어쩌구 저쩌구..</i></p>
                </Card>
                <Card>
                    <p className={classNames(

                        'text-sm',
                        'max-sm:text-xs'
                    )}>주간보스의 초기화 날짜는 <i className='font-extrabold decoration-red-600 underline'>목요일</i>, 그 외 퀘스트는 <i className='font-extrabold decoration-blue-600 underline'>일요일</i>에 초기화됩니다.  </p></Card>
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
            <div className={classNames(
                'flex',
                'flex-col',
                'justify-center',
                'items-start',

                'my-12',

                'space-y',

                'text-slate-300'
            )}>
                <div className='text-3xl font-bold my-4 text-white underline decoration-blue-500'>일일 숙제</div>
                {['이덴티스크 기본탐험 출석하기', '일일 보스', '우르스 3회 처치', '몬스터파크 2회', '일일 퀘스트(아케인리버)', '유니온 코인 수령'].map((v, i) => (
                    <div
                        key={i + "_daily_hw"}
                    >
                        {v}
                    </div>
                ))}

                <h3 className='text-3xl font-bold mb-4 mt-12 text-white underline decoration-red-500'>주간 숙제</h3>
                {["주 3회 레범몬 2000마리 처치하고 출석하기", "일일입장 1회 , 주 3회 식량창고(딸농) 하기", "주 3회 아쿠아 어드벤쳐(EXP 포인트) 하기", "주간 퀘스트(아케인 리버)" ,"주간 퀘스트(헤이븐, 야영지, 크리티아스)" , "주간보스 잡고 코인 획득하기"].map((v, i) => (
                    <div
                        key={i + "_weekly_hw"}
                    >
                        {v}
                    </div>
                ))}

                <h3 className='text-3xl font-bold mb-4 mt-12 text-white underline decoration-green-500'>일회성 퀘스트</h3>
                {["이덴티스크 마약 퀘스트 완료하기", "이덴티스크 피에스트 퀘스트 완료하기"].map((v, i) => (
                    <div
                        key={i + "_weekly_hw"}
                    >
                        {v}
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Page