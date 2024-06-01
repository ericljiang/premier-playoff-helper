import { title } from "@/components/primitives";
import { Link } from "@nextui-org/react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className={title()}>Privacy Policy</h1>
      <p className="text-left">
        We don&apos;t collect or share personal information about you.
        Derivative data about user traffic is anonymously collected through
        Vercel Web Analytics. Please read their privacy policy to learn what
        information is collected:{" "}
        <Link
          isExternal
          href="https://vercel.com/docs/analytics/privacy-policy"
          title="Vercel Web Analytics privacy policy"
        >
          https://vercel.com/docs/analytics/privacy-policy
        </Link>
      </p>
      <p className="text-left">
        This page was last updated on November 17, 2023. If you have questions
        about this policy, please{" "}
        <Link
          isExternal
          href="https://github.com/ericljiang/premier-playoff-helper/issues/new"
          title="Issues"
        >
          create an issue
        </Link>
        {" "}on GitHub.
      </p>
    </div>
  );
}
