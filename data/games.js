/* ============================================================
   PORTFOLIO DATA — this is the only file you edit.
   ============================================================

   ┌─ HOW TO ADD A GAME ─────────────────────────────────────┐
   │ Copy one whole { ... } block inside the GAMES array,     │
   │ paste it, and change the fields. A card + chart appear   │
   │ automatically. Order in the file doesn't matter — cards  │
   │ are auto-sorted by players online, then by visits.       │
   └─────────────────────────────────────────────────────────┘

   ─── FIELD REFERENCE (every field explained) ───────────────

   title        Game name. (text)
   tagline      One short line under the title. (text)
   role         Your role, e.g. "Backend / systems". (text)

   status       "live"        → green ● live tag
                "delisted"    → game was removed from Roblox
                "showcase"    → not a public game; a systems/
                                feature demo (no live stats, no
                                play button)
                "discontinued"→ project stopped

   placeId      The number in the Roblox URL:
                roblox.com/games/THIS_NUMBER/Name
                Used to auto-pull visits, players & cover.
                Leave "" if the game isn't on Roblox.

   url          Roblox game link. Leave "" to hide the
                "Play on Roblox" button (delisted/showcase).

   showStats    true  → show the visits / players row
                false → hide all live numbers (use for dead
                        games or pure showcase projects)

   forceManual  true  → never call Roblox; always use the
                        manual* values below. Use for delisted
                        games or when you want fixed numbers.
                false → pull live data, fall back to manual
                        only if the request fails.

   manualVisits   Fallback / fixed visits, e.g. "1.2M". ("—" = none)
   manualPlaying  Fallback / fixed current players. ("—" = none)
   maxCcu         Peak concurrent players. The public API does NOT
                  expose this — read it from your Creator Dashboard
                  and type it here, e.g. "1.4k". Leave "" to hide.

   manualThumb    Cover image override. Put a URL or local path
                  (e.g. "assets/mygame.png"). Leave "" to auto-pull
                  the cover from Roblox. REQUIRED for showcase /
                  delisted games (no Roblox cover to fetch).

   tags         Tech tags shown as chips. (array of text)
   desc         1–2 sentences. Focus on what YOU built. (text)

   chart        The chart shown on the card.
                For monthly visits or any metric you want PERMANENT:
                { title: "D1 retention",   // name shown above chart
                  unit: "%",               // "" for plain numbers
                  labels: ["Apr 27","Apr 28"],
                  values: [12.4, 12.8] }
                Leave values: [] to show no chart.
                EASIEST WAY TO FILL THIS: open games.html?edit in
                your browser, drop a Roblox Analytics CSV on a card,
                and copy the generated snippet it shows you.

   metrics      Headline numbers shown as small stat plates.
                Add as many or as few as you have. Examples:
                [
                  { label: "D1 retention", value: "13%" },
                  { label: "D7 retention", value: "5.2%" },
                  { label: "D30 retention", value: "2.1%" },
                  { label: "Avg playtime", value: "14 min" },
                  { label: "From discovery", value: "62%" }
                ]
                Leave [] to show none.

   ── EDIT MODE ──────────────────────────────────────────────
   Open  games.html?edit  to see CSV loaders on every card (for
   YOU only — normal visitors at games.html never see them).
   Drop a CSV, it charts instantly and prints a snippet you paste
   into the `chart` field here to publish it permanently.
   ────────────────────────────────────────────────────────── */

