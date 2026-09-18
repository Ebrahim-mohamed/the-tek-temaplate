
import Link from "next/link";

export function NavbarTab({
    name,
    to,
}: {
    name: string;
    to: string;
}) {
    return (
        <Link
            href={`/${to}`}
            className="text-white text-[1rem] font-medium"
        >
            {name}
        </Link>
    );
}
