export const projects = [
  {
    slug: "barofarm",
    title: "BaroFarm",
    subtitle: "농산물 직거래 마켓플레이스",
    screenshot: "/screens/barofarm-main.png",
    summary: [
      "DB 설계 및 핵심 도메인 모델링(정산/주문/상품)",
      "커뮤니티 게시판(작성/수정/목록/검색) 구현",
      "Git 병합/충돌 해결 및 공통 규칙 정리",
    ],
    stack: ["Spring Boot", "React", "Oracle", "JPA"],
    links: { repo: "https://github.com/choyhns/barofarm", demo: "", docs: "" },
  },
  {
    slug: "novatrip",
    title: "Novatrip",
    subtitle: "여행 커뮤니티 & 지도 기반 정보",
    screenshot: "/screens/novatrip-main.png",
    summary: ["외부 API 연동 기반 데이터 수집/표시", "커뮤니티 기능(게시판/검색/상세) 기여"],
    stack: ["Node", "React", "MongoDB", "API"],
    links: { repo: "https://github.com/choyhns/novatrip", demo: "", docs: "" },
  },
  {
    slug: "novafund",
    title: "Novafund",
    subtitle: "크라우드펀딩형 플랫폼",
    screenshot: "/screens/novafund-main.png",
    summary: ["DB 설계 및 ERD 구성", "핵심 기능 구현(게시/조회/수정 등)"],
    stack: ["Spring", "JSP", "Oracle"],
    links: { repo: "https://github.com/choyhns/novafund", demo: "", docs: "" },
  },
];
