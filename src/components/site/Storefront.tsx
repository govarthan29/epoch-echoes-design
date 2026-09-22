import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Menu, Minus, Plus, Search, ShoppingBag, UserRound } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products, type collectibles } from "@/lib/catalog";

const nav = [
  ["Home", "/"], ["Explore Patent Models", "/collectibles/telegraph"], ["Shop", "/shop"],
  ["Collections", "/build-your-collection"], ["Build Your Collection", "/build-your-collection"],
  ["Wholesale", "/wholesale"], ["About", "/about"],
] as const;

export function SiteHeader() {
  return <>
    <div className="bg-primary py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">Complimentary shipping on orders over $100 · Curated in the United States</div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
          <SheetContent side="left" className="w-[88%] bg-background p-7"><SheetHeader><SheetTitle className="font-display text-3xl">The Patent Archive</SheetTitle><SheetDescription>Historic objects. Enduring ideas.</SheetDescription></SheetHeader><nav className="mt-10 flex flex-col">{nav.map(([label,to]) => <Link key={label} to={to} className="border-b border-border py-4 font-display text-2xl">{label}</Link>)}</nav></SheetContent>
        </Sheet>
        <Link to="/" className="min-w-fit text-center leading-none"><span className="block font-display text-[1.7rem] font-semibold">The Patent Archive</span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.28em] text-muted-foreground">Objects · Stories · Editions</span></Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">{nav.map(([label,to]) => <Link key={label} to={to} activeProps={{className:"text-accent"}} className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-accent">{label}</Link>)}</nav>
        <div className="flex items-center gap-1"><Button variant="ghost" size="icon" aria-label="Search"><Search /></Button><Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Account"><UserRound /></Button><CartSheet /></div>
      </div>
    </header>
  </>;
}

export function CartSheet() {
  return <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="relative" aria-label="View cart"><ShoppingBag/><span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] text-accent-foreground">2</span></Button></SheetTrigger>
    <SheetContent className="flex w-full flex-col sm:max-w-md"><SheetHeader className="border-b border-border pb-5"><SheetTitle className="font-display text-3xl">Your collection</SheetTitle><SheetDescription>2 items reserved in this visual preview</SheetDescription></SheetHeader>
      <div className="flex-1 py-6">{products.slice(0,2).map(p=><div key={p.name} className="flex gap-4 border-b border-border py-4"><img src={p.image} alt="" className="size-24 object-cover" style={{objectPosition:p.position}}/><div className="flex-1"><p className="fine-label text-muted-foreground">{p.collection}</p><h3 className="mt-1 text-xl">{p.name}</h3><div className="mt-3 flex items-center justify-between text-sm"><span>Qty 1</span><strong>{p.price}</strong></div></div></div>)}</div>
      <div className="border-t border-border pt-5"><div className="mb-5 flex justify-between"><span>Subtotal</span><strong>$70.00</strong></div><Button variant="museum" size="lg" className="w-full">Review cart <ArrowRight/></Button><p className="mt-3 text-center text-xs text-muted-foreground">Checkout is disabled in this design preview.</p></div>
    </SheetContent></Sheet>;
}

