# Rumi NFT Minting Guide
- [Rumi NFT Minting Guide](#rumi-nft-minting-guide)
  - [Overview](#overview)
  - [Individual Stone Lifecycle](#individual-stone-lifecycle)
    - [Minting \& Notarization](#minting--notarization)
    - [Transformation (Events)](#transformation-events)
    - [Sales \& Export](#sales--export)
  - [Minting \& Notarization](#minting--notarization-1)
    - [HTS Minting](#hts-minting)
    - [Metadata Anchoring](#metadata-anchoring)
    - [HCS Birth Certificate](#hcs-birth-certificate)
  - [Transformation (Events)](#transformation-events-1)
    - [Event Types](#event-types)
    - [Immutable Metadata](#immutable-metadata)
    - [Hedera Consensus Service (HCS) Logging](#hedera-consensus-service-hcs-logging)
    - [Purpose](#purpose)
  - [Sales \& Economic Management](#sales--economic-management)
    - [Sales \& Royalties](#sales--royalties)
    - [Export Integration](#export-integration)
    - [Export Automation Workflow](#export-automation-workflow)
    - [Artisan \& Marketplace Onboarding](#artisan--marketplace-onboarding)
    - [Economic Mechanisms](#economic-mechanisms)
    - [Purpose](#purpose-1)
  - [Rumi Website](#rumi-website)
    - [Visibility \& Promotion](#visibility--promotion)
    - [Wallet \& Transaction Layer](#wallet--transaction-layer)
    - [Compliance \& Provenance](#compliance--provenance)
    - [Artisan \& Vendor Onboarding](#artisan--vendor-onboarding)
    - [Purpose](#purpose-2)
  - [Conclusion](#conclusion)

## Overview
This guide defines the minting process for Rumi NFTs, covering lifecycle events, compliance automation, metadata standards, and export integration. Each stone undergoes a (Minting → Transformation → Sales/Export) lifecycle, notarized on Hedera Consensus Service (HCS) and minted via Hedera Token Service (HTS).

## Individual Stone Lifecycle

### Minting & Notarization
- HTS Minting: Mint a new serial under the "Rumi" Token ID.
- Metadata Anchoring: HIP‑412 JSON pinned to IPFS and linked to the NFT.
- HCS Birth Certificate: Submit a Minting message to the Master HCS Topic.

### Transformation (Events)
- **Artisan Intervention**: The stone or mineral is processed by a registered artisan, with cutting, polishing, or setting work documented and the artisan’s official RNA (Registro Nacional del Artesano) ID recorded.  
- **Event Logging**: A TRANSFORMATION message is submitted to the Hedera Consensus Service (HCS) Master Topic, linking the finished piece back to its raw origin. The log includes the stone ID, event type, timestamp, actor ID, and a SHA‑256 hash of supporting off‑chain artifacts (such as scans or photographs).  

### Sales & Export
- Sales: Primary and secondary handled natively by HTS.
- Royalty Engine: 5% royalty routed to Rumi.
- Fee Adjustment: Fee Schedule Key updates royalties across the collection.
- Export & Final Provenance:
  - Customs Verification: NFT acts as Digital Packing List for SUNAT.
  - HCS Final Notarization: Export Permit Number hashed to Master HCS Topic.

## Minting & Notarization

When a Rumi stone enters the blockchain lifecycle, three key actions occur:

### HTS Minting
- A new **serial number** is created under the "Rumi" Token ID using the **Hedera Token Service (HTS)**.
- This establishes the stone’s **unique digital identity**, ensuring it can be tracked and traded within the collection.
- The minting event is immutable, serving as the **foundation of provenance** for the stone.

### Metadata Anchoring
- A JSON file compliant with the **Hedera Improvement Proposal (HIP‑412)** standard is generated and **pinned to the InterPlanetary File System (IPFS)**.
- IPFS produces a **Content Identifier (CID)** — a cryptographic hash that uniquely represents the metadata file.
- Because metadata is frozen at minting by design, the CID ensures immutability: the NFT always points to the exact metadata file created at mint time.
- The metadata includes:
  - **Compliance Automation & Regulatory Database Integration**  
    - MINEM (REINFO): Verify concession is Vigente.  
    - SUNAT (RUC): Confirm shop is a legal entity.  
    - VUCE: Validate export permits and Certificates of Origin.  
    - Ley 32537 (2026): Mandatory georeferenced coordinates submission.  
    - Census Gate (Post‑June 2026): INEI Census Participation ID required.  
  - **HCS Proof of Compliance**  
    - Immutable timestamping of government queries.  
    - Cryptographic linkage via Topic ID embedded in metadata.  
    - Auditability for customs officers and buyers.  
  - **Legal Status Field**: Values such as `certified_origin`, `retail_acquisition`, or `legacy_collection`.  
  - **Identification**: Vendor RUC or Artisan RNA ID.  
  - **Compliance Fields**: Last regulatory check timestamp and REINFO status.  
  - **HS Code Mapping**:  
    - Semi‑Precious Stones: 7103.99.00.00  
    - Emeralds: 7103.91.00.00  
    - Gold: 7108.12.00.00  
    - Silver: 7106.91.00.00  
    - Pyrite: 2502.00.00.00  
  - **Physical‑to‑Digital Anchoring**  
    - Optical fingerprinting: macro‑photography of inclusions uploaded to IPFS.  

### HCS Birth Certificate
- A **Minting message** is submitted to the **Hedera Consensus Service (HCS)** Master Topic.
- This message records the stone’s ID, event type, timestamp, actor, and data hash.
- It acts as the stone’s **birth certificate**, notarizing its creation with a consensus timestamp and ensuring auditability.


## Transformation (Events)

Each stone or mineral, once minted and notarized, may go through multiple **Transformation events**. These events document the stone’s journey without altering the immutable NFT metadata. Instead, they are captured as notarized logs on the **Hedera Consensus Service (HCS)** and linked to off‑chain artifacts stored in the **InterPlanetary File System (IPFS)**.

### Event Types
- **Cutting & Artistry**: The raw stone or mineral is processed by a registered artisan, with the artisan’s official RNA (Registro Nacional del Artesano) ID recorded.  
- **Sale**: Records primary or secondary market transfer, including buyer and seller identifiers.  
- **Export**: Customs clearance and export permit details logged, linking the stone to international trade records.  
- **Gift**: Records voluntary transfer of ownership without payment, capturing donor and recipient identifiers.  
- **Stolen**: Event marking theft, with supporting police or regulatory documentation hashed and logged.  
- **Lost**: Event marking loss, with timestamp and contextual details recorded for provenance integrity.  
- **New Photos**: Digital Artifacts: New scans, macro‑photography, or optical fingerprints of the finished piece are generated and stored off‑chain (e.g., pinned to the InterPlanetary File System (IPFS) with their own Content Identifiers (CID)).  

### Immutable Metadata
- The NFT’s metadata created at minting is **never updated**.  
- Transformation events are external records, ensuring the original “birth certificate” metadata remains frozen while the stone’s lifecycle is fully auditable.

### Hedera Consensus Service (HCS) Logging
Each Transformation event generates a message submitted to the Hedera Consensus Service (HCS) Master Topic.  
The message includes:
- Stone ID  
- Event type (e.g., TRANSFORMATION, SALE, EXPORT, GIFT, STOLEN, LOST, NEW_PHOTOS)  
- Timestamp (ISO 8601 format)  
- Actor ID (artisan, vendor, customs officer, donor, recipient, etc.)  
- SHA‑256 hash of supporting off‑chain documents  
- InterPlanetary File System (IPFS) Content Identifier (CID) for new photos or scans  

### Purpose
- Transformation events ensure every stage of the stone’s journey is **documented, verifiable, and tamper‑proof**.  
- They provide a complete audit trail from mine to marketplace, including exceptional cases like theft, loss, or gifting.  
- By combining Hedera Consensus Service (HCS) notarization with InterPlanetary File System (IPFS) storage, the system guarantees both **immutability** and **transparency**.

## Sales & Economic Management

The Sales & Economic Management stage governs how Rumi NFTs are traded, monetized, and prepared for export. It ensures that every transaction is compliant, auditable, and linked to regulatory frameworks.

### Sales & Royalties
- **Primary Sales**: Initial transfers of ownership are handled natively by the Hedera Token Service (HTS).  
- **Secondary Sales**: Resales are also managed on‑chain, ensuring provenance continuity.  
- **Royalty Engine**: A fixed 5% royalty is automatically routed to Rumi on every transaction, guaranteeing sustainable revenue for the ecosystem.  
- **Fee Adjustments**: The Fee Schedule Key allows updates to royalty percentages or transaction fees across the collection, ensuring adaptability to market conditions.  
- **Fractional Ownership**: Stones can be fractionally owned, with shares represented as fungible tokens paired with liquidity pools. This allows multiple buyers to co‑own a single stone and trade their shares independently.  
- **Marketplace Display**: All stones are listed with detailed provenance, artisan profiles, and compliance records, whether available for sale or already exported.

### Export Integration
Export is treated as the culmination of the sales process, where domestic trade transitions into international commerce.  
- **Customs Verification**: The NFT acts as a digital packing list for SUNAT, linking the stone to its compliance metadata.  
- **Final Notarization**: Export permit numbers are hashed and submitted to the Hedera Consensus Service (HCS) Master Topic.  
- **Legal Status Freeze**: The NFT’s metadata includes a legal status field updated to `Exported`, preventing further domestic transactions.  
- **QR Code Presentation**: A QR code linked to the NFT’s metadata and compliance records is generated. Customs agents can scan the code to instantly retrieve the stone’s HS code, Certificate of Origin, and notarized compliance proofs directly from the **Rumi Website**.  

### Export Automation Workflow
1. **Selection**: Buyer chooses the stone via the Rumi Website marketplace.  
2. **Lookup**: The decentralized application queries Hedera Improvement Proposal (HIP‑412) metadata for the Harmonized System (HS) code.  
3. **Certificate Generation**: The VUCE API issues a Digital Certificate of Origin.  
4. **Form Population**: DEF or VUCE forms are auto‑filled using metadata fields.  
5. **Compliance Check**: Chapter 97 (Patrimonio Cultural) is blocked to prevent export of protected cultural heritage.  
6. **Digital Signature Hashing**: XAdES‑BES signatures are hashed to the Hedera Consensus Service (HCS), ensuring cryptographic proof of export authorization.  

### Artisan & Marketplace Onboarding
- **Artisan Profiles**: Each artisan is assigned a decentralized identifier (DID), enabling verifiable digital identity.  
- **RNA Verification**: Artisan RNA IDs are cross‑referenced with the MINCETUR database to confirm authenticity.  
- **Marketplace Integration**: Onboarding workflows ensure that only verified artisans and compliant vendors can list stones on the Rumi Website, maintaining ecosystem integrity.  

### Economic Mechanisms

| Mechanism              | Description                                                                 | Where Handled                          |
|------------------------|-----------------------------------------------------------------------------|----------------------------------------|
| **Primary Sales**      | Initial transfers of ownership managed natively by Hedera Token Service (HTS). | Sales & Royalties                      |
| **Secondary Sales**    | Resales tracked on‑chain to preserve provenance continuity.                  | Sales & Royalties                      |
| **Royalties**          | Fixed 5% royalty automatically routed to Rumi on every transaction.          | Sales & Royalties                      |
| **Fee Adjustments**    | Fee Schedule Key allows updates to royalty percentages or transaction fees.  | Sales & Royalties                      |
| **Fractional Ownership** | Stones can be fractionally owned, represented as fungible token shares paired with liquidity pools. | Sales & Royalties / Rumi Website       |
| **Export Integration** | Customs verification, export permits, and legal status freeze logged via Hedera Consensus Service (HCS). | Export Integration                     |
| **QR Code Presentation** | QR codes generated for customs agents to instantly verify HS codes, Certificates of Origin, and compliance proofs. | Export Integration / Rumi Website      |


### Purpose
- This stage ensures that every sale, resale, and export is **transparent, compliant, and auditable**.  
- By combining HTS transaction logic, HIP‑412 metadata, QR code presentation, and HCS notarization, the **Rumi Website** becomes the central hub for bridging domestic trade and international export.  



## Rumi Website

The Rumi website serves as the central hub for showcasing tokenized stones and minerals, enabling buyers, artisans, and regulators to interact with the ecosystem in a transparent and compliant manner.

### Visibility & Promotion
- **Marketplace Display**: Stones and minerals are listed with detailed provenance, artisan profiles, and compliance records.  
- **Search & Filtering**: Buyers can filter by type (emerald, pyrite, silver, etc.), HS code, artisan, or legal status.  
- **Promotion Channels**: Integrated SEO, social media campaigns, and third‑party marketplace visibility ensure global reach.  
- **QR Code Integration**: Each listing generates a QR code that customs agents, buyers, or auditors can scan to instantly retrieve compliance metadata and Hedera Consensus Service (HCS) notarization records.  

### Wallet & Transaction Layer
- **Wallet Connection**: Buyers connect digital wallets to purchase Rumi NFTs directly.  
- **Supported Assets**: Transactions can be made using Rumi Coin (RUMI), USDC, or other supported cryptocurrencies.  
- **Fractional Ownership**: Stones can be fractionally owned, with shares represented as fungible tokens paired with liquidity pools.  

### Compliance & Provenance
- **HIP‑412 Metadata Display**: Each NFT’s immutable metadata is accessible, including HS codes, legal status, and compliance fields.  
- **Regulatory Integration**: Automated checks against MINEM (REINFO), SUNAT (RUC), VUCE, and Ley 32537 are displayed for transparency.  
- **Audit Trail**: HCS logs for minting, transformation, sale, export, or exceptional events (gift, stolen, lost) are accessible via the website interface.  
- **Regulator Access**: Regulators can log in to view compliance proofs and audit trails directly, ensuring oversight and enforcement capabilities are built into the platform.  

### Artisan & Vendor Onboarding
- **Profile Pages**: Artisans and vendors have verified profiles linked to RNA IDs and decentralized identifiers (DIDs).  
- **Portfolio Showcase**: Artisans can display their work, transformation events, and compliance history.  
- **Marketplace Access**: Only verified artisans and compliant vendors can list stones, ensuring integrity of the ecosystem.  

### Purpose
- The Rumi website is designed to **increase visibility, promote trust, and streamline compliance**.  
- It bridges the gap between local artisans and global buyers, ensuring that every stone’s journey from mine to marketplace is transparent, auditable, and secure.


## Conclusion
This minting workflow ensures compliance, provenance, and auditability for every Rumi NFT. By integrating Peruvian regulatory databases, Hedera services, and HIP‑412 metadata, Rumi achieves high‑integrity Real World Asset tokenization.

[Back to Top](#rumi-nft-minting-guide)
