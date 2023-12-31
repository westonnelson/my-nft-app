/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3mj2nftlPVM
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { SVGProps } from "react"


export default function Component() {
  return (
    <div className="bg-[#1a1a1a] text-white font-sans">
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <ArrowUpIcon className="text-red-700" />
          <Button className="text-red-700" variant="ghost">
            Collections
          </Button>
          <Button className="text-red-700" variant="ghost">
            Trade
          </Button>
          <Button className="text-red-700" variant="ghost">
            Inscriptions
          </Button>
          <Select>
            <SelectTrigger id="rewards">
              <SelectValue placeholder="Rewards" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-red-700">Connect Wallet</Button>
      </header>
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <ArrowLeftIcon className="text-gray-500" />
          <h1 className="text-6xl text-red-700 font-bold">OmniOptis</h1>
          <ArrowRightIcon className="text-gray-500" />
        </div>
        <div className="mb-6">
          <h2 className="text-xl mb-2">OmniOptis</h2>
          <p className="mb-4">Stake OmniOptis for up to 1.5X points boost & 20% passive points yield!</p>
          <Button className="bg-red-700">Trade OmniOptis</Button>
          <div className="flex space-x-2 text-gray-500">
            <LinkIcon className="text-gray-500" />
            <CopyIcon className="text-gray-500" />
            <TwitterIcon className="text-gray-500" />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl">The Leading NFT Exchange Built on the OP Stack</h3>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">24h VOL: 72,498</Badge>
              <Badge variant="secondary">MCAP: 910,243</Badge>
              <Badge variant="secondary">LISTED/SUPPLY: 258/10003</Badge>
            </div>
          </div>
          <div className="text-gray-700 text-sm">FASTEST DATA · DEEPEST LIQUIDITY · FUN REWARDS</div>
        </div>
        <div className="flex space-x-2 mb-6">
          <Button className="text-red-700" variant="ghost">
            Trending
          </Button>
          <Button className="text-red-700" variant="ghost">
            New Mints
          </Button>
          <Button className="text-red-700" variant="ghost">
            1h
          </Button>
          <Button className="text-red-700" variant="ghost">
            24h
          </Button>
          <Button className="text-red-700" variant="ghost">
            7d
          </Button>
          <Button className="text-red-500" variant="ghost">
            ...
          </Button>
        </div>
        <div className="flex space-x-4 mb-6">
          <Input placeholder="Filter by collection" />
          <Button className="text-red-500" variant="ghost">
            Filters
          </Button>
          <Button className="text-red-500" variant="ghost">
            Favorites
          </Button>
          <Button className="text-red-500" variant="ghost">
            Inventory
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Collection</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Sell Now</TableHead>
              <TableHead>24h Volume</TableHead>
              <TableHead>24h Δ</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Market Cap</TableHead>
              <TableHead>Total Vol</TableHead>
              <TableHead>Listed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Layer2 Llamas</TableCell>
              <TableCell>158.02</TableCell>
              <TableCell>142.95</TableCell>
              <TableCell>10,825</TableCell>
              <TableCell className="text-red-500">-11.28%</TableCell>
              <TableCell>67</TableCell>
              <TableCell>1,490,216</TableCell>
              <TableCell>2,376,291</TableCell>
              <TableCell>5%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OmniOptis</TableCell>
              <TableCell>95.09</TableCell>
              <TableCell>85.00</TableCell>
              <TableCell>8,093</TableCell>
              <TableCell className="text-red-500">-10.79%</TableCell>
              <TableCell>84</TableCell>
              <TableCell>910,243</TableCell>
              <TableCell>639,313</TableCell>
              <TableCell>3%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OP Stack Punks</TableCell>
              <TableCell>3.05</TableCell>
              <TableCell>3.02</TableCell>
              <TableCell>5,454</TableCell>
              <TableCell className="text-green-500">+21.95%</TableCell>
              <TableCell>1546</TableCell>
              <TableCell>30,000</TableCell>
              <TableCell>42,633</TableCell>
              <TableCell>13%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OAYC Stacked</TableCell>
              <TableCell>0.40</TableCell>
              <TableCell>0.39</TableCell>
              <TableCell>5,372</TableCell>
              <TableCell className="text-green-500">+4.00%</TableCell>
              <TableCell>13681</TableCell>
              <TableCell>92,675</TableCell>
              <TableCell>97,179</TableCell>
              <TableCell>11%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
      <footer className="bg-red-700 p-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">24h Volume:</span>
            <span className="text-white">1,290</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">ETH Price:</span>
            <span className="text-white">$2,298</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">OP Price:</span>
            <span className="text-white">$3.19</span>
          </div>
          <div className="text-sm text-gray-500">
            <SettingsIcon className="text-gray-500" />
            Settings
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
