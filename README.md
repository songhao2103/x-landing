# XFuture Landing Page

Landing page cho XFuture - Nền tảng chuyển đổi số và AI

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Cấu trúc Project

```
xfuture/
├── app/
│   ├── layout.tsx          # Root layout với metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer với links
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero banner
│   │   ├── PlatformOverview.tsx      # Nền tảng & dịch vụ
│   │   ├── ProductDetails.tsx        # Chi tiết sản phẩm
│   │   ├── AchievementsSection.tsx   # Thành quả
│   │   ├── IndustriesSection.tsx     # Lĩnh vực
│   │   └── ClientsSection.tsx        # Khách hàng & đối tác
│   └── ui/
│       ├── Button.tsx      # Button component với variants
│       ├── Card.tsx        # Card component
│       └── Logo.tsx        # Logo component
├── lib/
│   └── locales/
│       └── vi.ts           # Vietnamese translations
└── tailwind.config.ts      # Tailwind configuration
```

## Cài đặt

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

- ✅ **Pixel-perfect implementation** - Match 100% với UI design
- ✅ **Fully responsive** - Mobile-first design
- ✅ **TypeScript strict mode** - Type-safe code
- ✅ **Component-based architecture** - Reusable và maintainable
- ✅ **Internationalization ready** - Tách biệt content và code
- ✅ **Accessible** - Semantic HTML và proper ARIA labels
- ✅ **Performance optimized** - Next.js App Router với Server Components
- ✅ **Modern CSS** - Tailwind CSS với custom design system

## Tailwind Configuration

Custom colors và design tokens:

- **Primary**: Blue shades (#1E40AF)
- **Secondary**: Purple shades (#A855F7)
- **Navy**: Dark blue backgrounds
- **Cyan**: Accent colors

## Localization

All text content được quản lý trong `lib/locales/vi.ts`. Để thêm ngôn ngữ mới:

1. Tạo file mới trong `lib/locales/` (ví dụ: `en.ts`)
2. Copy structure từ `vi.ts`
3. Translate content
4. Import và sử dụng trong components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 XFuture. All rights reserved.

