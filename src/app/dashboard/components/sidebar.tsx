import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";
import { TbCards, TbLogout2, TbMoneybag, TbUniverse } from "react-icons/tb";

import { IoSettingsOutline } from "react-icons/io5";
import {
  Badge,
  Bell,
  Boxes,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="hidden border-r  lg:block">
      <div className="flex max-h-screen h-full  flex-col gap-2 fixed w-72">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <div className="flex  items-start justify-center ">
              <p className="text-xl font-extrabold ">RD Startup</p>
            </div>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div className="flex-1 ">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-6  w-fit ">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl bg-muted w-full  px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/dashboard/bnsystem"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Boxes className="h-4 w-4" />
              Website Builder
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="/dashboard/nft"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Image Generation{" "}
            </Link>
            <Link
              href="/dashboard/income"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Video Generation
            </Link>
            <Link
              href="/dashboard/nft"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Content1 Generation{" "}
            </Link>
            <Link
              href="/dashboard/directteam"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Billing
            </Link>
            <Link
              href="/dashboard/directteam"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Setting
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-4 w-fit">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
