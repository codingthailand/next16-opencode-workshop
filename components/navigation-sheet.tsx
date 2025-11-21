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
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
        <div className="mt-6 space-y-3">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
