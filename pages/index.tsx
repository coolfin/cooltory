import { Container } from "@/components/Container";
import styled from "@emotion/styled"
import { Tabs } from "@geist-ui/core";
import classNames from "classnames";
import { useEffect, useState } from "react";



export default function Home() {
  const [name, setName] = useState('')

  useEffect( () => {
    //첫 페이지 방문 시 이름 입력
    if(!localStorage.getItem('name') || localStorage.getItem('name')?.trim() === ''){
      const nick= prompt('안녕하세요🙌 이름을 알려주실래요? \n한 번 입력하면 못 바꾸니 신중하게 입력해 주세요!')
      const res:string = nick?nick:''
      localStorage.setItem('name',res)
      setName(res)

    }else{
      const nick = localStorage.getItem('name')
      setName(nick || '')
    }
  },[])
  return (
    <Container className={classNames(
      'w-full',
      'h-96',
      'my-28',


      'flex',
      'flex-col',
      'justify-center',
      'items-center',

      'text-3xl',
      'text-white',
      'font-extrabold',
    )}>{name}님, 안녕하세요 🙌<br/>
    <span className={classNames(
      'text-sm',
      'text-gray-400',
      'font-normal',

      'mt-4'
    )}>일 하러 가야겠죠? 🐝🐝</span>
    </Container>
  )
}
