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

export const problems = [
  {
    icon: "app" as IconName,
    number: "01",
    title: "複雜介面難以操作",
    description: "多層選單、細小文字與繁複步驟，讓不少長者在開始前已經卻步。",
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
    description: "獨居或家人不在身邊時，跌倒等突發情況可能錯過及時聯絡支援。",
  },
];

export const features = [
  {
    icon: "voice" as IconName,
    title: "一句話語音入口",
    description: "支援粵語及普通話，長者毋須打字或進入多層選單，只需按下語音按鈕並說出需要。",
    tag: "Voice first",
  },
  {
    icon: "landmark" as IconName,
    title: "長者福利與公共服務查詢",
    description: "將正式政策內容轉化為清楚易懂的口語答案，整理申請資格、文件、地點及查詢電話。",
    tag: "Public service",
  },
  {
    icon: "medical" as IconName,
    title: "醫療輪候與就醫路徑",
    description: "參考澳門官方公開的急診、門診及衛生中心輪候資訊，協助長者了解適合的醫療服務。",
    tag: "Care routing",
  },
  {
    icon: "risk" as IconName,
    title: "健康風險提示",
    description: "根據長者描述的症狀提供高、中、低風險提示與行動指引，但不進行醫療診斷。",
    tag: "Risk guidance",
  },
  {
    icon: "emergency" as IconName,
    title: "語音緊急求助",
    description: "遇到跌倒、胸痛、呼吸困難或無法起身時，協助通知家屬、傳送位置及生成症狀摘要。",
    tag: "Emergency support",
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
