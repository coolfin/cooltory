import { CharacterType } from '@/@types/next';

export const characters: CharacterType[] = [
  //모험가
  {
    name: '히어로🗡',
    union: 'STR 증가',
    link: '일정량 이하 HP 회복',
  },
  {
    name: '팔라딘🗡',
    union: 'STR 증가',
    link: '일정량 이하 HP 회복',
  },
  {
    name: '다크나이트🗡',
    union: '최대 HP 증가',
    link: '일정량 이하 HP 회복',
  },

  {
    name: '아크메이지(불,독)🦯',
    union: '최대 MP 증가',
    link: '약점 중첩 데미지, 방어력 무시',
  },

  {
    name: '아크메이지(썬,콜)🦯',
    union: 'INT 증가',
    link: '약점 중첩 데미지, 방어력 무시',
  },

  {
    name: '비숍🦯',
    union: '최대 MP 증가',
    link: '약점 중첩 데미지, 방어력 무시',
  },

  {
    name: '보우마스터🏹',
    union: 'DEX 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
  },

  {
    name: '신궁🏹',
    union: '크리티컬 확률 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
  },

  {
    name: '패스파인더🏹',
    union: 'DEX 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
  },
  {
    name: '나이트로드🔪',
    union: '크리티컬 확률 증가',
    link: '상태이상 추가 데미지',
  },
  {
    name: '섀도어🔪',
    union: 'LUK 증가',
    link: '상태이상 추가 데미지',
  },
  {
    name: '듀얼블레이드🔪',
    union: 'LUK 증가',
    link: '상태이상 추가 데미지',
  },

  {
    name: '바이퍼🦜',
    union: 'STR 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
  },

  {
    name: '캡틴🦜',
    union: '소환수 지속 시간 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
  },
  {
    name: '캐논마스터🦜',
    union: 'STR 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
  },
  //시그너스
  {
    name: '소울마스터🦋',
    union: '최대 HP 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
  },
  {
    name: '플레임위자드🦋',
    union: 'INT 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
  },
  {
    name: '윈드브레이커🦋',
    union: 'DEX 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
  },
  {
    name: '나이트워커🦋',
    union: 'LUK 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
  },
  {
    name: '스트라이커🦋',
    union: 'STR 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
  },
  {
    name: '미하일🦋',
    union: '최대 HP 증가',
    link: '스탠스 효과(액티브)',
  },
];
