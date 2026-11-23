"use client";

/**
 * Port of the shadcn/ui Sidebar (Base UI variant):
 * https://ui.shadcn.com/docs/components/base/sidebar
 *
 * Differences from upstream:
 * - Translated from Tailwind v4 to Tailwind v3 syntax (this project uses 3.3).
 * - Mobile-only: below the `lg` breakpoint the Sidebar renders as an
 *   off-canvas Sheet; at `lg` and up it renders nothing, because the
 *   persistent desktop aside (MenuLg) already covers that layout. The
 *   desktop-only pieces (cookie persistence, icon-collapse mode, rail,
 *   inset, tooltips) are omitted.
 * - Colors come from the `sidebar-*` tokens in globals.css, which are mapped
 *   to the site's slate/green/emerald palette.
 */

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const SIDEBAR_WIDTH_MOBILE = "20rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();

  // Internal state, overridable via `open` / `onOpenChange` for control from
  // outside the component.
  const [_openMobile, _setOpenMobile] = React.useState(false);
  const openMobile = openProp ?? _openMobile;
  const setOpenMobile = React.useCallback(
    (value: boolean) => {
      if (setOpenProp) {
        setOpenProp(value);
      } else {
        _setOpenMobile(value);
      }
    },
    [setOpenProp]
  );

  const toggleSidebar = React.useCallback(() => {
    setOpenMobile(!openMobile);
  }, [openMobile, setOpenMobile]);

  // Close the sheet if the viewport grows past the mobile breakpoint, so it
  // doesn't reappear when the window shrinks again. Adjusting state during
  // render (rather than in an effect) avoids an extra render pass.
  if (!isMobile && _openMobile) _setOpenMobile(false);

  // Cmd/Ctrl + B toggles the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        isMobile &&
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile, toggleSidebar]);

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({ isMobile, openMobile, setOpenMobile, toggleSidebar }),
    [isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        className={cn("group/sidebar-wrapper", className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "right",
  title = "Menu",
  description = "Site navigation",
  className,
  children,
}: {
  side?: "left" | "right";
  /** Accessible title for the sheet (visually hidden). */
  title?: string;
  /** Accessible description for the sheet (visually hidden). */
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (!isMobile) return null;

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent
        data-sidebar="sidebar"
        data-slot="sidebar"
        data-mobile="true"
        showCloseButton={false}
        className={cn(
          // Width overrides use the same `data-[side=*]` variants as the
          // Sheet defaults so tailwind-merge replaces them.
          "max-w-[calc(100vw-2rem)] gap-0 bg-sidebar p-0 text-sidebar-foreground data-[side=left]:w-[--sidebar-width] data-[side=right]:w-[--sidebar-width] sm:data-[side=left]:max-w-[--sidebar-width] sm:data-[side=right]:max-w-[--sidebar-width]",
          className
        )}
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
          } as React.CSSProperties
        }
        side={side}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="flex h-full w-full flex-col">{children}</div>
      </SheetContent>
    </Sheet>
  );
}

function SidebarTrigger({
  className,
  onClick,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar, openMobile } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      aria-expanded={openMobile}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {children ?? (
        <>
          <Bars3Icon />
          <span className="sr-only">Toggle Sidebar</span>
        </>
      )}
    </Button>
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-4 h-0.5 w-auto shrink-0 bg-sidebar-border", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        "relative flex w-full min-w-0 flex-col rounded-3xl border-4 border-sidebar-border bg-sidebar-primary p-2 text-sidebar-primary-foreground",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div"> & React.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex h-10 shrink-0 items-center gap-2 rounded-xl px-2 text-base font-medium text-sidebar-primary-foreground outline-none ring-sidebar-ring focus-visible:ring-2 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-group-label",
      sidebar: "group-label",
    },
  });
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-base", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full origin-left items-center gap-2 overflow-hidden rounded-xl p-2 text-left outline-none ring-sidebar-ring transition duration-150 hover:scale-105 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active]:bg-sidebar-active data-[active]:font-medium data-[active]:text-sidebar-active-foreground data-[active]:hover:scale-100 group-[:has([data-sidebar=menu-action])]/menu-item:pr-10 [&>span:last-child]:truncate [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0",
  {
    variants: {
      size: {
        default: "h-9 text-base",
        sm: "h-7 text-sm",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function SidebarMenuButton({
  render,
  isActive = false,
  size = "default",
  className,
  ...props
}: useRender.ComponentProps<"button"> &
  React.ComponentProps<"button"> & {
    isActive?: boolean;
  } & VariantProps<typeof sidebarMenuButtonVariants>) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(sidebarMenuButtonVariants({ size }), className),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      size,
      active: isActive,
    },
  });
}

function SidebarMenuAction({
  className,
  render,
  ...props
}: useRender.ComponentProps<"button"> & React.ComponentProps<"button">) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(
          // Matches the site's chevron toggle: small green square with an
          // emerald border.
          "absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-md border-2 border-sidebar-border bg-sidebar-primary p-0 text-black outline-none ring-sidebar-ring transition duration-150 after:absolute after:-inset-2 hover:scale-125 hover:bg-sidebar-accent focus-visible:ring-2 peer-data-[size=lg]/menu-button:top-3 peer-data-[size=sm]/menu-button:top-0.5 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-action",
      sidebar: "menu-action",
    },
  });
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "ml-4 mr-0 flex min-w-0 flex-col gap-1 border-l-2 border-sidebar-border py-1 pl-2.5",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  render,
  size = "md",
  isActive = false,
  className,
  ...props
}: useRender.ComponentProps<"a"> &
  React.ComponentProps<"a"> & {
    size?: "sm" | "md";
    isActive?: boolean;
  }) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "flex h-8 min-w-0 origin-left items-center gap-2 overflow-hidden rounded-xl px-2 text-sidebar-primary-foreground outline-none ring-sidebar-ring transition duration-150 hover:scale-105 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active]:bg-sidebar-active data-[size=md]:text-base data-[size=sm]:text-sm data-[active]:text-sidebar-active-foreground data-[active]:hover:scale-100 group-[:has([data-sidebar=menu-action])]/menu-item:pr-10 [&>span:last-child]:truncate [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-sub-button",
      sidebar: "menu-sub-button",
      size,
      active: isActive,
    },
  });
}

export {
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
};
