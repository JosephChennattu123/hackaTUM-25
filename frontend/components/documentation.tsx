export default function Documentation() {
  return (
    <section id="docs" className="py-20 sm:py-28 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Documentation & Resources</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Everything you need to integrate Waldo into your platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our text watermarking is powered by SynthID, an open-source technology that embeds an imperceptible statistical pattern into generated text. This pattern is created by subtly biasing token selection during generation in a way that does not affect readability or meaning, but can be detected with high confidence by a dedicated verifier.
              </p>
              <p>
              For images, the watermark is embedded by introducing a specific pattern of noise that corresponds to a unique frequency signature. When transformed into the frequency domain, the watermarked image contains a distinct circular imbalance that can be reliably detected by our system.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Proof</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Waldo watermarking system is based on peer-reviewed cryptographic research and has been validated
                against industry-standard benchmarks. Our approach maintains content quality while achieving 99.8%
                detection accuracy across various content types and transformation attacks.
              </p>
              <p>
                The watermarking process introduces minimal overhead - typically less than 5% increase in generation
                time - while providing cryptographic guarantees about content provenance. Each watermark is unique and
                can be traced back to the specific model and generation session, enabling full auditability.
              </p>
              <p>
                For detailed technical specifications, mathematical proofs, and benchmark results, please refer to our
                comprehensive whitepaper available in the resources section.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Documentation References</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our documentation covers everything from quick-start integration guides to advanced customization
                options. The API reference includes detailed examples for all supported content types: text, images,
                audio, and video watermarking.
              </p>
              <p>
                Key resources include the Integration Guide for adding Waldo to your AI models, the Detection API
                documentation for building verification systems, and code examples in Python, JavaScript, and other
                popular languages. All documentation is maintained with the latest version updates and best practices.
              </p>
              <p>
                For enterprise users, we provide additional resources including compliance guides, security audits, and
                dedicated technical support channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
