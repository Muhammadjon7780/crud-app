import dashboardIcon from "../assets/images/dashboard.svg";
import filiallarIcon from "../assets/images/branch-icon.svg";
import ustalarIcon from "../assets/images/ustalar.svg";
import promokodlarIcon from "../assets/images/promokod.svg";
import sozlamalarIcon from "../assets/images/sozlama.svg";

export const branches = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data") as string)
  : [
      {
        id: 1,
        name: "G’uncha flial",
        region: { label: "Toshkent", value: "1" },
        login: "Abc1234",
        password: "999111",
        phone: "998941234565",
        leader: { label: "Alijonov Abbos", value: "11" },
      },
      {
        id: 2,
        name: "TashGres Flial",
        region: { label: "Fargona", value: "2" },
        login: "Abc1234",
        password: "999111",
        phone: "998941234565",
        leader: { label: "To’xtasinov Amirxon", value: "12" },
      },
      {
        id: 3,
        name: "Guzar filial",
        region: { label: "Namangan", value: "3" },
        login: "Abc1234",
        password: "999111",
        phone: "998941234565",
        leader: { label: "Bekzod Xo'jayev", value: "13" },
      },
      {
        id: 4,
        name: "Guzar filial",
        region: { label: "Toshkent", value: "1" },
        login: "Abc1234",
        password: "999111",
        phone: "998941234565",
        leader: { label: "Bekzod Xo'jayev", value: "13" },
      },
    ];

export interface TableRow {
  id: number;
  type: string;
  amount: string;
  date: string;
  isIncome: boolean;
}

export const tableData: TableRow[] = [
  {
    id: 1,
    type: "To‘ldirish",
    amount: "13,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 2,
    type: "Chiqarish",
    amount: "14,500,000",
    date: "2020.01.02 13:56",
    isIncome: false,
  },
  {
    id: 3,
    type: "To‘ldirish",
    amount: "17,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 4,
    type: "To‘ldirish",
    amount: "22,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 5,
    type: "To‘ldirish",
    amount: "35,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 6,
    type: "To‘ldirish",
    amount: "21,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 7,
    type: "To‘ldirish",
    amount: "45,500,000",
    date: "2020.01.02 13:56",
    isIncome: false,
  },
  {
    id: 8,
    type: "To‘ldirish",
    amount: "78,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 9,
    type: "To‘ldirish",
    amount: "99,500,000",
    date: "2020.01.02 13:56",
    isIncome: true,
  },
  {
    id: 10,
    type: "To‘ldirish",
    amount: "86,500,000",
    date: "2020.01.02 13:56",
    isIncome: false,
  },
];

export const regionOptions = [
  { label: "Viloyat", value: "0" },
  { label: "Toshkent", value: "1" },
  { label: "Fargona", value: "2" },
  { label: "Namangan", value: "3" },
];

export const leaderOptions = [
  { label: "Masul Shaxs", value: "10" },
  { label: "Alijonov Abbos", value: "11" },
  { label: "To’xtasinov Amirxon", value: "12" },
  { label: "Bekzod Xo'jayev", value: "13" },
];

export const transactions = [
  { id: 1, date: "2022.01.02 13:45", amount: "25,350,000", approved: true },
  { id: 2, date: "2022.01.02 13:45", amount: "25,350,000", approved: true },
  { id: 3, date: "2022.01.02 13:45", amount: "25,350,000", approved: true },
  { id: 4, date: "2022.01.02 13:45", amount: "25,350,000", approved: true },
];

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: dashboardIcon,
  },
  {
    title: "filiallar",
    path: "/",
    icon: filiallarIcon,
  },
  {
    title: "ustalar",
    path: "/ustalar",
    icon: ustalarIcon,
  },
  {
    title: "promokodlar",
    path: "/promokodlar",
    icon: promokodlarIcon,
  },
  {
    title: "sozlamalar",
    path: "/sozlamalar",
    icon: sozlamalarIcon,
  },
];
