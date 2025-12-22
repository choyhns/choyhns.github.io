import Section from "./Section.jsx";

export default function About() {
  return (
    <Section id="about" title="About Me">
  <div className="about-layout">
    <p className="about-text">
      Spring 기반 백엔드 개발을 공부하며, 데이터 구조와 비즈니스 로직이
      서비스의 품질을 결정한다는 점에 흥미를 느끼게 되었습니다.
      단순히 화면을 구현하는 것보다 <b>데이터의 흐름과 처리 규칙</b>을
      고민하는 과정이 제 성향과 잘 맞는다고 느꼈습니다.
    </p>

    <p className="about-text">
      팀 프로젝트를 진행하며 <b>DB 설계(ERD)</b>,
      <b> 정산·주문·상태 관리</b>와 같은 도메인 로직 구현을 중심으로 개발을
      경험했습니다. 기능 구현 시에는
      <b> 데이터 모델 → 도메인 로직 → API → 화면</b> 순서로 구조를 정리하며
      확장 가능한 코드를 작성하고자 노력했습니다.
    </p>

    <p className="about-text">
      또한 Git 병합 및 충돌 해결, 공통 규칙 정리 등 협업 과정에도 적극적으로
      참여하며 팀이 안정적으로 개발할 수 있는 환경을 만드는 역할을 수행했습니다.
      현재는 서비스의 핵심 로직을 책임질 수 있는 백엔드 개발자로 성장하는 것을
      목표로 하고 있습니다.
    </p>
  </div>
</Section>


  );
}
