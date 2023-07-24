export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type CharacterType = {
  name: string;
  union: string;
  link: string;
  order: string;
  uorder: string;
};

export type DopingType = {
  url: string;
  title: string;
  content: string;

  getin: string;
};

export type UserType = {
  //기본정보
  name: string;
  world: string;
  guild: string;
  job: string;
  level: number;
  imageUrl: string;

  equipments: Object[];
  spec: Object;

  error?: string;
};

type StatType = {
  str: number;
  dex: number;
  int: number;
  luk: number;
  statAtkHigh: number;
  statAtkLow: number;
  critDmg: number;
  bossDmg: number;
  ignoreDef: number;
  arcaneForce: number;
};

export type EquipType = {
  name: string;
  imageUrl: string;
  category: string;
  upgrade: number;
  base: {
    str: number;
    dex: number;
    int: number;
    luk: number;
    hp: number;
    mp: number;
    atk: number;
    mAtk: number;
  };
  scroll: {
    str: number;
    dex: number;
    int: number;
    luk: number;
    hp: number;
    mp: number;
    atk: number;
    mAtk: number;
  };
  grade: string;
  star: number;
  potential: {
    grade: string;
    effects: { [key: string]: number }[];
  };
  flame: {};
  scissors: number;
};

export type ButtonType = {
  id: string;
  url: string;
  text: string;
};
