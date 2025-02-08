// // //

import React from "react";

// Footer function ---------- ✅ ✅ ✅
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-lg pt-10">
      <p>
        Copyright &copy; {currentYear}{" "}
        <span className="text-purple text-xl">MD JOY(pH0enix46)</span>. All
        rights reserved
      </p>
    </footer>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
