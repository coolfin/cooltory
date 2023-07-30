import { CharacterType, DopingType } from '@/@types/next';

export const characters: CharacterType[] = [
  //모험가
  {
    name: '히어로🗡',
    union: 'STR 증가',
    link: '일정량 이하 HP 회복',
    order: '-',
    uorder: '9(힘)',
  },
  {
    name: '팔라딘🗡',
    union: 'STR 증가',
    link: '일정량 이하 HP 회복',
    order: '-',
    uorder: '9(힘)',
  },
  {
    name: '다크나이트🗡',
    union: '최대 HP 증가',
    link: '일정량 이하 HP 회복',
    order: '-',
    uorder: '9(힘)',
  },

  {
    name: '아크메이지(불,독)🦯',
    union: '최대 MP 증가',
    link: '약점 중첩 데미지, 방어력 무시',
    order: '28',
    uorder: '-',
  },

  {
    name: '아크메이지(썬,콜)🦯',
    union: 'INT 증가',
    link: '약점 중첩 데미지, 방어력 무시',
    order: '29',
    uorder: '-',
  },

  {
    name: '비숍🦯',
    union: '최대 MP 증가',
    link: '약점 중첩 데미지, 방어력 무시',
    order: '30',
    uorder: '-',
  },

  {
    name: '보우마스터🏹',
    union: 'DEX 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
    order: '14',
    uorder: '9(민첩)',
  },

  {
    name: '신궁🏹',
    union: '크리티컬 확률 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
    order: '15',
    uorder: '2',
  },

  {
    name: '패스파인더🏹',
    union: 'DEX 증가',
    link: '크리티컬 확률 증가, 몬컬 등록 확률 증가',
    order: '13',
    uorder: '9(민첩)',
  },
  {
    name: '나이트로드🔪',
    union: '크리티컬 확률 증가',
    link: '상태이상 추가 데미지',
    order: '23',
    uorder: '2',
  },
  {
    name: '섀도어🔪',
    union: 'LUK 증가',
    link: '상태이상 추가 데미지',
    order: '22',
    uorder: '9(행운)',
  },
  {
    name: '듀얼블레이드🔪',
    union: 'LUK 증가',
    link: '상태이상 추가 데미지',
    order: '24',
    uorder: '9(행운)',
  },

  {
    name: '바이퍼🦜',
    union: 'STR 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
    order: '-',
    uorder: '9(힘)',
  },

  {
    name: '캡틴🦜',
    union: '소환수 지속 시간 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
    order: '-',
    uorder: '14',
  },
  {
    name: '캐논슈터🦜',
    union: 'STR 증가',
    link: '올스탯 증가, 최대 HP/MP 증가, 데미지 흡수량 증가',
    order: '-',
    uorder: '9(힘)',
  },
  //시그너스
  {
    name: '소울마스터🦋',
    union: '최대 HP 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
    order: '17',
    uorder: '-',
  },
  {
    name: '플레임위자드🦋',
    union: 'INT 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
    order: '19',
    uorder: '9(지능)',
  },
  {
    name: '윈드브레이커🦋',
    union: 'DEX 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
    order: '18',
    uorder: '9(민첩)',
  },
  {
    name: '나이트워커🦋',
    union: 'LUK 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
    order: '21',
    uorder: '9(행운)',
  },
  {
    name: '스트라이커🦋',
    union: 'STR 증가',
    link: '공/마/상태이상 내성/모든속성 내성 증가',
    order: '20',
    uorder: '9(힘)',
  },
  {
    name: '미하일🦋',
    union: '최대 HP 증가',
    link: '상태이상 저항',
    order: '-',
    uorder: '-',
  },

  //레지스탕스

  {
    name: '블래스터🚩',
    union: '방어율 무시 증가',
    link: '부활 시 일정 시간 무적',
    order: '33',
    uorder: '8',
  },

  {
    name: '배틀메이지🚩',
    union: 'INT 증가',
    link: '부활 시 일정 시간 무적',
    order: '36',
    uorder: '9(지능)',
  },
  {
    name: '와일드헌터🚩',
    union: '공격 시(20%) 데미지 증가',
    link: '부활 시 일정 시간 무적',
    order: '35',
    uorder: '7',
  },
  {
    name: '메카닉🚩',
    union: '버프 지속 시간 증가',
    link: '부활 시 일정 시간 무적',
    order: '34',
    uorder: '5',
  },
  {
    name: '제논🚩',
    union: 'STR/DEX/LUK 증가',
    link: '올스탯% 증가',
    order: '27',
    uorder: '13',
  },

  //데몬
  {
    name: '데몬슬레이어😈',
    union: '상태이상 증가',
    link: '보스 공격시 데미지% 증가',
    order: '10',
    uorder: '15',
  },
  {
    name: '데몬어벤져😈',
    union: '보스 공격력 증가',
    link: '데미지% 증가',
    order: '1',
    uorder: '3',
  },

  //영웅

  {
    name: '아란👑',
    union: '타격 시 HP 회복',
    link: '콤보킬 경험치 획득량 증가',
    order: '-',
    uorder: '-',
  },
  {
    name: '에반👑',
    union: '타격 시 MP 회복',
    link: '룬 지속시간 증가',
    order: '7',
    uorder: '-',
  },
  {
    name: '루미너스👑',
    union: 'INT 증가',
    link: '방어율 무시% 증가',
    order: '12',
    uorder: '9(지능)',
  },
  {
    name: '메르세데스👑',
    union: '스킬 쿨타임 감소',
    link: '경험치 획득량% 증가',
    order: '3',
    uorder: '6',
  },
  {
    name: '팬텀👑',
    union: '메소 획득량 증가',
    link: '크리티컬 확률% 증가',
    order: '8',
    uorder: '10',
  },
  {
    name: '은월👑',
    union: '크리티컬 데미지 증가',
    link: '구사일생',
    order: '-',
    uorder: '4',
  },
  //노바
  {
    name: '카이저🐲',
    union: 'STR 증가',
    link: 'HP% 증가',
    order: '-',
    uorder: '9(힘)',
  },
  {
    name: '카데나⛓',
    union: 'LUK 증가',
    link: '낮은레벨 공격 시 데미지% 증가, 상태이상 걸린 적 공격 시 데미지% 증가',
    order: '16',
    uorder: '9(행운)',
  },
  {
    name: '엔젤릭버스터🔮',
    union: 'DEX 증가',
    link: '10초간 데미지 증가(액티브)',
    order: '11',
    uorder: '9(민첩)',
  },

  // 레프
  {
    name: '일리움💎',
    union: 'INT 증가',
    link: '거리 이동 중첩 당 데미지% 증가',
    order: '9',
    uorder: '9(지능)',
  },
  {
    name: '아크👿',
    union: 'STR 증가',
    link: '전투 상태 지속 시 데미지% 증가',
    order: '4',
    uorder: '9(힘)',
  },

  {
    name: '키네시스🔳',
    union: 'INT 증가',
    link: '크리티컬 데미지 증가',
    order: '5',
    uorder: '9(지능)',
  },
  {
    name: '호영🐯',
    union: 'LUK 증가',
    link: '방어율 무시, 피 100%인 적 공격 시 데미지% 증가',
    order: '2',
    uorder: '9(행운)',
  },
  {
    name: '제로⏳',
    union: '경험치 획득량 증가',
    link: '피격 데미지 감소, 방어율 무시',
    order: '-',
    uorder: '1',
  },
  {
    name: '아델🌙',
    union: 'STR 증가',
    link: '같은 맵 내 파티원 1명 당 데미지, 보스공격 시 데미지% 증가',
    order: '26',
    uorder: '9(힘)',
  },

  {
    name: '카인🏹',
    union: 'DEX 증가',
    link: '사전준비 후 20초간 데미지% 증가(40초 쿨타임)',
    order: '31',
    uorder: '9(민첩)',
  },

  {
    name: '라라🐰',
    union: 'INT 증가',
    link: '데미지% 증가, 일반 몬스터 20마리 처치 시 데미지% 증가',
    order: '6',
    uorder: '9(지능)',
  },
  {
    name: '칼리🧕',
    union: 'LUK 증가',
    link: '데미지% 증가, 매 초 HP/MP% 회복',
    order: 'NEW',
    uorder: '9(행운)',
  },
];

