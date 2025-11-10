// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold text-primary">EmoVibe</h1>
      <p className="mt-4 text-lg">AI custom companions & vetted human supporters. Weekly membership $99.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/customize" className="px-6 py-3 rounded-md bg-primary text-white">Create AI Role</Link>
        <Link href="/chat" className="px-6 py-3 rounded-md border border-slate-300">Enter Chat</Link>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="mt-4 text-left max-w-2xl mx-auto">
          <li>• AI customizable characters (country, gender, personality)</li>
          <li>• Human companion marketplace & order system</li>
          <li>• Anonymous treehole & mental health resources</li>
          <li>• Secure storage & strong RLS protections</li>
        </ul>
      </section>
    </section>
  );
}
