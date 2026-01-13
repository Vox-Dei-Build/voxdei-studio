import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vox Dei Studio",
  description: "Terms of Service for Vox Dei Studio - Learn about our service agreements, intellectual property rights, and policies.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 13, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Vox Dei Studio's website and services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="text-muted-foreground mb-3">Vox Dei Studio provides:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Digital product design and development</li>
              <li>Web and mobile application development</li>
              <li>Brand identity and visual design</li>
              <li>Technical consulting and strategy</li>
              <li>Other related creative and technical services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
            <p className="text-muted-foreground mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information</li>
              <li>Use the website lawfully and respectfully</li>
              <li>Not interfere with website security or functionality</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>

            <h3 className="text-xl font-semibold mb-3">Our Content:</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              All content, designs, code, logos, and materials on our website are owned by Vox Dei Studio or our licensors and protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3">Client Projects:</h3>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Ownership of deliverables will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Clients receive rights to final approved deliverables upon full payment</li>
              <li>We retain rights to preliminary concepts, processes, and methodologies</li>
              <li>We may showcase completed work in our portfolio unless otherwise agreed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Agreements</h2>
            <p className="text-muted-foreground mb-3">
              Specific projects are governed by separate agreements that outline:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Scope of work and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and conditions</li>
              <li>Intellectual property rights</li>
              <li>Confidentiality obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Payment schedules are defined in project agreements</li>
              <li>Invoices are due within 30 days unless otherwise specified</li>
              <li>Late payments may incur interest charges</li>
              <li>We reserve the right to suspend work for non-payment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>

            <h3 className="text-xl font-semibold mb-3">Our Commitment:</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We strive to deliver high-quality work that meets agreed specifications.
            </p>

            <h3 className="text-xl font-semibold mb-3">Limitations:</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Services are provided "as is" without warranties of any kind</li>
              <li>We do not guarantee specific business results from our services</li>
              <li>We are not liable for third-party integrations or services beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-3">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Our liability is limited to the amount paid for the specific service</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not responsible for losses due to circumstances beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-muted-foreground mb-3">
              You agree to indemnify Vox Dei Studio against claims arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your misuse of our services</li>
              <li>Your violation of these terms</li>
              <li>Content or materials you provide that infringe third-party rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
            <p className="text-muted-foreground mb-3">Both parties agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Keep confidential information private</li>
              <li>Use confidential information only for the intended purpose</li>
              <li>Not disclose confidential information without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground mb-3">
              We may terminate or suspend access to services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>For breach of these terms</li>
              <li>For non-payment</li>
              <li>At our discretion with reasonable notice</li>
            </ul>

            <p className="text-muted-foreground mb-3">Upon termination:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Outstanding payments become immediately due</li>
              <li>Both parties return or destroy confidential information</li>
              <li>Provisions intended to survive (IP, confidentiality, liability) remain in effect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground mb-3">In case of disputes:</p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Parties will first attempt good-faith negotiation</li>
              <li>If unresolved, disputes may be submitted to mediation</li>
              <li>Legal proceedings will be conducted in accordance with applicable jurisdiction</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Material changes will be notified via email or website notice. Continued use constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision is found unenforceable, remaining provisions remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms, together with specific project agreements and our privacy policy, constitute the entire agreement between you and Vox Dei Studio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground mt-3">
              <li>
                Email:{" "}
                <a href="mailto:admin@voxdei.io" className="text-foreground underline hover:no-underline">
                  admin@voxdei.io
                </a>
              </li>
              <li>
                Website:{" "}
                <a href="https://studio.voxdei.com" className="text-foreground underline hover:no-underline">
                  studio.voxdei.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
