# FUNAGENCY REF APP — LANDING PAGE PRODUCT CONTEXT

> Purpose: This document is the compact source of truth for an AI/developer designing the public landing page for the FunAgency Referral App.
> Scope: Only product facts and user-facing mechanisms relevant to a potential Referrer are included.
> Important: Do not invent rates, rewards, income claims, features, statistics, guarantees, or business rules beyond this document.

---

## 1. PRODUCT SUMMARY

FunAgency operates a referral / affiliate program for people who can introduce clients that need Facebook Ads accounts/services.

A participant in the program is called a **Referrer (CTV)**.

The Referrer uses:
- **Telegram Bot** as the entry point.
- **FunAgency MiniApp inside Telegram** as their dashboard.

The MiniApp is designed for Referrers to:
- View commission and earnings.
- Track referred clients and their status.
- Analyze referral performance.
- Manage wallet and withdrawals.
- View achievements and progression.
- Share their unique referral link.

The MiniApp supports **English and Russian**.

Only Referrers approved by FunAgency can access the MiniApp. Telegram provides the user's identity automatically, so there is no separate manual login flow inside the MiniApp.

---

## 2. CORE VALUE PROPOSITION

The core earning mechanism is simple:

**Refer a client → the client deposits/spends with FunAgency → the Referrer earns commission on the client's deposits.**

Base commission rate:

**1.0% of each eligible client deposit.**

Commission is not necessarily fixed at 1.0%.

Through achievement-based rate boosts, the Referrer's effective commission rate can increase up to:

**2.2% maximum when all applicable boosts are active at the same time.**

Do NOT describe tier level itself as increasing commission. Tier and commission rate are separate systems.

---

## 3. END-TO-END REFERRAL FLOW

### Step 1 — Become a Referrer

A user can request to become a Referrer through the FunAgency Telegram Bot.

FunAgency reviews the request.

If approved:
- The user becomes an active Referrer.
- A unique referral code/link is assigned.
- The user can open the MiniApp dashboard.

### Step 2 — Share the referral link

Each approved Referrer receives a unique Telegram referral link:

`t.me/funagency_bot?start=ref_{ref_code}`

The MiniApp provides tools to distribute this link:
- Copy referral link.
- Share directly through Telegram.
- Generate/share a QR code.
- Use prepared message templates.

### Step 3 — Potential client enters through the link

When a potential client clicks the referral link:
1. Telegram opens the FunAgency Bot.
2. Client presses START.
3. The system records the Telegram identity, referral code and timestamp.
4. Bot asks which GEOs the client is running ads in.
5. Bot asks the client's monthly ad budget.
6. Lead information is sent to the FunAgency team.
7. FunAgency contacts and handles the potential client.

### Step 4 — Lead becomes a Client

When the lead qualifies and becomes a real FunAgency client, the client remains associated with the relevant Referrer according to the attribution rules.

### Step 5 — Client deposits

When that Client deposits money, FunAgency records the deposit and the system calculates commission for the Referrer.

Formula:

`commission = deposit amount × effective commission rate / 100`

Example calculation is allowed only as mathematical illustration, not as an income guarantee.

At the base 1.0% rate:
- $1,000 eligible deposit → $10 commission.
- $5,000 eligible deposit → $50 commission.
- $10,000 eligible deposit → $100 commission.

At higher rates, use the same formula.

### Step 6 — Commission hold

New commission enters a **14-day hold period**.

Status:
**Locked / On Hold → after 14 days → Available**

The MiniApp allows the Referrer to see:
- Available balance.
- Amount currently on hold.
- Unlock timing.
- Progress of individual held commissions.

### Step 7 — Withdraw

Once commission is Available, the Referrer can request withdrawal from the MiniApp.

Current withdrawal rules:
- Minimum withdrawal: **$20**
- Network fee: **$1**
- Payment method: **USDT TRC20**
- Net received = requested amount − $1 fee.
- Withdrawal is reviewed/processed by FunAgency.
- Completed withdrawal can include a blockchain TX hash for verification.

