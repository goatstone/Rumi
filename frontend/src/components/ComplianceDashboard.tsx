// ComplianceDashboard.tsx
import React, { useState } from "react";
import styles from "./ComplianceDashboard.module.css";

interface ComplianceItem {
  id: string;
  stoneId: string;
  permitNumber: string;
  cutType: string;
  txId: string;
  exportStatus: "Pending" | "Verified" | "Restricted" | "Not Applicable";
  status: "Compliant" | "Pending" | "Restricted";
  lastUpdated: string;
}

const mockData: ComplianceItem[] = [
  {
    id: "1",
    stoneId: "ST-001",
    permitNumber: "PER-123",
    cutType: "Raw",
    txId: "0.0.12345",
    exportStatus: "Verified",
    status: "Compliant",
    lastUpdated: "2026-06-20"
  },
  {
    id: "2",
    stoneId: "ST-002",
    permitNumber: "PER-456",
    cutType: "Cut",
    txId: "0.0.67890",
    exportStatus: "Pending",
    status: "Pending",
    lastUpdated: "2026-06-21"
  },
  {
    id: "3",
    stoneId: "ST-003",
    permitNumber: "PER-789",
    cutType: "Mounted",
    txId: "0.0.54321",
    exportStatus: "Restricted",
    status: "Restricted",
    lastUpdated: "2026-06-22"
  }
];

const ComplianceDashboard: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter(
    (item) =>
      item.stoneId.includes(search) ||
      item.permitNumber.includes(search) ||
      item.cutType.toLowerCase().includes(search.toLowerCase()) ||
      item.txId.includes(search)
  );

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Compliance Dashboard (Regulator View)</h1>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by Stone ID, Permit, Cut Type, or Hedera Tx ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stone ID</th>
            <th>Permit Number</th>
            <th>Cut Type</th>
            <th>Tx ID</th>
            <th>Export Status</th>
            <th>Status</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className={item.status === "Restricted" ? styles.restrictedRow : ""}>
              <td>{item.stoneId}</td>
              <td>{item.permitNumber}</td>
              <td>{item.cutType}</td>
              <td className={styles.txId}>{item.txId}</td>
              <td className={`${styles.exportStatus} ${styles[item.exportStatus.toLowerCase().replace(" ", "")]}`}>
                {item.exportStatus}
              </td>
              <td className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                {item.status}
              </td>
              <td className={styles.lastUpdated}>{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className={styles.columnTitles}>
        <h2>📊 Column Titles Explained</h2>
        <ul>
          <li><strong>Stone ID</strong> — Unique identifier for each stone.</li>
          <li><strong>Permit Number</strong> — Official export/mining permit reference.</li>
          <li><strong>Cut Type</strong> — Raw, Cut, or Mounted state of the stone.</li>
          <li><strong>Tx ID</strong> — Hedera Transaction ID anchoring compliance proof.</li>
          <li><strong>Export Status</strong> — Export lifecycle state (Pending, Verified, Restricted, Not Applicable).</li>
          <li><strong>Status</strong> — Current compliance state (Compliant, Pending, Restricted).</li>
          <li><strong>Last Updated</strong> — Timestamp of the latest compliance check.</li>
        </ul>
      </section>

      <section className={styles.timeline}>
        <h2>📜 Audit Trail</h2>
        <ul>
          <li>Stone registered → Permit issued</li>
          <li>Cutting process logged</li>
          <li>Mounting process logged</li>
          <li>Export permit verified</li>
          <li>Transaction anchored on Hedera</li>
        </ul>
      </section>
    </div>
  );
};

export default ComplianceDashboard;
