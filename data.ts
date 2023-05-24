import { CharacterType, DopingType } from '@/@types/next';

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
    link: '상태이상 저항',
  },

  //레지스탕스

  {
    name: '블래스터🚩',
    union: '방어율 무시 증가',
    link: '부활 시 일정 시간 무적',
  },

  {
    name: '배틀메이지🚩',
    union: 'INT 증가',
    link: '부활 시 일정 시간 무적',
  },
  {
    name: '와일드헌터🚩',
    union: '공격 시(20%) 데미지 증가',
    link: '부활 시 일정 시간 무적',
  },
  {
    name: '메카닉🚩',
    union: '버프 지속 시간 증가',
    link: '부활 시 일정 시간 무적',
  },
  {
    name: '제논🚩',
    union: 'STR/DEX/LUK 증가',
    link: '올스탯% 증가',
  },

  //데몬
  {
    name: '데몬슬레이어😈',
    union: '상태이상 증가',
    link: '보스 공격시 데미지% 증가',
  },
  {
    name: '데몬어벤져😈',
    union: '보스 공격력 증가',
    link: '데미지% 증가',
  },

  //영웅
 
  {
    name: '아란👑',
    union: '타격 시 HP 회복',
    link: '콤보킬 경험치 획득량 증가',
  },
  {
    name: '에반👑',
    union: '타격 시 MP 회복',
    link: '룬 지속시간 증가',
  },
  {
    name: '루미너스👑',
    union: 'INT 증가',
    link: '방어율 무시% 증가',
  },
  {
    name: '메르세데스👑',
    union: '스킬 쿨타임 감소',
    link: '경험치 획득량% 증가',
  },
  {
    name: '팬텀👑',
    union: '메소 획득량 증가',
    link: '크리티컬 확률% 증가',
  },
  {
    name: '은월👑',
    union: '크리티컬 데미지 증가',
    link: '구사일생',
  },
  //노바
  {
    name: '카이저🐲',
    union: 'STR 증가',
    link: 'HP% 증가',
  },
  {
    name: '카데나⛓',
    union: 'LUK 증가',
    link: '낮은레벨 공격 시 데미지% 증가, 상태이상 걸린 적 공격 시 데미지% 증가',
  },
  {
    name: '엔젤릭버스터🔮',
    union: 'DEX 증가',
    link: '10초간 데미지 증가(액티브)',
  },

  // 레프
  {
    name: '일리움💎',
    union: 'INT 증가',
    link: '거리 이동 중첩 당 데미지% 증가',
  },
  {
    name: '아크👿',
    union: 'STR 증가',
    link: '전투 상태 지속 시 데미지% 증가',
  },

  {
    name: '키네시스🔳',
    union: 'INT 증가',
    link: '크리티컬 데미지 증가',
  },
  {
    name: '호영🐯',
    union: 'LUK 증가',
    link: '방어율 무시, 피 100%인 적 공격 시 데미지% 증가',
  },
  {
    name: '제로⏳',
    union: '경험치 획득량 증가',
    link: '피격 데미지 감소, 방어율 무시',
  },
  {
    name: '아델🌙',
    union: 'STR 증가',
    link: '같은 맵 내 파티원 1명 당 데미지, 보스공격 시 데미지% 증가',
  },

  {
    name: '카인🏹',
    union: 'DEX 증가',
    link: '사전준비 후 20초간 데미지% 증가(40초 쿨타임)',
  },

  {
    name: '라라🐰',
    union: 'INT 증가',
    link: '데미지% 증가, 일반 몬스터 20마리 처치 시 데미지% 증가',
  },
  {
    name: '칼리🧕',
    union: 'LUK 증가',
    link: '데미지% 증가, 매 초 HP/MP% 회복',
  },

];

