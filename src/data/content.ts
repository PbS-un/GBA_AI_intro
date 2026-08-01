export type IconName =
  | "app"
  | "search"
  | "route"
  | "alone"
  | "voice"
  | "landmark"
  | "medical"
  | "risk"
  | "emergency"
  | "access"
  | "service"
  | "flow"
  | "clock"
  | "home"
  | "connect";

export const projectMeta = {
  teamName: "源神帶飛隊",
  projectType: "社會創新",
  projectName: "銀髮一句通",
  fullProjectName: "銀髮一句通：澳門 AI 語音助老守護系統",
  slogan: "不是讓長者重新學習科技，而是讓科技學會用長者聽得懂的方式提供守護。",
  positioning: "本項目改善的是澳門長者在公共服務、就醫判斷與緊急求助中的數碼使用場景。",
};

export const problems = [
  {
    icon: "app" as IconName,
    number: "01",
    title: "數碼隔離",
    description: "不習慣打字、看不清小字、害怕按錯或難辨網絡資訊真偽，讓不少長者在開始前已經卻步。",
  },
  {
    icon: "search" as IconName,
    number: "02",
    title: "政策資料難找難懂",
    description: "資料散落於不同頁面，正式條文也未必容易轉化成可採取的行動。",
  },
  {
    icon: "route" as IconName,
    number: "03",
    title: "不清楚就醫下一步",
    description: "身體不適時，難以快速判斷應前往哪一類醫療服務或是否需要求助。",
  },
  {
    icon: "alone" as IconName,
    number: "04",
    title: "突發情況支援不足",
    description: "獨居或家人不在身邊時，跌倒、胸痛、呼吸困難或無法起身，都可能錯過及時聯絡支援。",
  },
  {
    icon: "connect" as IconName,
    number: "05",
    title: "健康資訊分散",
    description: "症狀、用藥、覆診、家屬紀錄及社工跟進缺乏連續整理，照護資訊容易出現斷層。",
  },
];

export const features = [
  {
    icon: "voice" as IconName,
    title: "一句話語音入口",
    description: "原型以粵語／普通話、大字體與慢速播報為設計方向，自動辨識需求場景，毋須打字或進入多層選單。",
    tag: "Voice first",
    phase: "互動原型",
  },
  {
    icon: "landmark" as IconName,
    title: "長者福利與公共服務查詢",
    description: "將正式政策內容轉化為清楚易懂的口語答案，整理申請資格、文件、地點及查詢電話。",
    tag: "Public service",
    phase: "Demo 功能",
  },
  {
    icon: "medical" as IconName,
    title: "醫療輪候與就醫路徑",
    description: "規劃參考澳門官方公開的急診、門診及衛生中心輪候資訊與更新時間，協助理解不同醫療服務。",
    tag: "Care routing",
    phase: "資料整合規劃",
  },
  {
    icon: "risk" as IconName,
    title: "健康風險提示",
    description: "根據長者描述的症狀提供高、中、低風險提示與行動指引，但不進行醫療診斷。",
    tag: "Risk guidance",
    phase: "Demo 功能",
  },
  {
    icon: "emergency" as IconName,
    title: "語音緊急求助",
    description: "規劃以語音觸發緊急電話、聯絡人通知、位置資訊與症狀摘要，關鍵操作仍需使用者確認。",
    tag: "Emergency support",
    phase: "規劃功能",
  },
];

export const currentSolutionGaps = [
  "傳統 APP 操作層級較多",
  "很多資訊仍需要自行搜尋",
  "政府正式文字對部分長者閱讀門檻較高",
  "公共服務、醫療及求助資訊分散",
  "一般 AI 問答未必針對澳門本地資料",
  "普通問答工具只回答問題，未必提供下一步行動",
];

