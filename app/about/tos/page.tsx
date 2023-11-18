import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function TermsOfService() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className={title()}>Terms of Service</h1>
      <h2 className={subtitle()}>Acceptable use</h2>
      <p className="text-left">
        This site is not intended to be used by minors. Minors should seek
        parental consent before using this site. Parents should review the
        <Link href="/about/privacy">privacy policy</Link> before allowing their
        children to use this site.
      </p>
      <p className="text-left">
        You may not use this site for:
        <ul className="list-disc list-inside">
          <li>Betting or gambling</li>
          <li>Harrassing players</li>
          <li>Gaining an unfair advantage in game</li>
          <li>Breaking the law</li>
        </ul>
      </p>
      <h2 className={subtitle()}>Riot Sign On</h2>
      <p className="text-left">
        We only show stats for individual players if they have opted in by
        signing up through Riot Sign On (RSO). By signing up through Riot Sign
        On, you agree that stats relating to your account&apos;s gameplay
        performance may be accessible through our site.
      </p>
    </div>
  );
}