The MiniApp states that Admin will process a submitted withdrawal request within 24 hours.

Do not turn this into an unconditional payment guarantee beyond the documented processing flow.

---

## 4. REFERRAL ATTRIBUTION

The referral system primarily uses **first-touch attribution**.

Important rules:
- The first referral code recorded when the client presses START is attributed.
- If the client clicks multiple Referrer links, the first qualifying Referrer wins.
- If a person previously opened the bot without a referral link and later enters through a referral link, the new referral code can be recorded.
- Existing active-client edge cases may require manual FunAgency handling.

For public landing-page copy, this can be simplified to a trust message such as:

**“Your referrals are tracked from the moment they start through your unique link.”**

Do not claim attribution is infallible or fully automatic in every edge case.

---

## 5. MINIAPP — HOME / EARNINGS OVERVIEW

The Home screen gives the Referrer a quick overview of their referral business.

Key user-facing information includes:

### Current month commission
Displays commission earned for the current month and, when data exists, comparison with the previous month.

### Tier + current commission rate
The Referrer can see:
- Current tier.
- Current effective commission rate.
- Progress toward the next tier.

### KPI cards
Home includes metrics such as:
- Active referred clients.
- Available balance.
- Amount on hold.
- Total earned.
- Best earning month.

### “Network earned while you were away”
When applicable, the app can show how much commission the network generated since the Referrer's previous visit.

This is a useful landing-page concept for communicating that Referrers can monitor ongoing earnings generated by their client network.

Do NOT translate this into claims such as “passive income guaranteed.”

### Commission calculator
The MiniApp contains an interactive commission calculator.

The user can enter expected monthly client spend/deposit and see estimated:
- Monthly commission.
- Annualized commission.

Quick values include:
- $1,000
- $5,000
- $10,000
- $50,000

Calculations use the Referrer's current effective rate.

This calculator can be recreated or visually demonstrated on the landing page, but all results must be presented as calculations/examples, not guaranteed income.

### Activity feed
Recent events can include:
- Someone started through the referral link.
- New commission.
- Badge unlocked.
- Tier progression.
- Client becoming At Risk / Cooling.
- Withdrawal completed/rejected.
- Challenge ending.

V1 notifications are primarily displayed inside the MiniApp activity feed; do not advertise Telegram bot push notifications as a general feature.

---

## 6. NETWORK — CLIENT MONITORING

Referrers can monitor the clients in their network rather than only seeing a total number.

Client health/status concepts include:
- **New**
- **Active**
- **Cooling**
- **At Risk**
- **Churned**

Business meaning:
- Active/New clients count toward active-client tier progression.
- Cooling indicates a client whose current-month activity has dropped compared with the previous month.
- At Risk indicates no deposit for 30–60 days.
- Churned indicates no deposit for more than 60 days.

The MiniApp can surface warnings when clients become Cooling or At Risk.

Landing-page benefit framing:

**“Know which clients are active — and which relationships may need attention.”**

This is stronger than presenting “Network” merely as a list of referrals.

---

## 7. STATS & PERFORMANCE ANALYTICS

The Stats area helps Referrers understand referral performance by month.

### Referral conversion funnel

The app tracks:

**Bot Starts → Leads → Clients**

Definitions:
- Bot Starts = people who press START from the Referrer's referral link.
- Leads = people who provide the required GEO + budget information.
- Clients = people who become actual FunAgency clients.

This allows the Referrer to understand how effectively referrals convert.

### Commission history

A 6-month commission chart shows:
- Selected month.
- Previous five months.
- Month-over-month comparison when applicable.

### Forecast

The app can estimate next-month commission based on client historical deposit behavior and trends.

Important:
- Forecast is an **estimate, not a commitment**.
- At least one month of data is needed.
- The underlying logic uses recent client deposit history, including up to the latest three months where available.

