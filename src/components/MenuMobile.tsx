"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";
import ExternalLinks from "@/components/ExternalLinks";
import { navLinks } from "@/components/MenuLg";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

type TEntry = {
  name: string;
  link: string;
  children?: TEntry[];
};

function containsPath(entry: TEntry, pathname: string): boolean {
  return (
    entry.link === pathname ||
    !!entry.children?.some((child) => containsPath(child, pathname))
  );
}

function NavEntry({ entry, level }: { entry: TEntry; level: number }) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const isActive = pathname === entry.link;
  const link = (
    <Link href={entry.link} onClick={() => setOpenMobile(false)} />
  );
  const label = <span>{entry.name}</span>;

  const Item = level === 0 ? SidebarMenuItem : SidebarMenuSubItem;
  const button =
    level === 0 ? (
      <SidebarMenuButton render={link} isActive={isActive}>
        {label}
      </SidebarMenuButton>
    ) : (
      <SidebarMenuSubButton render={link} isActive={isActive}>
        {label}
      </SidebarMenuSubButton>
    );

  if (!entry.children) {
    return <Item>{button}</Item>;
  }

  return (
    <Collapsible
      defaultOpen={entry.children.some((child) =>
        containsPath(child, pathname)
      )}
      render={<Item />}
    >
      {button}
      <CollapsibleTrigger
        render={<SidebarMenuAction />}
        className="[&[data-panel-open]>svg]:rotate-90"
      >
        <ChevronDoubleRightIcon className="transition-transform duration-200" />
        <span className="sr-only">Toggle {entry.name}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {entry.children.map((child) => (
            <NavEntry key={child.name} entry={child} level={level + 1} />
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
}

function MenuMobileContent() {
  const { setOpenMobile } = useSidebar();

  return (
    <>
      <SidebarHeader className="flex-row items-center gap-3 pt-5">
        <Link
          href="/"
          onClick={() => setOpenMobile(false)}
          className="shrink-0 rounded-full border-4 border-sidebar-border bg-sidebar-primary duration-150 hover:scale-105 hover:bg-sidebar-accent"
        >
          <Image
            alt="turtle"
            width="64"
            height="64"
            src="/images/misc/turtlepan.png"
          />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-lg">Welcome!</span>
          <span className="text-sm text-sidebar-foreground/80">
            This is melonbred.dev.
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpenMobile(false)}
          className="self-start"
        >
          <XMarkIcon />
          <span className="sr-only">Close menu</span>
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-4 py-2">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Bars3Icon />
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((entry) => (
                <NavEntry key={entry.name} entry={entry} level={0} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="items-center pb-6">
        <ExternalLinks />
      </SidebarFooter>
    </>
  );
}

/**
 * Off-canvas navigation for viewports below the `lg` breakpoint, built on the
 * shadcn/ui Sidebar. At `lg` and up the trigger is hidden and the persistent
 * MenuLg aside takes over.
 */
export default function MenuMobile({
  className,
  triggerClassName,
}: {
  className?: string;
  triggerClassName?: string;
}) {
  return (
    <SidebarProvider className={className}>
      <SidebarTrigger className={cn("lg:hidden", triggerClassName)}>
        <Bars3Icon />
        <span>Menu</span>
      </SidebarTrigger>
      <Sidebar side="right">
        <MenuMobileContent />
      </Sidebar>
    </SidebarProvider>
  );
}
