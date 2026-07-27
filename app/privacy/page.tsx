import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Infinity DataLabs handles personal information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

// Bump whenever the substance of the notice changes — a privacy notice without a
// current effective date is not much use to the reader or to a regulator.
const LAST_UPDATED = "21 July 2026";
const CONTACT = "bikram@infinity-datalabs.com";

function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-medium text-white">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function MailLink() {
  return <a className="text-cyan-200 underline underline-offset-4" href={`mailto:${CONTACT}`}>{CONTACT}</a>;
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice."
        copy="What this website collects, why, who it reaches, and the rights you have over it."
      />
      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-5 text-slate-400 sm:px-8">
          <p className="border-b border-white/10 pb-8 text-xs uppercase tracking-[.15em] text-slate-500">
            Last updated {LAST_UPDATED}
          </p>

          <div className="mt-12 space-y-12 text-sm leading-7">
            <Clause title="Who we are">
              <p>
                Infinity DataLabs is the data fiduciary responsible for the personal information described in this
                notice. Our registered office is IDCO Tower, Bhubaneswar, Odisha, India, and we also operate from
                Greater Noida, Uttar Pradesh and Hyderabad, Telangana.
              </p>
              <p>
                For anything in this notice, including requests about your information, contact <MailLink />.
              </p>
            </Clause>

            <Clause title="What this notice covers">
              <p>
                This notice applies to infinity-datalabs.com only. Information we process while delivering work for a
                client is governed by the contract with that client, not by this notice.
              </p>
            </Clause>

            <Clause title="Information we collect">
              <p>
                <span className="text-slate-200">What you send us.</span> The contact form collects your name, work
                email address, company, area of interest, and your message. Everything in it is optional except a name,
                a valid email address, and a message — we cannot reply without those. Please don&rsquo;t include
                confidential or sensitive details in a first enquiry.
              </p>
              <p>
                <span className="text-slate-200">Technical records.</span> Our hosting provider records standard server
                logs for every request — IP address, browser user-agent, page requested, and timestamp. These exist to
                keep the site available and to defend against abuse. We do not use them to build a profile of you.
              </p>
            </Clause>

            <Clause title="What we do not do">
              <p>
                This site sets no cookies, runs no analytics, and loads no advertising, tracking, or social media
                scripts. There is no consent banner because there is nothing to consent to. Fonts are served from our
                own domain rather than a third party, so simply reading these pages discloses nothing about you beyond
                the server logs described above.
              </p>
              <p>We do not sell, rent, or trade personal information, and we never have.</p>
            </Clause>

            <Clause title="Why we use it">
              <p>
                We use what you submit to reply to your enquiry, to understand whether we are a fit for the work, and
                to keep ordinary business records of who approached us and why. We rely on the consent you give by
                submitting the form, together with our legitimate interest in responding to business enquiries.
              </p>
              <p>
                We will not use your details for unrelated marketing, and we do not add enquiries to a mailing list.
              </p>
            </Clause>

            <Clause title="Who else sees it">
              <p>
                A form submission is delivered to us as an email. It is not written to a public database and is not
                shared with any party beyond the service providers that make that delivery possible:
              </p>
              <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:marker:text-slate-600">
                <li>
                  <span className="text-slate-200">Vercel Inc.</span> — hosts and delivers this website, and holds the
                  server logs described above.
                </li>
                <li>
                  <span className="text-slate-200">Google LLC</span> — carries the message and hosts the mailbox that
                  receives it.
                </li>
              </ul>
              <p>
                Both providers operate infrastructure outside India, so your information may be processed abroad. We
                will also disclose information where we are legally required to, such as a valid order from a court or
                regulator.
              </p>
            </Clause>

            <Clause title="How long we keep it">
              <p>
                Enquiries are retained for as long as the conversation is live and, afterwards, for as long as we
                reasonably need a record of it. When an enquiry no longer serves a purpose we delete it. You can ask us
                to delete yours sooner at any time.
              </p>
            </Clause>

            <Clause title="How we protect it">
              <p>
                The site is served over HTTPS and form submissions are encrypted in transit. Mailbox access is limited
                to the people who need it and is protected by multi-factor authentication. No system is perfectly
                secure, so we ask again that you not send confidential material through a web form.
              </p>
            </Clause>

            <Clause title="Your rights">
              <p>
                Under India&rsquo;s Digital Personal Data Protection Act, 2023 — and comparable laws where they apply
                to you — you can ask us to:
              </p>
              <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:marker:text-slate-600">
                <li>confirm what information about you we hold, and give you a copy of it;</li>
                <li>correct anything inaccurate or incomplete;</li>
                <li>erase what we hold about you;</li>
                <li>withdraw the consent you gave when you submitted the form; and</li>
                <li>raise a grievance about how we have handled any of the above.</li>
              </ul>
              <p>
                Email <MailLink /> and we will respond within 30 days. Withdrawing consent does not affect anything we
                did lawfully before you withdrew it. If you are not satisfied with our response, you may complain to
                the Data Protection Board of India.
              </p>
            </Clause>

            <Clause title="Children">
              <p>
                This is a business website and is not directed at children. We do not knowingly collect information
                from anyone under 18. If you believe a child has sent us information, contact us and we will delete it.
              </p>
            </Clause>

            <Clause title="Changes to this notice">
              <p>
                If we change how we handle information, we will revise this page and update the date at the top. Please
                check back before sending us anything you would want handled differently.
              </p>
            </Clause>
          </div>
        </div>
      </section>
    </>
  );
}
