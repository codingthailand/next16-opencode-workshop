This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where content has been compressed (code blocks are separated by ⋮---- delimiter), security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: typescript-guidelines.md, AGENTS.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
app/
  about/
    page.tsx
  course/
    [id]/
      loading.tsx
      page.tsx
    page.tsx
  user/
    loading.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    badge.tsx
    button.tsx
    navigation-menu.tsx
    sheet.tsx
    skeleton.tsx
    spinner.tsx
  AppCourseList.tsx
  AppCourseLoading.tsx
  AppUserList.tsx
  hero.tsx
  logo.tsx
  nav-menu.tsx
  navbar.tsx
  navigation-sheet.tsx
lib/
  types.ts
  utils.ts
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
services/
  course-service.ts
  user-service.ts
.gitignore
components.json
eslint.config.mjs
next.config.ts
opencode.json
package.json
postcss.config.mjs
README.md
tsconfig.json
```

# Files

## File: app/about/page.tsx
````typescript
export default function AboutPage()
````

## File: app/course/[id]/loading.tsx
````typescript
import { Spinner } from "@/components/ui/spinner";
⋮----
export default function Loading()
````

## File: app/course/[id]/page.tsx
````typescript
import { getCourseById } from "@/services/course-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
⋮----
interface CoursePageProps {
  params: Promise<{ id: string }>;
}
````

## File: app/course/page.tsx
````typescript
import AppCourseList from '@/components/AppCourseList';
import AppUserList from '@/components/AppUserList';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';
````

## File: app/user/loading.tsx
````typescript
export default function Loading()
````

## File: app/user/page.tsx
````typescript

````

## File: app/globals.css
````css
@theme inline {
⋮----
:root {
⋮----
.dark {
⋮----
@layer base {
⋮----
* {
body {
````

## File: app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
⋮----
import Navbar from "@/components/navbar";
⋮----
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
````

## File: app/page.tsx
````typescript
import Hero from "@/components/hero";
⋮----
export default function HomePage()
````

## File: components/ui/badge.tsx
````typescript
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
````

## File: components/ui/button.tsx
````typescript
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
````

## File: components/ui/navigation-menu.tsx
````typescript
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>)
⋮----
className=
````

## File: components/ui/sheet.tsx
````typescript
import { XIcon } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
function Sheet(
⋮----
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>)
⋮----
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>)
⋮----
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>)
⋮----
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
})
⋮----
className=
````

## File: components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils"
⋮----
className=
````

## File: components/ui/spinner.tsx
````typescript
import { Loader2Icon } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
function Spinner(
⋮----
className=
````

## File: components/AppCourseList.tsx
````typescript
import { Badge } from "@/components/ui/badge";
import { getCourses } from "@/services/course-service";
import Link from "next/link";
````

## File: components/AppCourseLoading.tsx
````typescript
import { Skeleton } from "@/components/ui/skeleton"
⋮----
export function SkeletonDemo()
````

## File: components/AppUserList.tsx
````typescript
import { Badge } from '@/components/ui/badge';
import { getUsers } from '@/services/user-service';
````

## File: components/hero.tsx
````typescript
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
⋮----
export default function Hero()
````

## File: components/logo.tsx
````typescript
export const Logo = () => (
  <svg
    id="logo-7"
    width="124"
    height="32"
    viewBox="0 0 124 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.87 10.07H39.87V22.2H36.87V10.07ZM41.06 17.62C41.06 14.62 42.9 12.83 45.74 12.83C48.58 12.83 50.42 14.62 50.42 17.62C50.42 20.62 48.62 22.42 45.74 22.42C42.86 22.42 41.06 20.67 41.06 17.62ZM47.41 17.62C47.41 15.97 46.76 15 45.74 15C44.72 15 44.08 16 44.08 17.62C44.08 19.24 44.71 20.22 45.74 20.22C46.77 20.22 47.41 19.3 47.41 17.63V17.62ZM51.55 22.79H54.43C54.5671 23.0945 54.7988 23.3466 55.0907 23.5088C55.3826 23.6709 55.7191 23.7345 56.05 23.69C57.19 23.69 57.79 23.07 57.79 22.17V20.49H57.73C57.491 21.0049 57.1031 21.4363 56.6165 21.7287C56.1299 22.021 55.5668 22.1608 55 22.13C52.81 22.13 51.36 20.46 51.36 17.59C51.36 14.72 52.74 12.91 55.04 12.91C55.6246 12.8871 56.2022 13.0434 56.6955 13.3579C57.1888 13.6725 57.5742 14.1303 57.8 14.67V14.67V13H60.8V22.1C60.8 24.29 58.87 25.65 56.02 25.65C53.37 25.65 51.72 24.46 51.55 22.8V22.79ZM57.8 17.61C57.8 16.15 57.13 15.23 56.07 15.23C55.01 15.23 54.36 16.14 54.36 17.61C54.36 19.08 55 19.91 56.07 19.91C57.14 19.91 57.8 19.1 57.8 17.62V17.61ZM61.93 17.61C61.93 14.61 63.77 12.82 66.61 12.82C69.45 12.82 71.3 14.61 71.3 17.61C71.3 20.61 69.5 22.41 66.61 22.41C63.72 22.41 61.93 20.67 61.93 17.62V17.61ZM68.28 17.61C68.28 15.96 67.63 14.99 66.61 14.99C65.59 14.99 65 16 65 17.63C65 19.26 65.63 20.23 66.65 20.23C67.67 20.23 68.28 19.3 68.28 17.63V17.61ZM72.44 10.82C72.4321 10.5171 72.5144 10.2187 72.6763 9.96261C72.8383 9.70651 73.0726 9.50427 73.3496 9.38151C73.6266 9.25875 73.9338 9.221 74.2323 9.27305C74.5308 9.32511 74.8071 9.46462 75.0262 9.67389C75.2454 9.88317 75.3974 10.1528 75.4631 10.4486C75.5288 10.7444 75.5052 11.053 75.3952 11.3354C75.2853 11.6177 75.094 11.8611 74.8456 12.0346C74.5973 12.2081 74.3029 12.304 74 12.31C73.7992 12.3238 73.5977 12.2959 73.4082 12.2281C73.2186 12.1603 73.0452 12.0541 72.8987 11.916C72.7522 11.778 72.6358 11.6111 72.5569 11.4259C72.4779 11.2408 72.4381 11.0413 72.44 10.84V10.82ZM72.44 13.02H75.44V22.2H72.44V13.02ZM86.33 17.61C86.33 20.61 85 22.32 82.72 22.32C82.1354 22.3575 81.5533 22.2146 81.0525 21.9106C80.5517 21.6065 80.1564 21.156 79.92 20.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454 14.0951 80.5332 13.6329 81.0306 13.3162C81.528 12.9995 82.1109 12.8437 82.7 12.87C85 12.91 86.37 14.63 86.37 17.63L86.33 17.61ZM83.33 17.61C83.33 16.15 82.66 15.22 81.61 15.22C80.56 15.22 79.89 16.16 79.88 17.61C79.87 19.06 80.56 19.99 81.61 19.99C82.66 19.99 83.33 19.08 83.33 17.63V17.61ZM91.48 12.81C93.97 12.81 95.48 13.99 95.55 15.88H92.82C92.82 15.23 92.28 14.82 91.45 14.82C90.62 14.82 90.25 15.14 90.25 15.61C90.25 16.08 90.58 16.23 91.25 16.37L93.17 16.76C95 17.15 95.78 17.89 95.78 19.28C95.78 21.18 94.05 22.4 91.5 22.4C88.95 22.4 87.28 21.18 87.15 19.31H90.04C90.13 19.99 90.67 20.39 91.55 20.39C92.43 20.39 92.83 20.1 92.83 19.62C92.83 19.14 92.55 19.04 91.83 18.89L90.1 18.52C88.31 18.15 87.37 17.2 87.37 15.8C87.39 14 89 12.83 91.48 12.83V12.81ZM105.79 22.18H102.9V20.47H102.84C102.681 21.0441 102.331 21.5466 101.847 21.8941C101.363 22.2415 100.775 22.413 100.18 22.38C99.7242 22.4059 99.2682 22.3337 98.8427 22.1682C98.4172 22.0027 98.0322 21.7479 97.7137 21.4208C97.3952 21.0938 97.1505 20.7021 96.9964 20.2724C96.8422 19.8427 96.7821 19.3849 96.82 18.93V13H99.82V18.24C99.82 19.33 100.38 19.91 101.31 19.91C101.528 19.9104 101.744 19.8643 101.943 19.7746C102.141 19.6849 102.319 19.5537 102.463 19.3899C102.606 19.226 102.714 19.0333 102.777 18.8247C102.84 18.616 102.859 18.3962 102.83 18.18V13H105.83L105.79 22.18ZM107.24 13H110.14V14.77H110.2C110.359 14.2035 110.702 13.7057 111.174 13.3547C111.646 13.0037 112.222 12.8191 112.81 12.83C113.409 12.7821 114.003 12.9612 114.476 13.3318C114.948 13.7024 115.264 14.2372 115.36 14.83H115.42C115.601 14.2309 115.977 13.7093 116.488 13.3472C116.998 12.9851 117.615 12.8031 118.24 12.83C118.648 12.8163 119.054 12.8886 119.432 13.0422C119.811 13.1957 120.152 13.4272 120.435 13.7214C120.718 14.0157 120.936 14.3662 121.075 14.7501C121.213 15.134 121.27 15.5429 121.24 15.95V22.2H118.24V16.75C118.24 15.75 117.79 15.29 116.95 15.29C116.763 15.2884 116.577 15.327 116.406 15.4032C116.235 15.4794 116.082 15.5914 115.958 15.7317C115.834 15.872 115.741 16.0372 115.686 16.2163C115.631 16.3955 115.616 16.5843 115.64 16.77V22.2H112.79V16.71C112.79 15.79 112.34 15.29 111.52 15.29C111.331 15.2901 111.143 15.3303 110.971 15.408C110.798 15.4858 110.643 15.5993 110.518 15.741C110.392 15.8827 110.298 16.0495 110.241 16.2304C110.185 16.4112 110.167 16.6019 110.19 16.79V22.2H107.19L107.24 13Z"
      className="fill-foreground"
    />
    <path
      d="M28.48 10.62C27.9711 9.45636 27.2976 8.37193 26.48 7.4C25.2715 5.92034 23.7633 4.71339 22.0547 3.8586C20.3461 3.00382 18.4758 2.52057 16.567 2.44066C14.6582 2.36075 12.7541 2.68599 10.98 3.39499C9.20597 4.10398 7.60217 5.18065 6.2742 6.55413C4.94622 7.9276 3.92417 9.56675 3.27532 11.3637C2.62647 13.1606 2.36552 15.0746 2.50966 16.9796C2.65381 18.8847 3.19976 20.7376 4.1116 22.4164C5.02344 24.0953 6.28049 25.562 7.80001 26.72C8.77501 27.4779 9.85236 28.094 11 28.55C12.609 29.2094 14.3311 29.549 16.07 29.55C19.6594 29.5421 23.0992 28.1113 25.6355 25.5713C28.1717 23.0313 29.5974 19.5894 29.6 16C29.6026 14.1485 29.2213 12.3166 28.48 10.62V10.62ZM16.06 5.18999C17.6216 5.18983 19.1643 5.53113 20.58 6.18999V6.18999C20.2348 6.33916 19.8718 6.44335 19.5 6.5C18.2766 6.67709 17.1433 7.24507 16.2692 8.11917C15.3951 8.99326 14.8271 10.1266 14.65 11.35C14.5723 12.0361 14.2602 12.6744 13.7665 13.1572C13.2728 13.64 12.6277 13.9376 11.94 14C10.7166 14.1771 9.58327 14.7451 8.70918 15.6192C7.83509 16.4933 7.2671 17.6266 7.09001 18.85C7.03005 19.5024 6.7517 20.1155 6.30001 20.59V20.59C5.52066 18.9433 5.17056 17.1261 5.28228 15.3077C5.394 13.4893 5.96391 11.7287 6.93898 10.1897C7.91404 8.65079 9.26258 7.38351 10.8591 6.50584C12.4556 5.62817 14.2482 5.16864 16.07 5.16999L16.06 5.18999ZM7.79001 23C7.91001 22.89 8.03001 22.79 8.15001 22.67C9.03966 21.8075 9.61072 20.6689 9.77001 19.44C9.83459 18.7492 10.143 18.104 10.64 17.62C11.1183 17.1222 11.762 16.8163 12.45 16.76C13.6734 16.5829 14.8067 16.0149 15.6808 15.1408C16.5549 14.2667 17.1229 13.1334 17.3 11.91C17.3433 11.1875 17.6533 10.5068 18.17 10C18.6601 9.51185 19.3099 9.2171 20 9.16999C21.1239 9.01536 22.1721 8.51571 23 7.74C23.9427 8.52207 24.7413 9.46289 25.36 10.52C25.322 10.5713 25.2784 10.6183 25.23 10.66C24.7527 11.1622 24.1098 11.4748 23.42 11.54C22.1953 11.714 21.0603 12.281 20.1856 13.1556C19.311 14.0303 18.744 15.1653 18.57 16.39C18.4995 17.0784 18.1932 17.7213 17.703 18.2097C17.2127 18.6982 16.5687 19.0021 15.88 19.07C14.653 19.2457 13.5155 19.8126 12.6363 20.6863C11.7572 21.5601 11.1833 22.6941 11 23.92C10.9462 24.4087 10.7783 24.878 10.51 25.29C9.484 24.6808 8.5651 23.9072 7.79001 23V23ZM16.06 26.86C15.0453 26.8611 14.0354 26.7197 13.06 26.44C13.3937 25.818 13.6106 25.1401 13.7 24.44C13.7701 23.7531 14.075 23.1114 14.5632 22.6232C15.0514 22.135 15.6931 21.8301 16.38 21.76C17.6052 21.5849 18.7408 21.0178 19.6169 20.1435C20.4929 19.2693 21.0624 18.1348 21.24 16.91C21.3101 16.2231 21.615 15.5814 22.1032 15.0932C22.5914 14.605 23.2331 14.3001 23.92 14.23C24.842 14.1101 25.7208 13.7668 26.48 13.23C26.9016 14.8279 26.9515 16.5011 26.626 18.1213C26.3005 19.7415 25.6081 21.2657 24.6021 22.5768C23.5961 23.8878 22.3032 24.9511 20.8224 25.6849C19.3417 26.4187 17.7126 26.8036 16.06 26.81V26.86Z"
      className="fill-foreground"
    />
  </svg>
);
⋮----
xmlns="http://www.w3.org/2000/svg"
````

## File: components/nav-menu.tsx
````typescript
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";
⋮----
export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/user">User</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/course">Course</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
⋮----
<NavigationMenuLink asChild className=
````

## File: components/navbar.tsx
````typescript
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
⋮----
{/* Desktop Menu */}
⋮----
{/* Mobile Menu */}
````

## File: components/navigation-sheet.tsx
````typescript
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
⋮----
export const NavigationSheet = () =>
````

## File: lib/types.ts
````typescript
export interface Course {
  id: string;
  title: string;
  price: number;
  description?: string;
  duration?: string;
  instructor?: string;
}
⋮----
export interface User {
  id: string;
  name: string;
  bio: string;
}
````

## File: lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
⋮----
export function cn(...inputs: ClassValue[])
````

## File: public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: services/course-service.ts
````typescript
import { Course } from "@/lib/types";
⋮----
export async function getCourses(): Promise<Course[]>
⋮----
export async function getCourseById(id: string): Promise<Course>
````

## File: services/user-service.ts
````typescript
import { User } from "@/lib/types";
import { cacheLife } from "next/cache";
⋮----
export async function getUsers(): Promise<User[]>
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
````

## File: eslint.config.mjs
````
const eslintConfig = defineConfig([
⋮----
// Override default ignores of eslint-config-next.
globalIgnores([
// Default ignores of eslint-config-next:
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";
⋮----
/* config options here */
````

## File: opencode.json
````json
{
  "$schema": "https://opencode.ai/config.json",
  "instructions": ["typescript-guidelines.md"],
  "permission": {
    "bash": {
      "git push": "ask",
      "git add": "ask",
      "git commit": "ask"
    },
    "webfetch": "ask"
  },
  "mcp": {
    "next-devtools-mcp": {
      "type": "local",
      "command": ["npx", "-y", "next-devtools-mcp@latest"],
      "enabled": true
    }
  },
}
````

## File: package.json
````json
{
  "name": "next16-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-visually-hidden": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.553.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "19.2.6",
    "@types/react-dom": "19.2.3",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "prettier": "3.6.2",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  },
  "overrides": {
    "@types/react": "19.2.6",
    "@types/react-dom": "19.2.3"
  }
}
````

## File: postcss.config.mjs
````

````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````