export const targetUsers = [
  {
    number: "01",
    icon: "access" as IconName,
    title: "高齡長者",
    scenario: "閱讀和操作複雜介面較困難",
    value: "以語音、大字體及清晰播報取代複雜操作。",
  },
  {
    number: "02",
    icon: "home" as IconName,
    title: "獨居長者",
    scenario: "突然不適、發生跌倒或家人不在身邊",
    value: "降低求助操作門檻，清楚提示可以採取的下一步。",
  },
  {
    number: "03",
    icon: "app" as IconName,
    title: "低數碼能力長者",
    scenario: "查詢福利、醫療及公共服務資訊",
    value: "把複雜資訊轉化成容易理解的口語行動指引。",
  },
];

export const secondaryStakeholders = ["長者家屬", "社工", "照護人員", "醫療服務人員"];

export const innovations = [
  {
    number: "01",
    title: "澳門本地化",
    description: "以澳門官方公開資料作為資訊來源基礎，聚焦本地福利、公共服務及醫療使用場景。",
  },
  {
    number: "02",
    title: "語音優先",
    description: "不是要求長者學習更多 APP 操作，而是以最自然的說話方式降低使用要求。",
  },
  {
    number: "03",
    title: "資訊 + 行動",
    description: "不只回答問題，也把資格、文件、地點、風險與下一步行動整理成清晰指引。",
  },
  {
    number: "04",
    title: "醫療安全邊界",
    description: "AI 只提供健康風險提示與就醫路徑建議，不進行診斷，也不取代醫護人員。",
  },
];

export const workflow = [
  { number: "01", title: "說出需要", description: "以粵語或普通話自然描述情況" },
  { number: "02", title: "場景識別", description: "辨識福利、醫療或求助等意圖" },
  { number: "03", title: "資料檢索", description: "查找澳門官方公開資料" },
  { number: "04", title: "風險提示", description: "按描述提供分級風險提醒" },
  { number: "05", title: "行動指引", description: "清楚說明可採取的下一步" },
  { number: "06", title: "支援介入", description: "需要時連接家屬或緊急服務" },
];

export const scenarios = [
  {
    id: "welfare",
    label: "福利查詢",
    icon: "landmark" as IconName,
    quote: "我今年 72 歲，想知道有什麼津貼可以申請。",
    response: "我會按你的年齡與基本情況，整理可能適用的福利和清晰的辦理步驟。",
    actions: ["整理可能適用的福利", "說明申請資格", "列出所需文件", "提供辦理地點及服務電話"],
    accent: "teal",
  },
  {
    id: "health",
    label: "身體不適",
    icon: "medical" as IconName,
    quote: "我頭暈又想嘔，應該去哪裡看？",
    response: "我會先提示需要留意的風險，再提供合適服務類型及下一步建議。",
    actions: ["提示健康風險", "建議適合的醫療服務類型", "顯示公開輪候資訊", "建議是否通知家屬"],
    accent: "blue",
  },
  {
    id: "fall",
    label: "跌倒求助",
    icon: "emergency" as IconName,
    quote: "我跌倒了，起不來。",
    response: "請先不要勉強站起。我會協助啟動求助流程，並請你確認需要聯絡的人。",
    actions: ["提示不要勉強站起", "啟動緊急求助", "通知緊急聯絡人並傳送位置", "生成症狀及事件摘要"],
    accent: "orange",
  },
];

export const safetyPrinciples = [
  { number: "01", title: "不提供醫療診斷", description: "系統提供的是風險提示與行動指引，不會取代醫護人員的專業判斷。" },
  { number: "02", title: "高危情況優先求助", description: "偵測到高危症狀描述時，優先提示立即聯絡家屬或當地緊急服務。" },
  { number: "03", title: "輪候資訊只供參考", description: "公開輪候資訊會隨時變動，不會作為延遲求醫的依據。" },
  { number: "04", title: "關鍵操作需要確認", description: "通知家屬、分享位置及啟動求助前，均以清晰語音再次確認。" },
];

