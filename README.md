# Portfolio — Software Developer

컴퓨터공학과 3학년 SW 개발자 지원자의 개인 포트폴리오 웹사이트입니다.
경험과 직무 역량을 한 페이지에 담았습니다.

🔗 **Live**: https://myprofile-nine-ruby.vercel.app

<br />

## ✦ Overview

| 섹션 | 내용 |
| --- | --- |
| **Hero** | 한 줄 소개, 전공·관심 분야, 프로필 사진 |
| **01 About** | 개발 가치관, 주요 수치 (프로젝트 수, 학점 등) |
| **02 Skills** | Languages · Backend · Frontend · Data & Infra · Collaboration |
| **03 Projects** | 대표 프로젝트, 역할과 성과 |
| **04 Journey** | 학력, 인턴·동아리 경력, 수상, 자격증 |
| **05 Contact** | 이메일, GitHub, 블로그 |

<br />

## ✦ Features

- **다크 럭셔리 테마**: 차콜 배경에 샴페인 골드 포인트, 세리프 타이포그래피
- **스크롤 애니메이션**: `IntersectionObserver`로 섹션이 화면에 들어올 때 서서히 나타남
- **카운트업 수치**: About 섹션의 숫자가 0부터 올라가는 애니메이션
- **현재 섹션 표시**: 스크롤 위치에 맞춰 내비게이션 메뉴에 표시
- **반응형 레이아웃**: 데스크톱, 태블릿, 모바일 대응 (모바일에서는 햄버거 메뉴)
- **사진 대체 표시**: 프로필 사진이 없으면 자리 표시가 자동으로 나타남
- **접근성**: `prefers-reduced-motion` 설정을 켠 사용자에게는 애니메이션을 끔

<br />

## ✦ Tech Stack

- **HTML5 / CSS3**: CSS Custom Properties, Grid, Flexbox
- **Vanilla JavaScript**: 프레임워크 없이 구현
- **Fonts**: Cormorant Garamond, Noto Serif KR, Pretendard, JetBrains Mono
- **Deploy**: Vercel (GitHub 연동 자동 배포)

<br />

## ✦ Project Structure

```
Myprofile/
├── index.html        # 페이지 구조와 내용
├── css/
│   └── style.css     # 테마, 레이아웃, 반응형 스타일
├── js/
│   └── main.js       # 스크롤 애니메이션, 내비게이션, 카운트업
└── images/
    └── profile.jpg   # 프로필 사진 (4:5 비율 권장)
```

<br />

## ✦ Getting Started

빌드 과정이 필요 없는 정적 사이트입니다.

```bash
# 저장소 받기
git clone https://github.com/Susucorn/Myprofile.git

# index.html 을 브라우저로 열거나, 로컬 서버로 실행
npx serve .
```

<br />

## ✦ Customize

- **프로필 사진**: `images/profile.jpg`로 저장합니다.
  배포 서버는 대소문자를 구분하므로 파일 이름은 소문자로 맞춰 주세요.
- **내용 수정**: `index.html`에서 이름, 프로젝트, 경력, 연락처를 바꿉니다.
- **색상 변경**: `css/style.css` 맨 위 `:root`에 있는 `--gold`, `--bg` 등의 값을 바꿉니다.

<br />

## ✦ Deploy

GitHub `main` 브랜치에 push하면 Vercel이 자동으로 다시 배포합니다.

---

© 2026 Park Suyeon. All rights reserved.
