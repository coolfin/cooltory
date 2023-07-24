import { Button, Spinner } from '@geist-ui/core';
import classNames from 'classnames';
import Link from 'next/link';
import useSWR from 'swr';

import { BUTTON_DUMMY_DATA } from '@/data/dummy_data';

//node

export default function Home() {
  // const [name, setName] = useState('');

  // useEffect( () => {
  //   //첫 페이지 방문 시 이름 입력
  //   if(!localStorage.getItem('name') || localStorage.getItem('name')?.trim() === ''){
  //     const nick= prompt('안녕하세요🙌 이름을 알려주실래요? \n한 번 입력하면 못 바꾸니 신중하게 입력해 주세요!')
  //     const res:string = nick?nick:''
  //     localStorage.setItem('name',res)
  //     setName(res)

  //   }else{
  //     const nick = localStorage.getItem('name')
  //     setName(nick || '')
  //   }
  // },[])

  return (
    // <Container
    //   className={classNames(
    //     'w-full',
    //     'h-96',
    //     'my-28',

    //     'flex',
    //     'flex-col',
    //     'justify-center',
    //     'items-center',

    //     'text-3xl',
    //     'text-white',
    //     'font-extrabold'
    //   )}
    // >
    //   {name}님, 안녕하세요 🙌
    //   <br />
    //   <span
    //     className={classNames(
    //       'text-sm',
    //       'text-gray-400',
    //       'font-normal',

    //       'mt-4'
    //     )}
    //   >
    //     일 하러 가야겠죠? 🐝🐝
    //   </span>
    // </Container>

    <div>
      {BUTTON_DUMMY_DATA.map((item) => (
        <div
          className={classNames(
            'h-24',
            'flex',
            'justify-center',
            'items-center'
          )}
          key={item.id}
        >
          {' '}
          <Link href={item.url}>
            <Button width={3} height={1.5} key={item.id}>
              {item.text}
            </Button>{' '}
          </Link>
        </div>
      ))}
    </div>
  );
}