const GAMES = [
  {
    title: "Bee Tower Defense",
    tagline: "Tower defense with bee-themed units",
    role: "backend / systems / entire game",
    status: "live",
    placeId: "102649256799440",
    url: "https://www.roblox.com/games/102649256799440",
    showStats: true,
    forceManual: false,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "~59",
    manualThumb: "",
    metrics: [],
    tags: ["Tower Defense", "Gacha / summon", "3-place universe", "ProfileStore", "BridgeNet2", "like Anime Vanguards lol"],
    desc: "Whole server side: TD core, gacha summon with trait rolls, unit progression & evolutions, economy, and a 3-place universe with shared progress (hub / match / AFK chamber). Server-authoritative combat, ProfileStore data layer, 20+ CMDR admin commands. DM for Stats",
    chart: {
      labels: [],
      values: []
    }
  },
  {
    title: "Meme TD",
    tagline: "Meme-styled tower defense",
    role: "backend / systems / entire game",
    status: "live",
    placeId: "15041096647",
    url: "https://www.roblox.com/games/15041096647",
    showStats: true,
    forceManual: false,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "~350",
    manualThumb: "",
    metrics: [],
    tags: ["Tower Defense", "First game"],
    desc: "my first game and made entirely by me except for the models, lol. DM for Stats",
    chart: { labels: [], values: [] }
  },
  {
    title: "Dig Down and WIN",
    tagline: "Digging progression game",
    role: "backend / systems / entire game",
    status: "live",
    placeId: "133492982148122",
    url: "https://www.roblox.com/games/133492982148122",
    showStats: true,
    forceManual: false,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "1.8K",
    manualThumb: "",
    metrics: [{ label: "AVG Playtime", value: "27.1m" }, { label: "Session time", value: "18.4m" }, { label: "D1 retention", value: "13%" }, { label: "D7 retention", value: "0.63%" }, { label: "ARPPU", value: "60 R$" }],
    tags: ["Simulator", "Progression", "Incremental", "Shared engine"],
    desc: "An earlier simulator built on the shared engine that later grew into my plot-based games. Designed the digging progression loop and data layer — depth tracking, upgrades, and reliable saves. DM for more Stats",
    chart: {
      title: "Day 1 retention",
      unit: "%",
      labels: ["May 26","May 27","May 28","May 29","May 30","May 31","Jun 1","Jun 2","Jun 3","Jun 4","Jun 5","Jun 6","Jun 7","Jun 8","Jun 9","Jun 10","Jun 11","Jun 12","Jun 13","Jun 14","Jun 15","Jun 16","Jun 17","Jun 18","Jun 19","Jun 20"],
      values: [13.05,11.74,13.27,12.15,12.61,11.13,13.91,11.98,14.4,15.02,15.13,12.94,12.01,12.6,12.63,13.43,12.99,11.93,13.98,11.53,13.45,12.35,14.62,14.15,15,13.77]
    },
  },
  {
    title: "Dig Down and Get BRAINROTS",
    tagline: "Dig-and-collect game",
    role: "backend / systems / entire game",
    status: "live",
    placeId: "107096388324655",
    url: "https://www.roblox.com/games/107096388324655",
    showStats: true,
    forceManual: false,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "~30",
    manualThumb: "",
    metrics: [],
    tags: ["Simulator", "Progression", "Incremental", "Shared engine", "Brainrot"],
    desc: "Another simulator on the same shared engine, before plots were added. Digging progression loop and data layer — depth tracking, upgrades, and reliable saves.",
    chart: { labels: [], values: [] }
  },
  {
    title: "Dig Dirt for Brainrot!",
    tagline: "Fast-paced digging game",
    role: "backend / systems / entire game",
    status: "live",
    placeId: "96062605574136",
    url: "https://www.roblox.com/games/96062605574136",
    showStats: true,
    forceManual: false,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "43",
    manualThumb: "",
    metrics: [],
    tags: ["Simulator", "Rebirth", "Plot system", "ProfileStore", "Anti-dupe", "Brainrot"],
    desc: "My newest dig game — the evolution of the engine behind my earlier simulators, now with a plot/rebirth system layered on top. ProfileStore data with anti-dupe, server-validated economy, BridgeNet2 networking. Optimized for fast dig-loop sessions.",
    chart: { labels: [], values: [] }
  },
  {
    title: "Sell ANIME Items to RULE THE MULTIVERSE! 🌎💫",
    tagline: "Funny Tycoon game, prove smbd wrong",
    role: "backend / systems / entire game",
    status: "delisted",
    placeId: "",
    url: "",
    showStats: true,
    forceManual: true,
    manualVisits: "~1.2M",
    manualPlaying: "—",
    maxCcu: "~122",
    manualThumb: "assets/tycoonAnime.png",
    metrics: [],
    tags: ["Tycoon", "Prove mom wrong", "Cash-Grab"],
    desc: "Deleted game, no longer live. We had ~4 games like that (tycoon)",
    chart: { labels: [], values: [] }
  },
  {
    title: "Scratch for Brainrots",
    tagline: "Scratch-card gacha sim — in the works",
    role: "backend / systems + some VFX",
    status: "in-dev",
    placeId: "",
    url: "",
    showStats: false,
    forceManual: true,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "",
    manualThumb: "",
    metrics: [],
    tags: ["Simulator", "Gacha / RNG", "Lucky Block", "Offline earning", "ProfileStore", "Anti-dupe"],
    desc: "Upcoming. Scratch a ticket → jackpot → Lucky Block → brainrot on your plot → passive income → upgrades → rebirth. ~35 server systems on my reused framework: server-validated ticket rolls, a Lucky Block reward roulette I built with CFrame 3D math, and jackpot curves modeled with probability theory. Data-driven economy (16 tickets, 12 coin tiers, 20 rebirths).",
    chart: { labels: [], values: [] }
  }


  /* ─── TEMPLATE 1: DELISTED GAME (removed from Roblox) ───────
     No live data. Shows last-known stats from your dashboard.
     Provide a cover screenshot via manualThumb.

  ,{
    title: "[Old Game Name]",
    tagline: "Delisted — last known stats",
    role: "Backend / systems",
    status: "delisted",
    placeId: "",
    url: "",
    showStats: true,
    forceManual: true,
    manualVisits: "2.1M",
    manualPlaying: "—",
    maxCcu: "850",
    manualThumb: "assets/oldgame.png",
    metrics: [],
    tags: ["DataStore", "Networking"],
    desc: "A previous project, no longer live. Stats from Creator Dashboard.",
    chart: { labels: ["Jan","Feb","Mar"], values: [400000, 1200000, 2100000] }
  }
  */

  /* ─── TEMPLATE 2: SHOWCASE PROJECT (systems demo, not a game) ─
     Use for "here's a system I built" with no public game.
     No stats, no play button. Cover is your own screenshot/gif.

  ,{
    title: "Advanced Inventory System",
    tagline: "Modular inventory + trading framework",
    role: "Systems demo",
    status: "showcase",
    placeId: "",
    url: "",
    showStats: false,
    forceManual: true,
    manualVisits: "—",
    manualPlaying: "—",
    maxCcu: "",
    manualThumb: "assets/inventory-demo.png",
    metrics: [],
    tags: ["DataStore", "Trading", "OOP"],
    desc: "A reusable inventory framework with server-validated trading, stack splitting, and drag-drop hooks for any UI.",
    chart: { labels: [], values: [] }
  }
  */
];

