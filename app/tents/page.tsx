"use client";

import React, { Suspense } from "react";

import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";

const Tents: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <TentsClient />
    </Suspense>
  );
};

export default Tents;
