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
    name: '제로🗡',
    union: '경험치 획득량 증가',
    link: '피격 데미지 감소, 방어율 무시',
  },

];