/* ============================================================
   SYSTEMS — what you build. Edit freely.
   ============================================================ */
const SYSTEMS = [
  { code:"data", title:"Data & persistence", desc:"ProfileStore-based data layer with a custom DataManager (dot-notation paths, increments), session safety, and anti-dupe on inventory load — so progress never breaks." },
  { code:"net",  title:"Networking", desc:"BridgeNet2 across the board, with a deliberate choice of request-response vs fire-and-forget per system to keep traffic lean under load." },
  { code:"sec",  title:"Anti-exploit & validation", desc:"Server-authoritative everything: ticket generation, reward rolls and currency are validated on the server with session checks. The client only displays." },
  { code:"gacha", title:"Gacha & economy", desc:"Summon banners with trait rolls and tuned drop rates, jackpot curves modeled with probability theory, all data-driven so balance changes without touching code." },
  { code:"multi", title:"Multi-place / cross-server", desc:"Universes spanning several places with shared progress — SafeTeleport between hub, reserved match servers, and AFK chambers, carrying player data across boundaries." },
  { code:"ops",  title:"Live-ops tooling", desc:"Reusable backend framework shared across my games: 20+ typed CMDR admin commands, SoftShutdown for safe restarts, analytics and global limits." }
];

/* ============================================================
   PROFILE & CONTACT
   ------------------------------------------------------------
   discordServer : your server invite — the reliable main link.
   discord       : your username, shown with a Copy button.
   discordUserId : OPTIONAL. Your numeric Discord ID (NOT the
                   username). If set, adds a "Message me" link
                   that opens a DM directly. To get it: Discord
                   Settings → Advanced → Developer Mode ON, then
                   right-click your name → Copy User ID.
                   Note: direct DM links only work if you allow
                   messages from non-friends in privacy settings.
   ============================================================ */