export const exp_attack: DopingType[] = [
  {
    url: 'coupon',
    title: '경험치 쿠폰',
    content: "*[2-3]배",
    getin: '경험치 쿠폰은 이벤트 상점, 출석 보상, 미접속 보상, 일요일 몬스터 파크 등으로 획득하실 수 있습니다.'
  },
  {
    url: 'link',
    title: '엘프의 축복[메르세데스]',
    content: "15%",
    getin : '10레벨 이상 캐릭터에서 링크스킬 전수를 통해 적용 가능합니다.'
  },
  {
    url: 'monsterpark',
    title: '익스트림 골드',
    content: "10%",
    getin : '차원의 거울을 통해 갈 수 있는 몬스터파크 내 라쿠에게 10코인을 주고 구매할 수 있습니다.'
  },
  {
    url: 'mvp',
    title: '경험치 뿌리기',
    content: "50%",
    getin : '확성기를 통해 주로 공지되며, 빠른이동 또는 B키 전문기술의 우상단 버튼을 통해 마이스터 빌 내에서 받으실 수 있습니다.'
  },
  {
    url: 'potion',
    title: '경험 축복의 비약',
    content: "10%",
    getin: '경험 축복의 비약 레시피를 통해 제작하실 수 있습니다. 10레벨 이상의 연금술 레벨을 권장드립니다. 2시간동안 지속됩니다.',
  },
  {
    url: 'skill',
    title: '홀리심볼',
    content: "[20-35]%",
    getin: '비숍이 아닌 직업은 5차스킬 V 공용코어로 쓰입니다.'
  },

  {
    url: 'pendent',
    title: '정령의 펜던트',
    content: "[10-30]%",
    getin: '이벤트 또는 출석 보상으로 획득하실 수 있습니다.'
  },
  {
    url: 'zero',
    title: '제로 유니온',
    content: "[4-12]%",
    getin: '육성하세요 ㅎ'
  },
  {
    url: 'upper',
    title: '쑥쑥 새싹 🐣',
    content: "10%",
    getin: '길라잡이 내 30레벨 보상'
  },
  {
    url: 'ggotchi',
    title: '떡꼬치 🐣',
    content: "10%",
    getin: '이벤트 주간 보스코인 상점에서 구매'
  },
  {
    url: 'other',
    title: '버닝필드',
    content: "[10-100]%",
    getin: '사냥터 내 채널 별로 상이합니다.'
  },
  {
    url: 'other',
    title: '이벤트 경험치 스탯',
    content: "?%",
    getin: '이벤트 참여 시 추가로 얻을 수 있습니다.'
  },
  {
    url: 'mesopotion',
    title: '재물 획득의 비약 💰',
    content: "재획용",
    getin: '-'
  },
  {
    url: 'mesobuff',
    title: '유니온의 부 💰',
    content: "재획용",
    getin: '-'
  },
  {
    url: 'netflix',
    title: '넷플릭스 💰',
    content: "재획용",
    getin: '-'
  },

]
//10레벨 향상의 비약 : 주스탯 +30
//고보킬 : 보공 +20%
//전영비 : 공마 + 30
export const boss_attack: DopingType[] = [
  {
    url: 'guild',
    title: '길드의 축복(더 큰)',
    content: "공마 20(30)",
    getin: '매주 월요일 좌측 💡 맨 아래 데이아의 지원을 통해 얻을 수 있습니다.'
  },
  
  {
    url: 'urus',
    title: '우르스 뿌리기',
    content: "공마 30",
    getin: '우르스 맵 내 아이샤에게 구매할 수 있습니다.'
  },

  {
    url: '275power',
    title: '인기도 버프',
    content: "공마 50",
    getin: '트로피 의자를 타고있는 녀석들에게 1일 1회 얻을 수 있습니다.'
  },

  {
    url: 'union',
    title: '유니온의 힘(3단계)',
    content: "공마 30",
    getin: '마을의 빠른이동 유니온 상점에서 구매할 수 있습니다.'
  },

  {
    url: 'mvp',
    title: 'MVP 슈퍼파워 🐣',
    content: "공마 30",
    getin: '캐시샵 MVP 기프트팩에서 얻을 수 있습니다.'
  },

  {
    url: 'babydragon',
    title: '아기용의 이유식',
    content: "공 7",
    getin: '리프레 잡화상점에서 구매할 수 있습니다.'
  },
  {
    url: 'mpgreen',
    title: '익스트림 그린',
    content: "공격속도 1단계",
    getin: '차원의 거울을 통해 갈 수 있는 몬스터파크 내 라쿠에게 5코인을 주고 구매할 수 있습니다.'
  },
  {
    url: 'mpred',
    title: '익스트림 레드(블루)',
    content: "공(마) 30",
    getin: '차원의 거울을 통해 갈 수 있는 몬스터파크 내 라쿠에게 5코인을 주고 구매할 수 있습니다.'
  },

  {
    url: 'meari',
    title: '영웅의 메아리',
    content: "공마 4%",
    getin: '오르비스 탑 8층 중간 여신상에게 퀘스트를 진행해서 얻을 수 있습니다.'
  },


  {
    url: 'nobless',
    title: '길드스킬(크게 한 방)',
    content: "크리티컬 데미지 30%",
    getin: '길드에서 쓰세요.'
  },

  {
    url: 'redpotion',
    title: '반짝이는 빨간 별',
    content: "보스 공격력 20%",
    getin: '루타비스 보스에게 일정 확률로 드랍됩니다.'
  },
  {
    url: 'bluepotion',
    title: '반짝이는 파란 별',
    content: "방어력 무시 20%",
    getin: '루타비스 보스에게 일정 확률로 드랍됩니다.'
  },
  {
    url: 'bosskiler',
    title: '고급 보스 킬러의 비약',
    content: "보스 공격력 20%",
    getin: '연금술 제작(어려움)'
  },
  {
    url: 'legendpotion',
    title: '전설의 영웅 비약',
    content: "공마 30",
    getin: '연금술 제작'
  },
  {
    url: '10thpotion',
    title: '10단계 향상된 물약',
    content: "주스탯 30",
    getin: '연금술 제작'
  },
  
]