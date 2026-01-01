import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let&apos;s Build Something
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you&apos;re launching a new product or modernizing an existing
          system, we can help.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button href="mailto:hello@voxdei.io">Get in Touch</Button>
          <Button href="[ADD LINK HERE]" variant="secondary">
            LinkedIn
          </Button>
        </div>
        <p className="text-sm text-gray-400">
          © 2026 Vox Dei Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