const PROFILE = {
  nick: "cripter",
  role: "Roblox Backend / Systems Engineer",
  years: "3",
  totalVisits: "10M+",
  discord: "dristun_skibidi",
  discordServer: "https://discord.gg/YR7QMPZMEk",
  discordUserId: "1170033985515167876"
};

/* ============================================================
   LIVE STATS FETCHER — no need to edit below this line.
   Uses roproxy.com (public CORS mirror of the Roblox API).
   placeId -> universeId -> { visits, playing, cover }.
   ============================================================ */
const RoStats = (function () {
  const PROXY = "https://apis.roproxy.com";
  const GAMES_PROXY = "https://games.roproxy.com";
  const THUMB_PROXY = "https://thumbnails.roproxy.com";

  function fmt(n) {
    if (n === null || n === undefined || isNaN(n)) return null;
    n = Number(n);
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
    return String(n);
  }

  async function fetchThumb(universeId) {
    // wide game thumbnail first (fills the 16:9 cover nicely)
    try {
      const r = await fetch(THUMB_PROXY +
        "/v1/games/multiget/thumbnails?universeIds=" + universeId +
        "&size=768x432&format=Png&isCircular=false");
      if (r.ok) {
        const j = await r.json();
        const entry = j.data && j.data[0];
        const t = entry && entry.thumbnails && entry.thumbnails.find(x => x.state === "Completed");
        if (t) return { url: t.imageUrl, wide: true };
      }
    } catch (e) { /* fall through */ }
    // fallback: square icon
    try {
      const r = await fetch(THUMB_PROXY +
        "/v1/games/icons?universeIds=" + universeId +
        "&size=512x512&format=Png&isCircular=false");
      if (r.ok) {
        const j = await r.json();
        const item = j.data && j.data[0];
        if (item && item.state === "Completed") return { url: item.imageUrl, wide: false };
      }
    } catch (e) { /* none */ }
    return null;
  }

  async function fetchOne(placeId) {
    const uniRes = await fetch(PROXY + "/universes/v1/places/" + placeId + "/universe");
    if (!uniRes.ok) throw new Error("universe lookup failed");
    const uniJson = await uniRes.json();
    const universeId = uniJson.universeId;
    if (!universeId) throw new Error("no universeId");

    const dataRes = await fetch(GAMES_PROXY + "/v1/games?universeIds=" + universeId);
    if (!dataRes.ok) throw new Error("games data failed");
    const dataJson = await dataRes.json();
    const g = dataJson.data && dataJson.data[0];
    if (!g) throw new Error("no game data");

    const thumb = await fetchThumb(universeId);

    return {
      visits: fmt(g.visits),
      playing: fmt(g.playing),
      visitsRaw: Number(g.visits) || 0,
      playingRaw: Number(g.playing) || 0,
      thumb: thumb,
      raw: g
    };
  }

  return { fetchOne, fmt };
})();
