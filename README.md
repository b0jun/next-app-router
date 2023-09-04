# Pages and Layouts

## Pages

-   페이지는 기본적으로 서버 구성 요소 이지만 클라이언트 구성 요소 로 설정할 수 있음 ('use client')

## Layout

### Root Layout

```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

-   최상위 레이아웃 (필수)
-   html, body 태그 포함
-   페이지 라우터에서 \_app.js 및 \_document.js 파일을 대체

## Templates

# Linking and Navigating

### 'id'로 스크롤

'#'해시를 사용해 라우팅 시 특정 위치로 스크롤 할 수 있음

```tsx
<Link href="/banana#target">Settings</Link>
```

```tsx
// banana page
<section id="target">Target</section>
```

# Route Group

-   폴더 이름을 괄호로 묶어서 만듦 `(folderName)`
-   폴더를 경로 그룹으로 표시해 page 폴더를 URL에 포함되지않도록 할 수 있음
-   다중 Root Layout 만들때 사용 (ex. 권한 별 페이지 레이아웃)

# Dynamic Routes

-   폴더 이름을 대괄호로 묶어서 만듦 `[folderName]`

## 정적 매개 변수 생성 `(generateStaticParams)`

```tsx
export async function generateStaticParams() {
	const posts = await fetch('https://.../posts').then((res) => res.json());

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
```

# 로딩 UI와 스트리밍
