import Section from "./Section.jsx";

const items = [
  { when: "2025", title: "BaroFarm", desc: "정산/주문/상품 도메인 & DB 설계, 커뮤니티 기능 구현" },
  { when: "2025", title: "Novatrip", desc: "여행 커뮤니티/데이터 연동 기능 개발" },
  { when: "2025", title: "Novafund", desc: "Spring/JSP 기반 기능 구현 및 DB 설계" },
];

export default function Timeline() {
  return (
    <Section id="timeline" title="Timeline" desc="프로젝트 흐름을 간단히 정리했습니다.">
      <div className="timeline">
        {items.map((it) => (
          <div className="tl-item" key={it.title}>
            <div className="tl-when">{it.when}</div>
            <div className="tl-body">
              <div className="tl-title">{it.title}</div>
              <div className="tl-desc">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
