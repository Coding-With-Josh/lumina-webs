"use client";

import { useEffect, useState } from "react";

const LIVE_CASES_URL = "https://luminaclippers.com/casestudies";

export default function CaseStudiesPage() {
  const [iframeBlocked, setIframeBlocked] = useState(false);

  useEffect(() => {
    // #region agent log CASE-H1
    fetch("http://127.0.0.1:7891/ingest/8975e8fa-ec06-412d-a4d6-99b60de7e373", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "5aed87" },
      body: JSON.stringify({
        sessionId: "5aed87",
        runId: "case-iframe",
        hypothesisId: "CASE-H1",
        location: "app/casestudies/page.tsx:useEffect",
        message: "Case studies page mounted",
        data: { path: window.location.pathname, target: LIVE_CASES_URL },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#000" }}>
      <iframe
        title="Lumina Case Studies"
        src={LIVE_CASES_URL}
        style={{ width: "100%", height: "100vh", border: 0, display: "block" }}
        onLoad={() => {
          // #region agent log CASE-H2
          fetch("http://127.0.0.1:7891/ingest/8975e8fa-ec06-412d-a4d6-99b60de7e373", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "5aed87" },
            body: JSON.stringify({
              sessionId: "5aed87",
              runId: "case-iframe",
              hypothesisId: "CASE-H2",
              location: "app/casestudies/page.tsx:iframeOnLoad",
              message: "Case studies iframe loaded",
              data: { target: LIVE_CASES_URL },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
        }}
        onError={() => {
          setIframeBlocked(true);
          // #region agent log CASE-H3
          fetch("http://127.0.0.1:7891/ingest/8975e8fa-ec06-412d-a4d6-99b60de7e373", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "5aed87" },
            body: JSON.stringify({
              sessionId: "5aed87",
              runId: "case-iframe",
              hypothesisId: "CASE-H3",
              location: "app/casestudies/page.tsx:iframeOnError",
              message: "Case studies iframe failed to load",
              data: { target: LIVE_CASES_URL },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
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