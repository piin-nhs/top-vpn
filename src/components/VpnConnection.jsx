import React, { useState } from 'react';
import { Flag, ShieldAlert, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import AnimatedBorderTrail from './AnimatedBorderTrail';

function SlidingButton({ connected, onConnectedChange, className }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={connected}
      className={cn(
        "touch-manipulation relative flex h-11 w-full items-center justify-between overflow-hidden rounded-2xl bg-zinc-800 transition-colors cursor-pointer focus:outline-none",
        className
      )}
      onClick={() => onConnectedChange(!connected)}
    >
      <span className="flex h-11 w-8 items-center justify-center" aria-hidden>
        <span
          className={cn("size-2 rounded-full bg-rose-500 transition-opacity duration-300", {
            "opacity-0": connected,
            "opacity-100": !connected,
          })}
        />
      </span>
      <span
        className={cn(
          "absolute z-10 flex h-9 w-[110px] flex-col items-center justify-center rounded-[12px] bg-zinc-900 py-0.5 shadow-sm transition-[left] duration-300 ease-out border border-zinc-700/50",
          connected ? "left-1" : "left-[36px]"
        )}
      >
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
          {connected ? "Connected" : "Disconnected"}
        </span>
        <span
          className={cn("inline-flex items-center gap-0.5 text-[8px] font-bold uppercase tracking-wider", {
            "text-emerald-400": connected,
            "text-rose-400": !connected,
          })}
        >
          {connected ? <ShieldCheck size={8} aria-hidden /> : <ShieldAlert size={8} aria-hidden />}
          {connected ? "Secured" : "Unsecured"}
        </span>
      </span>
      <span className="flex h-11 w-8 items-center justify-center" aria-hidden>
        <span
          className={cn("size-2 rounded-full bg-emerald-500 transition-opacity duration-300", {
            "opacity-0": !connected,
            "opacity-100": connected,
          })}
        />
      </span>
    </button>
  );
}

export default function VpnConnection({
  className,
  serverName = "Zurich, CH",
  latency = "12 ms",
  downloadMbps = "980.5",
  defaultConnected = true,
}) {
  const [connected, setConnected] = useState(defaultConnected);

  return (
    <div className={cn("select-none", className)}>
      {/* Wrapped with Animata Border Trail */}
      <AnimatedBorderTrail
        containerClassName="flex size-52 flex-col bg-[#1A0F2E] border-0 shadow-xl"
        className="p-3.5 h-full w-full flex flex-col justify-between"
        trailSize={80}
        borderRadius={24}
        trailColor="linear-gradient(to right, #674188, #F97316, #C3ACD0)"
      >
        {/* Title / Server info */}
        <div className="flex items-center gap-2">
          <Flag className="size-4 fill-amber-400 text-amber-400" />
          <p className="truncate text-xs font-black uppercase tracking-wider text-amber-400">
            {serverName}
          </p>
        </div>

        {/* Speed & Latency Stats */}
        <div className="flex flex-col gap-1.5 my-auto">
          <div className="inline-flex max-w-fit items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-extrabold tracking-wider text-emerald-400">
              {latency}
            </span>
          </div>
          <p className="text-3xl font-extrabold tracking-tighter text-white font-headings">
            {downloadMbps}
            <span className="ml-1 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mbps</span>
          </p>
        </div>

        {/* Interactive toggle sliding button */}
        <div className="w-full">
          <SlidingButton connected={connected} onConnectedChange={setConnected} />
        </div>
      </AnimatedBorderTrail>
    </div>
  );
}
