import React from 'react';
import './Resume.css';

function Resume() {

  return (
    <div className="Resume">
      <header>
        <h1>안녕하세요,<br />김태훈 입니다.</h1>
        <p className='big-font'>5년에 풀스택 엔지니어로서 꿈꾸고 공부하며 성장해나가고 있습니다.<br/> 새로운 기술을 탐구하고, 다양한 프로젝트를 진행하며 실력을 키워가고 있습니다.</p>
        
      </header>
      <h2>Work Experience</h2>
      <div className='row' id="company-portfolio">
        <div className='row-left'>
          <h3>더존비즈온</h3>
          <p></p> 
        </div>
        <div className='row-right'>
            <div className='project'>
            <h3>Fabric 스케치 개발 (2025.01 ~ 진행 중)</h3>
              <ul>
                <li><strong>개발 역할:</strong> Fabric 라이브러리와 jitsit 라이브러리를 이용한 스케치 서비스 개발</li>
              </ul>
            </div>
        
            <div className='project'>
        <h3>WE CRM 서비스 개발 (2024.11 ~ 진행 중)</h3>
        <ul>
          <li><strong>개발 역할:</strong> CRM 관련 메뉴 개발</li>
          <li><strong>성과:</strong> 기존 하드코딩된 CRM 컬럼을 관리 테이블로 전환하고, 관리자 UI/API 개발을 통해 배포 없이 컬럼 추가/수정 가능</li>
        </ul>
        </div>
        
        <div className='project'>
        <h3>WEHAGO L 플랫폼 개발 (2021.02 ~ 진행 중)</h3>
        <ul>
          <li><strong>기술:</strong> React.js / Java Spring / PostgreSQL</li>
          <li><strong>설명:</strong> 전문 서비스들을 하나의 메인 페이지에서 통합 관리하여 사용자에게 알림, 타임라인, 수임처 정보 등을 제공</li>
          
        <div className='inner-project'>
          <li><strong>로테크 서비스 개발 (2021.02 ~):</strong>
            <ul>
              <li>Front/Back 개발 (UI: React.js, API: Java Spring, DB: PostgreSQL)</li>
              <li>고객관리, 사건관리, 자문관리, 계약관리 등 전체 메뉴 및 팝업 개발</li>
              <li>주요 기능: 대법원 나의사건조회 스크래핑, PDF 생성 성능 개선 등</li>
            </ul>
          </li>
          </div>
          
        <div className='inner-project'>
          <li><strong>복대리지원 서비스 개발 (2021.07 ~):</strong>
            <ul>
              <li><strong>기술:</strong> React.js (TypeScript), Java Spring Boot, PostgreSQL</li>
              <li><strong>설명:</strong> 변호사 간 복대리 구인 지원 서비스 (공고관리, 지원자 관리 등)</li>
            </ul>
          </li>
          </div>
          <div className='inner-project'>
          <li><strong>서류작성지원 서비스 개발 (2022.02 ~):</strong>
            <ul>
              <li><strong>기술:</strong> Java Spring Boot, PostgreSQL</li>
              <li><strong>설명:</strong> 법률 서류 양식 제공 및 동적 내용 변경, 서류 저장 및 인쇄 지원</li>
            </ul>
          </li>
          </div>
          <div className='inner-project'>
          <li><strong>플랫폼 관리자 (서비스 Admin) (2022.06 ~):</strong>
            <ul>
              <li><strong>기술:</strong> JSP</li>
              <li><strong>설명:</strong> 각 서비스 운영을 위한 통계, 관리 기능 지원 및 유지보수 (로테크 서비스의 컨텐츠 및 서식 관리 등)</li>
            </ul>
          </li>
          </div>
          <div className='inner-project'>
          <li><strong>L Edge 관련 기능:</strong>
            <ul>
              <li>고객관리, 연결요청, 정보서비스알림 등의 기능 개발 진행</li>
            </ul>
          </li>
        </div>
        </ul>
        </div>
        <div className='project'>
          <h3>WEHAGO 데이터유통포털 NIA 콘테스트 대응 (2021.08)</h3>
          <ul>
            <li><strong>기술:</strong> React.js, Java Spring, PostgreSQL</li>
            <li><strong>역할:</strong> 경진대회 팀 관리 페이지 UI/API 개발</li>
          </ul>
        </div>
        
        <div className='project'>
        <h3>전자연구노트 (ELN) 서비스 개발 (2020.06 - 2021.02)</h3>
        <ul>
          <li><strong>기술:</strong> React.js, Java Spring, PostgreSQL, ElasticSearch</li>
          <li><strong>설명:</strong> 대학원/연구소 연구노트 웹 에디터, PDF 출력 및 시점인증 기능 지원</li>
          <li><strong>성과:</strong> sunEditor, html2canvas/jsPDF 활용, PDF 시점인증 및 데이터 마이그레이션 기능 개발</li>
        </ul>
        </div>
      
      <div className='project'> 
        <h3>부산 BIPA 채용연계형 교육 프로젝트 멘토링 (2023.07 - 2023.09)</h3>
        <ul>
          <li><strong>역할:</strong> 프로젝트 기획, PM, 주차별 멘토링 및 프로젝트 검수 대응</li>
          <li><a href="https://flying-settee-718.notion.site/13a48f98630f451ba8964ca7717740a5?pvs=4" target='_blank' rel="noopener noreferrer">자세한 내용 보기</a></li>
        </ul>
        </div>
        </div>
      </div>

      <hr />
      <div className='row' id="betball">
        <div className='row-left'>
          <h3>[제작중] GIECL</h3>
          <p></p>
        </div>
        <div className='row-right'>
        <p><a href="https://gaetaeng.github.io/giec-homepage/" target='_blank' rel="noopener noreferrer">GIECL 이동</a></p>
        </div>
      </div>
      
      <hr />
      <div className='row' id="knights-rest">
        <div className='row-left'>
          <h3>[제작중] Knights-Rest / 방치형게임</h3>
          <p></p>
        </div>
        <div className='row-right'>
          
          <p><a href="https://gaetaeng.github.io/Knight-s-Rest" target='_blank' rel="noopener noreferrer">Knights-Rest 이동</a></p>
        </div>
      </div>

      
      <hr />
      <div className='row' id="kordle-helper">
        <div className='row-left'>
          <h3>KORDLE Helper / 꼬들, 아나그램</h3>
          <p></p>
        </div>
        <div className='row-right'>
        <p><a href="https://gaetaeng.github.io/kordle-helper/" target='_blank' rel="noopener noreferrer">KORDLE Helper 이동</a></p>
        </div>
      </div>
      <hr />
      <div className='row' id="betball">
        <div className='row-left'>
          <h3>[제작중] BetBall / 핀볼 내기사이트</h3>
          <p></p>
        </div>
        <div className='row-right'>
        <p><a href="https://gaetaeng.github.io/BetBall/" target='_blank' rel="noopener noreferrer">BetBall 이동</a></p>
        </div>
      </div>

      <p><strong>Contact :</strong> <a href="mailto:nuckly60@gmail.com">nuckly60@gmail.com</a></p>
    </div>
  );
}

export default Resume;
