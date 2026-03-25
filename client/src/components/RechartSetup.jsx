import React from "react";

function RechartSetup({ charts }) {
  if (!charts || charts.length === 0) return null;
  return <div className="space-y-8"></div>;
}

export default RechartSetup;