export const exp_attack: DopingType[] = [
  {
    url: 'coupon',
    title: '경험치 쿠폰',
  },
  {
    url: 'link',
    title: '링크스킬',
  },
  {
    url: 'monsterpark',
    title: '익스트림 골드',
  },
  {
    url: 'mvp',
    title: '경험치 뿌리기',
  },
  {
    url: 'potion',
    title: '경험 축복의 비약',
  },
  {
    url: 'skill',
    title: '쓸만한 홀리심볼',
  },

  {
    url: 'pendent',
    title: '준비된 정령의 펜던트',
  },
  {
    url: 'zero',
    title: '경험치 유니온',
  },
  {
    url: 'upper',
    title: '쑥쑥 새싹 🐣',
  },
  // {
  //   url: 'ggotchi',
  //   title: '떡꼬치 🐣',
  //   content: "10%",
  //   getin: '이벤트 주간 보스코인 상점에서 구매'
  // },
  {
    url: 'other',
    title: '하이퍼스탯',
  },
  {
    url: 'mesopotion',
    title: '재물 획득의 비약 💰',
  },
  {
    url: 'mesobuff',
    title: '유니온의 부 💰',
  },
  {
    url: 'netflix',
    title: '넷플릭스 💰',
  },
];
//10레벨 향상의 비약 : 주스탯 +30
//고보킬 : 보공 +20%
//전영비 : 공마 + 30
export const boss_attack: DopingType[] = [
  {
    url: 'guild',
    title: '길드의 축복',
  },

  {
    url: 'urus',
    title: '우르스 뿌리기',
  },

  {
    url: '275power',
    title: '인기도 버프',
  },

  {
    url: 'union',
    title: '유니온의 힘(3단계)',
  },

  {
    url: 'babydragon',
    title: '아기용의 이유식',
  },
  {
    url: 'mpgreen',
    title: '익스트림 그린',
  },
  {
    url: 'mpred',
    title: '익스트림 레드(블루)',
  },

  {
    url: 'meari',
    title: '영웅의 메아리',
  },

  {
    url: 'redpotion',
    title: '반짝이는 빨간 별',
  },
  {
    url: 'bluepotion',
    title: '반짝이는 파란 별',
  },
  {
    url: 'bosskiler',
    title: '고급 보스 킬러의 비약',
  },
  {
    url: 'legendpotion',
    title: '전설의 영웅 비약',
  },
  {
    url: '10thpotion',
    title: '10단계 향상된 물약',
  },
  {
    url: 'vip',
    title: 'VIP 버프 🐣',
  },
  {
    url: 'mvp',
    title: 'MVP 슈퍼파워 🐣',
  },

  {
    url: 'nobless',
    title: '노블스킬',
  },

  // {
  //   url: 'ggotchi',
  //   title: '떡꼬치 🐣',
  //   content: "올스탯 15, 공마 15, 방무 15%, 보공 15%",
  //   getin: '이벤트 주간 보스코인 상점에서 구매'
  // }
];

//이벤트용 변수

export const mayak = [
  ['올스탯', ['0', '+10', '+20', '+30', '+40', '+50', '+60']],
  ['공격력/마력', ['0', '+5', '+10', '+15', '+20', '+25', '+30']],
  ['', []],
  ['', []],
  ['일반몹 데미지', ['0', '+5%', '+10%', '+20%', '+30%', '+35%', '+40%']],
  ['HP/MP', ['0', '+500', '+1000', '+1500', '+2000', '+2500', '+3000']],
  ['보스 데미지', ['0', '+5%', '+10%', '+20%', '+30%', '+35%', '+40%']],
  ['', []],
  ['', []],
  ['아케인 포스', ['0', '+10', '+20', '+30', '+40', '+50', '+60']],
  ['버프 지속시간', ['0', '+5%', '+10%', '+15%', '+20%', '+25%', '+30%']],
  ['방어율 무시', ['0', '+5%', '+10%', '+20%', '+30%', '+35%', '+40%']],
  ['', []],
  ['', []],
  ['획득 경험치', ['0', '+2.5%', '+5%', '+7.5%', '+10%', '+12.5%', '+15%']],
  ['크리티컬 확률', ['0', '+5%', '+10%', '+15%', '+20%', '+25%', '+30%']],
];
