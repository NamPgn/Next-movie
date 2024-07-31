import DetailComponent from "@/app/components/Main";
import React from "react";

export default function page({ params }: any) {
  const { id } = params;
  return <DetailComponent id={id} />;
}
