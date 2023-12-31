/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/o3jePRGqh5K
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { JSX, SVGProps } from "react"

export function Page() {
  return (
    <div className="bg-[#1e1e2e] text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex space-x-4">
          <HomeIcon className="h-6 w-6 text-white" />
          <nav className="flex space-x-4">
            <Link className="text-white hover:text-red-300" href="#">
              Collections
            </Link>
            <Link className="text-white hover:text-red-300" href="#">
              Trade
            </Link>
            <Link className="text-white hover:text-red-300" href="#">
              Incriptions
            </Link>
            <Link className="text-white hover:text-red-300" href="#">
              Rewards
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Input placeholder="Search NFTs" />
          <Button className="bg-red-600 hover:bg-red-700">CONNECT WALLET</Button>
        </div>
      </header>
      <section
        className="relative flex-grow"
        style={{
          backgroundImage: "url(/cyberpunk-background.svg?height=1080&width=1920)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center p-4">
          <ChevronLeftIcon className="h-8 w-8 text-white" />
          <div className="text-center">
            <h2 className="text-6xl font-bold text-red-500">{`<1K`}</h2>
            <p className="text-xl mt-2">OP Stack Ethereum Secured Inscriptions</p>
            <p className="text-sm mt-1">
              Be early to OP Stack Inscriptions. Trade the first 1k, 10k and 100k ever made.
            </p>
            <Button className="mt-4 bg-red-500 hover:bg-red-600">TRADE Optimism INSCRIPTIONS</Button>
          </div>
          <ChevronRightIcon className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
          <span className="h-2 w-2 rounded-full bg-white opacity-50" />
          <span className="h-2 w-2 rounded-full bg-white opacity-50" />
          <span className="h-2 w-2 rounded-full bg-white" />
        </div>
      </section>
      <main className="p-4">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold">The Leading NFT Exchange Built on the OP Stack</h1>
          <p className="text-sm text-red-400">FASTEST DATA · DEEPEST LIQUIDITY · FUN REWARDS</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button variant="ghost">TRENDING</Button>
            <Button variant="ghost">NEW MINTS</Button>
            <Button variant="ghost">1h</Button>
            <Button variant="ghost">24h</Button>
            <Button variant="ghost">7d</Button>
            <Button variant="ghost">ALL</Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost">CARDS</Button>
            <Button variant="ghost">TABLE</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12" />
              <TableHead>COLLECTION</TableHead>
              <TableHead>FLOOR</TableHead>
              <TableHead>SELL NOW</TableHead>
              <TableHead>24H VOLUME</TableHead>
              <TableHead>24H Δ</TableHead>
              <TableHead>SALES</TableHead>
              <TableHead>MARKET CAP</TableHead>
              <TableHead>TOTAL VOL</TableHead>
              <TableHead>LISTED</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mad Lads</TableCell>
              <TableCell>158.02</TableCell>
              <TableCell>142.89</TableCell>
              <TableCell>10,676</TableCell>
              <TableCell>-11.28%</TableCell>
              <TableCell>666</TableCell>
              <TableCell>1,490,216</TableCell>
              <TableCell>2,376,291</TableCell>
              <TableCell>5%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Tensorians</TableCell>
              <TableCell>91.12</TableCell>
              <TableCell>85.00</TableCell>
              <TableCell>8,298</TableCell>
              <TableCell>-15.34%</TableCell>
              <TableCell>886</TableCell>
              <TableCell>872,262</TableCell>
              <TableCell>639,313</TableCell>
              <TableCell>3%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Open Solmap</TableCell>
              <TableCell>0.39</TableCell>
              <TableCell>0.38</TableCell>
              <TableCell>5,510</TableCell>
              <TableCell>-2.54%</TableCell>
              <TableCell>13997</TableCell>
              <TableCell>90,298</TableCell>
              <TableCell>97,179</TableCell>
              <TableCell>11%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Solana Punks</TableCell>
              <TableCell>3.00</TableCell>
              <TableCell>2.94</TableCell>
              <TableCell>5,410</TableCell>
              <TableCell>20.33%</TableCell>
              <TableCell>1534</TableCell>
              <TableCell>29,600</TableCell>
              <TableCell>42,633</TableCell>
              <TableCell>13%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
      <footer className="text-center p-4 border-t border-gray-700">
        <p>Built on the OP Stack</p>
      </footer>
    </div>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
