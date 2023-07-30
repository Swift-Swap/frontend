import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const lots = ["Any", "WAC", "PAC", "Tennis Courts", "Stadium"] as const
export type TLot = typeof lots[number]

export type Listing = {
    owner_id: string,
    id: string,
    price: number,
    lot: TLot,
    to: string,
    from: string,
    lotNum: number,
}

export const listings: Listing[] = [
    {
        lotNum: 40,
        owner_id: "1",
        id: "1",
        price: 5,
        lot: "WAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "2",
        price: 5,
        lot: "WAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "3",
        price: 5,
        lot: "WAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "4",
        price: 5,
        lot: "WAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "5",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "6",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "7",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "8",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "9",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "10",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "11",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "12",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "13",
        price: 5,
        lot: "PAC",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "14",
        price: 5,
        lot: "Tennis Courts",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "15",
        price: 5,
        lot: "Tennis Courts",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "16",
        price: 5,
        lot: "Tennis Courts",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "17",
        price: 5,
        lot: "Tennis Courts",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "18",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "19",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "20",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "210",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "21",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "22",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "23",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "24",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "25",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
    {
        lotNum: 40,
        owner_id: "1",
        id: "26",
        price: 5,
        lot: "Stadium",
        to: new Date("Tue Oct 05 2023").toDateString(),
        from: new Date("Tue Oct 03 2023").toDateString(),
    },
]
