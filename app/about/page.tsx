import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className={title()}>About</h1>
      <Link href="/about/tos">Terms of Service</Link>
      <Link href="/about/privacy">Privacy Policy</Link>
    </div>
  );
}
