import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProvidersProps {
  children: ReactNode; //any у него;  children: React.ReactElement
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
