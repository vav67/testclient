"use client";

import { useSelector } from "react-redux";

export default function UserAuth() {
//выбираем юзера
  const { user } = useSelector((state: any) => state.auth);
// если  есть тогда вошел юзер в систему 
  if (user) {
    return true;
  } else {
    return false;
  }
}