Never present forecast values as guaranteed future earnings.

### Top clients

The Stats screen can show the top 3 client spenders/depositors for a selected month and the commission generated from them.

### Leaderboard

Referrers can compare their monthly performance with other Referrers.

Privacy mechanism:
- Other Referrers are anonymized.
- The current user's own row is clearly identified.
- Tier badges are visible.
- Leaderboard resets each month.

This can be presented as competitive/gamified motivation without exposing participant identities.

---

## 8. TIER SYSTEM

There are three tiers based on number of active clients:

| Tier | Active Clients |
|---|---:|
| Starter | 0–4 |
| Growth | 5–14 |
| VIP | 15+ |

For tier calculation, active clients are clients in **Active or New** status.

Cooling, At Risk and Churned clients do not count as active clients for tier purposes.

Tier can move both upward and downward as the active-client count changes.

### Critical rule

**Tier does NOT increase commission rate.**

Tier is a status/progression system.

Commission rate increases come from specific **achievement boosts**, not from becoming Growth or VIP.

Do not write:
“Reach VIP to earn a higher commission rate.”

That would be incorrect.

---

## 9. ACHIEVEMENTS & REWARDS

The product contains an achievement system with **19 badges across 4 tracks**.

Achievements can provide:
- Cash rewards.
- Commission-rate boosts.
- Recognition/badges.

When a cash achievement reward is unlocked:
- It is credited immediately.
- It does **not** use the normal 14-day commission hold.

When a rate-boost achievement is unlocked:
- The boost becomes effective for subsequent commission according to its duration/rules.

The system includes special badges/recognition such as:
- Grand Master
- High Roller
- Early Bird
- All Rounder

Do not invent badge conditions or cash reward amounts unless explicitly provided in the approved product/business data.

---

## 10. COMMISSION RATE BOOSTS

Base rate:

**1.0%**

Documented achievement boosts:

| Achievement | Rate Boost | Duration |
|---|---:|---|
| Early Bird | +0.1% | Permanent |
| Network Legend | +0.2% | Permanent |
| High Roller | +0.3% | Permanent |
| Growing Network | +0.1% | 30 days from unlock |
| Annual Elite | +0.5% | 12 months from unlock |

Effective rate:

`1.0% base + all permanent boosts + currently active temporary boosts`

Maximum documented effective rate:

**2.2%**

Possible permanent-boost stack:
- Base only: 1.0%
- Early Bird: 1.1%
- Network Legend: 1.2%
- High Roller: 1.3%
- All three permanent boosts together: 1.6%

Growing Network and Annual Elite can temporarily increase the effective rate further.

When all five applicable boosts are simultaneously active:

**Maximum = 2.2%**

For landing-page messaging, it is safe to communicate:

**“Start at 1.0%. Unlock achievement boosts and reach up to 2.2%.”**

Do not imply that every user automatically reaches 2.2%.

---

## 11. WALLET & TRANSPARENCY

The Wallet acts as the financial center of the Referrer MiniApp.

Referrers can see:

### Available balance
Commission that has completed the 14-day hold and can be withdrawn.

### On-hold balance
Commission still inside the 14-day hold period.

### Unlock progress
Individual held commissions can show:
- Client.
- Amount.
- Date generated.
- Unlock date.
- Days remaining.
- Progress through the 14-day period.

The visual pipeline is:

**Recorded → Confirmed → 14-day Hold → Available**

### Transaction history

Transaction types can include:
- Commission.
- Withdrawal.
- Achievement reward.
- Administrative positive/negative adjustments.

Commission transaction detail can include:
- Client name.
- Deposit amount.
- Commission rate.
- Date.
- Available/Locked status.
- Unlock date when Locked.

Withdrawal detail can include:
- Requested amount.
- $1 fee.
- Net amount.
- Wallet address.
- Status.
- TX hash when completed.

This level of transparency is a useful trust point for the landing page.

Suggested benefit concept:

**“See where every dollar of commission comes from.”**

