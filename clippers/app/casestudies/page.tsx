"use client";

import { useState } from "react";

const LIVE_CASES_URL = "https://luminaclippers.com/casestudies";

export default function CaseStudiesPage() {
  const [iframeBlocked, setIframeBlocked] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "#000" }}>
      <iframe
        title="Lumina Case Studies"
        src={LIVE_CASES_URL}
        style={{ width: "100%", height: "100vh", border: 0, display: "block" }}
        onError={() => {
          setIframeBlocked(true);
        }}
      />

      {iframeBlocked ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: "rgba(0,0,0,0.9)",
            color: "#fff",
            zIndex: 30,
            padding: 24,
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: 18 }}>Could not embed case studies.</p>
            <a href={LIVE_CASES_URL} target="_blank" rel="noreferrer" style={{ color: "rgb(80,217,121)" }}>
              Open the live case studies page
            </a>
          </div>
        </div>
      ) : null}
    </main>
  );
}
// 