export function SiteFooter() { return <footer className="bg-primary text-primary-foreground"><div className="section-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><h2 className="text-4xl">The Patent Archive</h2><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/65">Celebrating human ingenuity through historically inspired objects, stories, and finely made editions.</p></div>{[["Discover","Explore Patent Models","Historical Stories","About","Contact"],["Shop","All Products","Collector Sets","Build Your Collection","Wholesale"],["Service","FAQ","Shipping","Returns","Privacy","Terms"]].map(([h,...links])=><div key={h}><h3 className="fine-label text-primary-foreground/45">{h}</h3><ul className="mt-5 space-y-3 text-sm">{links.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div><div className="border-t border-primary-foreground/15 py-5"><div className="section-shell flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.12em] text-primary-foreground/45 sm:flex-row"><span>© 2026 The Patent Archive</span><span>Instagram · Pinterest · Facebook</span></div></div></footer>; }

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: ReactNode }) { return <div className="mb-9 flex flex-col justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end"><div>{eyebrow&&<p className="fine-label mb-3 text-accent">{eyebrow}</p>}<h2 className="max-w-3xl text-4xl font-medium leading-[1.05] sm:text-5xl">{title}</h2>{copy&&<p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{copy}</p>}</div>{action}</div>; }

export function ProductCard({ product }: { product: (typeof products)[number] }) { return <article className="group"><Link to="/product/patent-tee" className="block overflow-hidden bg-gallery"><img loading="lazy" width="1408" height="1008" src={product.image} alt={product.name} style={{objectPosition:product.position}} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"/></Link><div className="pt-4"><p className="fine-label text-muted-foreground">{product.collection}</p><div className="mt-2 flex items-start justify-between gap-3"><Link to="/product/patent-tee" className="font-display text-xl leading-tight hover:text-accent">{product.name}</Link><span className="text-sm font-semibold">{product.price}</span></div><Button variant="museumOutline" className="mt-4 w-full">Quick add <Plus/></Button></div></article>; }

export function CollectibleCard({ item, selected, onToggle }: { item:(typeof collectibles)[number]; selected?:boolean; onToggle?:()=>void }) { const content=<><div className="relative overflow-hidden bg-gallery"><img loading="lazy" width="1408" height="1008" src={item.image} alt={item.name} style={{objectPosition:item.position}} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"/>{selected&&<span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check/></span>}</div><div className="border-x border-b border-border bg-card p-5"><p className="fine-label text-accent">{item.category} · {item.year}</p><h3 className="mt-2 text-2xl leading-tight">{item.name}</h3><p className="mt-1 text-sm text-muted-foreground">{item.inventor}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em]">{onToggle ? (selected?"Selected":"Select Patent Model") : "Discover the story"}<ArrowRight className="size-3"/></span></div></>;
  return onToggle?<button onClick={onToggle} className="group w-full text-left">{content}</button>:<Link to="/collectibles/telegraph" className="group block">{content}</Link>;
}

export function PageIntro({ eyebrow, title, copy }: {eyebrow:string; title:string; copy:string}) { return <section className="border-b border-border bg-parchment"><div className="section-shell py-16 md:py-24"><p className="fine-label text-accent">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.95] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{copy}</p></div></section>; }

export function QuantityControl() { const [quantity,setQuantity]=useState(1); return <div className="flex h-12 w-36 items-center justify-between border border-border"><Button variant="ghost" size="icon" onClick={()=>setQuantity(Math.max(1,quantity-1))} aria-label="Decrease quantity"><Minus/></Button><span className="text-sm font-semibold">{quantity}</span><Button variant="ghost" size="icon" onClick={()=>setQuantity(quantity+1)} aria-label="Increase quantity"><Plus/></Button></div>; }

export function Newsletter() { return <section className="border-y border-border bg-parchment"><div className="section-shell flex flex-col items-center py-16 text-center"><p className="fine-label text-accent">From the archive</p><h2 className="mt-3 text-4xl sm:text-5xl">Stories of Innovation, Delivered</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">New discoveries, remarkable inventors, and thoughtfully made editions—sent occasionally.</p><form className="mt-7 flex w-full max-w-xl flex-col gap-2 sm:flex-row" onSubmit={e=>e.preventDefault()}><Input type="email" placeholder="Email address" className="h-12 rounded-sm bg-background px-4"/><Button variant="museum" size="lg">Subscribe</Button></form></div></section>; }

export function FilterRow({label, children}:{label:string;children?:ReactNode}) { return <div className="border-b border-border py-4"><div className="flex items-center justify-between"><span className="text-sm font-semibold">{label}</span><ChevronDown className="size-4"/></div>{children}</div>; }