---

## 12. SHARING TOOLS

The Share experience is designed to make referral distribution easy.

Available mechanisms include:
- Unique referral link.
- One-click copy.
- Telegram share.
- QR code.
- Prepared message templates.
- Lifetime summary such as bot starts and clients generated from the link.

Core concept:

**One unique link connects the Referrer's outreach to lead/client tracking.**

Avoid claiming that FunAgency automatically markets or finds clients for the Referrer.

---

## 13. GAMIFICATION

The Referral App includes several motivational systems:

- Tier progression: Starter → Growth → VIP.
- 19 achievement badges.
- Cash achievement rewards.
- Commission-rate boosts.
- Monthly leaderboard.
- Monthly challenges when FunAgency has an active challenge.
- Special recognition badges.
- Progress indicators and unlock ceremonies.

Monthly Challenge is conditional:
- It only appears when an Admin has created an active challenge.
- Therefore do not advertise a permanent monthly challenge unless the business explicitly wants to guarantee recurring challenges.

Leaderboard:
- Resets each month.
- Allows Referrers to compare performance while keeping other Referrers anonymized.

---

## 14. TRUST / CONTROL MECHANISMS RELEVANT TO LANDING PAGE

Potential trust-building points supported by the product:

### Unique referral attribution
Each approved Referrer receives their own referral code/link.

### Referral funnel visibility
Referrers can track movement from Bot Starts → Leads → Clients.

### Client-level visibility
Referrers can see the status and performance of clients in their network.

### Commission traceability
Commission transactions can be connected to client deposits and commission rate.

### Hold visibility
The 14-day hold is not hidden; Referrers can see held amounts, unlock dates and progress.

### Withdrawal traceability
Completed withdrawals can include TX hashes.

### Performance analytics
Historical commission, client performance, funnel metrics and forecast tools are available.

### Privacy-conscious competition
Leaderboard participants are anonymized.

Do not use unsupported claims such as:
- “100% transparent”
- “Guaranteed tracking”
- “Guaranteed payouts”
- “Zero risk”
unless separately approved by FunAgency.

---

## 15. IMPORTANT PUBLIC-FACING BUSINESS RULES

These facts may be relevant to FAQ, pricing/earnings explanations or trust sections:

- Base commission: **1.0%**
- Maximum effective commission with active achievement boosts: **2.2%**
- Commission formula: eligible client deposit × effective rate.
- Standard commission hold: **14 days**
- Minimum withdrawal: **$20**
- Withdrawal network fee: **$1**
- Withdrawal method: **USDT TRC20**
- Referrer account requires FunAgency approval.
- Tier is based on active-client count.
- Tier does not directly change commission rate.
- Achievement cash rewards are credited immediately rather than entering the normal 14-day hold.
- Forecast values are estimates, not guarantees.
- Other Referrers are anonymized on the leaderboard.

---

## 16. FEATURES THAT ARE GOOD CANDIDATES FOR LANDING-PAGE VISUALS

When designing the landing page, prioritize product UI/screenshots/mockups that demonstrate value.

Strong candidates:

1. **Home / Earnings Hero**
   - Current-month commission.
   - Effective rate.
   - Tier progress.

2. **Commission Calculator**
   - Interactive demonstration of deposit → commission.

3. **Referral Flow**
   - Share Link → Lead → Client → Deposit → Commission → Withdraw.

4. **Network Health**
   - Active / New / Cooling / At Risk client cards.

5. **Conversion Funnel**
   - Bot Starts → Leads → Clients.

6. **Wallet**
   - Available vs On Hold.
   - 14-day unlock progress.
   - Transaction detail.

7. **Achievement / Rate Boost**
   - Show progression from 1.0% toward higher effective rates.
   - Make clear boosts must be earned.

8. **Leaderboard / Gamification**
   - Anonymous monthly competition.

9. **Share Tools**
   - Referral link + Telegram share + QR.

