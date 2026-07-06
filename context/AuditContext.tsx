"use client";

import { createContext, useContext, useState } from "react";

type AuditContextType = {
  audit: any;
  setAudit: (audit: any) => void;
};

const AuditContext = createContext<AuditContextType>({
  audit: null,
  setAudit: () => {},
});

export function AuditProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [audit, setAudit] = useState<any>(null);

  return (
    <AuditContext.Provider value={{ audit, setAudit }}>
      {children}
    </AuditContext.Provider>
  );
}

export function useAudit() {
  return useContext(AuditContext);
}