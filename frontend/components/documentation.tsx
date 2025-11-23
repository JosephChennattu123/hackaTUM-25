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
              <p>
                For more details, please refer to the github repository: https://github.com/vika908/Waldo
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Example of use</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              from wheres_waldo import GemmaDetector, StableDiffusionDetector<br />

              <code># Text Detection</code><br />
              detector = GemmaDetector(tokenizer=...)<br />
              result = detector.detect("Some suspicious text...")<br />
              print(result)<br />

              <code># Image Detection</code><br />
              sd_detector = StableDiffusionDetector()<br />
              result = sd_detector.detect(pil_image)<br />
              print(result)<br />
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Documentation References</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This project implements concepts from the following papers:<br />

                - Scalable watermarking for identifying large language model outputs: SynthID Text (Google)<br />
                - Gemma 2: Improving Open Language Models at a Practical Size<br />
                - High-Resolution Image Synthesis with Latent Diffusion Models<br />
                - Secure Data Embedding using Fourier Transform-based Watermarking<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