Avoid making Web Admin screens the visual focus of a Referrer acquisition landing page.

---

## 17. SUGGESTED LANDING-PAGE INFORMATION FLOW

This is guidance, not a mandatory visual design.

### 1. Hero
Answer immediately:
- What is FunAgency Referral?
- What does the Referrer gain?
- What action should they take?

Potential factual message direction:

**Refer clients. Earn every time they deposit.**

Supporting concept:

**Start at 1.0% commission and unlock achievement boosts up to 2.2%, while tracking your network, earnings and withdrawals from one Telegram MiniApp.**

CTA concept:
**Become a Referrer**

Do not promise approval; joining requires review/approval.

### 2. How it works
Show the simple mechanism:

**Share → Client joins → Client deposits → You earn → Withdraw**

Keep internal Admin/Sheet/backend implementation out of the primary explanation.

### 3. Earnings / Commission
Explain:
- Base 1.0%.
- Deposit-based calculation.
- Achievement boosts.
- Up to 2.2%.
- Interactive calculator if appropriate.

### 4. Product dashboard
Show that the program is more than a referral link:
- Earnings overview.
- Network.
- Stats.
- Wallet.
- Achievements.
- Sharing.

### 5. Track your network
Demonstrate:
- Client status.
- Health warnings.
- Referral funnel.

### 6. Grow and unlock more
Explain:
- Tier progression.
- Achievements.
- Rate boosts.
- Rewards.
- Leaderboard/challenges where appropriate.

### 7. Wallet / payout transparency
Explain:
- 14-day hold.
- Available/on-hold visibility.
- Withdrawal.
- USDT TRC20.
- Transaction history/TX hash.

### 8. Analytics
Show:
- Conversion funnel.
- 6-month earnings.
- Forecast.
- Top clients.
- Leaderboard.

### 9. FAQ
Recommended factual topics:
- How do I become a Referrer?
- How is my referral tracked?
- How much commission do I earn?
- How can my rate increase?
- Does VIP tier increase my rate?
- When does commission become withdrawable?
- What is the minimum withdrawal?
- How do I receive my money?
- Can I track my clients?
- What happens if a client becomes inactive?
- Is forecasted commission guaranteed?

### 10. Final CTA
Reinforce the primary action:
**Apply / Become a Referrer**

---

## 18. COPY SAFETY / ACCURACY RULES FOR CLAUDE

When using this document to create the landing page:

### DO
- Translate features into benefits.
- Keep numerical rules exact.
- Clearly label earning examples as examples/calculations.
- Clearly label forecasts as estimates.
- Explain that achievement boosts must be unlocked.
- Explain 14-day hold where payout timing is discussed.
- Use product UI to prove capabilities.
- Optimize information hierarchy for conversion.

### DO NOT
- Invent user counts.
- Invent total payout numbers.
- Invent conversion rates.
- Invent testimonials.
- Invent company statistics.
- Invent guaranteed earnings.
- Say “passive income guaranteed.”
- Say “instant withdrawal.”
- Say “no fees.”
- Say “up to 2.2%” without making clear this requires achievement boosts.
- Say VIP tier automatically increases commission.
- Claim every feature sends Telegram push notifications.
- Expose unnecessary Admin implementation details.
- Treat forecasts as guaranteed future earnings.

If a desired landing-page claim is not supported here, mark it:

`[NEEDS BUSINESS INPUT]`

instead of inventing the answer.

---

## 19. SOURCE-OF-TRUTH PRIORITY

This context document is intentionally optimized for the public landing page.

If the project also contains the original FunAgency product documents:

1. **Business Spec** is the highest-priority source for business rules.
2. MiniApp references provide detailed user-facing behavior.
3. Web Admin documents provide operational context.
4. This landing-page context summarizes only the parts relevant to acquisition/marketing.

If this document conflicts with the original Business Spec, follow the Business Spec.

UI/UX skills or design systems may decide **how** these facts are presented.

They must never change **what is true** about the product.
