"use client";

import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";

const Tents: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <TentsClient />
    </Suspense>
  );
};

export default Tents;