export const impacts = [
  { icon: "access" as IconName, title: "降低數碼門檻", description: "以說話取代複雜操作，讓更多長者能獨立使用數碼服務。" },
  { icon: "service" as IconName, title: "提升服務可及性", description: "把分散的公共服務資訊，轉化為容易理解的口語指引。" },
  { icon: "flow" as IconName, title: "協助醫療合理分流", description: "幫助長者理解不同服務定位，找到更合適的就醫方向。" },
  { icon: "clock" as IconName, title: "降低延誤風險", description: "對高危症狀給予優先提醒，避免只依賴輪候人數作決定。" },
  { icon: "home" as IconName, title: "支援獨居長者", description: "在突發情況下縮短長者與緊急聯絡人之間的距離。" },
  { icon: "connect" as IconName, title: "連接照護資訊", description: "改善家屬、社工與醫療人員之間的資訊斷層。" },
];

export const roadmap = [
  {
    phase: "第一階段",
    year: "現在 · 核心驗證",
    title: "AI 語音助老系統",
    description: "先把長者最常遇到、最需要即時回應的服務場景做好。",
    items: ["福利查詢", "醫療輪候資訊", "健康風險提示", "緊急求助"],
  },
  {
    phase: "第二階段",
    year: "下一步 · 協同照護",
    title: "家庭及社區協同",
    description: "讓照護資訊在長者授權下，於家屬與社區服務之間流動。",
    items: ["家屬端與社工端", "高風險長者提醒", "社區關懷紀錄", "可穿戴設備資料"],
  },
  {
    phase: "第三階段",
    year: "未來 · 平台連接",
    title: "健康數據共享站",
    description: "建立以長者為中心、權限清晰且可撤回授權的健康服務網絡。",
    items: ["個人化健康檔案", "授權共享與線上諮詢", "AI 輔助家庭醫生模式", "城市級智慧養老平台"],
  },
];

export const shortTermGoals = [
  "完成可實際展示的核心產品原型",
  "跑通主要語音助老使用流程",
  "驗證澳門官方公開資訊與 AI 服務的結合方式",
  "完善健康風險提示及安全邊界",
  "收集使用者及評委意見",
  "持續改善產品體驗",
];

export const teamMembers = [
  {
    name: "卓恆亮",
    role: "產品 / 運營 / 統籌",
    badge: "隊長",
    description: "主導項目整體方向與團隊協作，負責需求分析、產品規劃及成果統籌，將長者真實生活痛點轉化為清晰的功能方案與展示流程。",
    tags: ["產品", "運營", "項目統籌", "社會創新"],
    leader: true,
  },
  {
    name: "戴璵璇",
    role: "前端 / 後端",
    description: "負責項目的主要技術支援與原型實現，協助處理前後端功能、介面互動及系統測試，確保設計概念能轉化為可實際展示的產品。",
    tags: ["前端", "後端", "技術實現", "系統測試"],
    leader: false,
  },
  {
    name: "吳凱威",
    role: "算法 / 後端",
    description: "從技術可行性與系統邏輯角度提供專業意見，協助完善需求識別、風險分流與資料處理流程，提升核心功能的合理性與可靠程度。",
    tags: ["算法", "後端", "邏輯分析", "方案評估"],
    leader: false,
  },
  {
    name: "陳敏莜",
    role: "設計 / 產品",
    description: "從長者使用場景、介面表達與使用者體驗角度完善產品設計，協助整理展示內容與操作流程，讓功能更容易理解及符合長者使用習慣。",
    tags: ["設計", "產品", "UI/UX", "內容表達"],
    leader: false,
  },
  {
    name: "劉源",
    role: "運營 / 其他",
    description: "協助團隊進行資料整理、功能測試及現場展示支援，配合主要成員完成內容核對與流程準備，確保項目展示及團隊協作順利進行。",
    tags: ["運營支援", "測試", "資料整理", "協作"],
    leader: false,
  },
];
