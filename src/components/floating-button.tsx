import Link from "next/link";

export default function FloatingButton() {
    return (
        <Link href="/buy">
            <div className="fixed z-50 bottom-4 right-4" >
                <div
                    className="cursor-pointer text-white bg-[#7800ff]/70 py-2 px-4 rounded-full flex gap-2 font-sans font-bold"
                >
                    Shop now
                </div>
            </div>
        </Link>
    );
}