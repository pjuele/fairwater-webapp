'use client';
import { Separator } from "@radix-ui/react-separator";
import { FullLogo } from "./logo-full";

export function AppHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 border-b-2 border-black">
            <div className="max-w-40 p-3 ml-0 mr-auto">
                <FullLogo />
            </div>
        </div>
    );
}