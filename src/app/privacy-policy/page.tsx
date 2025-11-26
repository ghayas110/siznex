const principles = [
  "We collect only what we need to deliver and improve our services.",
  "Your information stays protected through layered security controls.",
  "You decide how we contact you and when we stop using your data.",
  "We are transparent about vendors that help us run this product.",
];

const dataWeCollect = [
  {
    title: "Account & Contact",
    detail:
      "Name, email, phone, company, and role when you request a demo or engage our services.",
  },
  {
    title: "Usage & Device",
    detail:
      "Log data, page views, IP address, browser type, and device identifiers to keep the platform secure and reliable.",
  },
  {
    title: "Content You Provide",
    detail:
      "Information you upload or share with our team as part of project delivery, including files and form submissions.",
  },
  {
    title: "Cookies & Similar Tech",
    detail:
      "Session and preference cookies that keep you signed in, remember settings, and help us understand product performance.",
  },
];

const dataUse = [
  "Provide and maintain services, including onboarding, support, and feature delivery.",
  "Personalize content and recommendations based on your activity and preferences.",
  "Secure the platform, prevent fraud, and monitor for abuse or service disruptions.",
  "Analyze performance to improve reliability, user experience, and new capabilities.",
  "Send service updates, billing notices, and—with your consent—marketing communications you can opt out of anytime.",
];

const sharing = [
  "Infrastructure, analytics, and communication vendors that support our operations.",
  "Payment processors to manage billing securely (we never store full card details).",
  "Professional advisors (legal, compliance) when necessary to protect our business and users.",
  "Law enforcement or regulators when required to comply with applicable law or protect safety.",
];

const rights = [
  "Access and export the personal data we hold about you.",
  "Request corrections to inaccurate or incomplete information.",
  "Ask us to delete your data where applicable or restrict certain uses.",
  "Opt out of marketing communications at any time.",
  "Withdraw consent where processing is based on consent.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f17] to-black text-gray-100">
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,149,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(147,197,114,0.08),transparent_30%)]" />
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight text-white">
            Your data, handled with clarity, care, and control.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            This policy explains what we collect, why we collect it, how we use it,
            and the choices you have. It applies to visitors, clients, and anyone
            interacting with our services and website.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 bg-white/5">
              Last updated: Jan 1, 2025
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 bg-white/5">
              Effective globally
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-lg shadow-black/30"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-300" />
                <p className="text-sm sm:text-base text-gray-200">{item}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Information We Collect
              </h2>
              <p className="mt-2 text-gray-300">
                We collect data to operate, secure, and improve our services—never to sell it.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Collection
            </span>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {dataWeCollect.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-black/30 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">How We Use Data</h2>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Use
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-200">
              {dataUse.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Sharing & Disclosure</h2>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Sharing
              </span>
            </div>
            <p className="mt-3 text-gray-300">
              We do not sell your data. When we share, it is limited, purposeful, and safeguarded by contracts.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-200">
              {sharing.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Security & Retention</h2>
              <p className="mt-2 text-gray-300">
                We apply administrative, technical, and physical safeguards to protect your data.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Protection
            </span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">Security</h3>
              <p className="mt-2 text-sm text-gray-300">
                Access controls, encryption in transit, least-privilege practices, and continuous monitoring help keep data safe. If a breach occurs, we will notify affected users consistent with legal requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">Retention</h3>
              <p className="mt-2 text-sm text-gray-300">
                We retain personal data only as long as needed for the purposes outlined here, to meet legal obligations, or to resolve disputes. When no longer required, we delete or de-identify it.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Your Choices & Rights</h2>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Control
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-200">
              {rights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-300">
              To exercise these rights, contact us using the details below. We may need to verify your identity before fulfilling requests.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-8 shadow-xl shadow-black/30">
            <h3 className="text-xl font-semibold text-white">Cookies & Preferences</h3>
            <p className="mt-3 text-sm text-gray-300">
              You can manage cookies in your browser settings. Essential cookies keep the site working; analytics cookies help us improve. You may opt out of non-essential cookies where required.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span>Disable analytics cookies via your browser or in-app controls where available.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span>Use “Do Not Track” settings as supported by your browser.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <h2 className="text-2xl font-semibold text-white">International</h2>
            <p className="mt-3 text-sm text-gray-300">
              We may process data in countries different from where you reside. When we transfer data, we use appropriate safeguards such as contractual clauses to protect your information.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
            <h2 className="text-2xl font-semibold text-white">Updates</h2>
            <p className="mt-3 text-sm text-gray-300">
              We will update this policy when needed to stay accurate and compliant. Material changes will be highlighted here, and we will notify you when required.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-emerald-400/10 to-black p-8 shadow-2xl shadow-black/40">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Questions or Requests?</h2>
              <p className="mt-3 text-sm text-gray-200">
                We respond to privacy inquiries promptly. Reach out to review, update, or delete your information, or to ask about this policy.
              </p>
            </div>
         
          </div>
        </section>
      </main>
    </div>
  );
}
