A set of custom generative models with different watermarking capabilities enabled. 
The scripts can be easily configured to run on Google Colab using the free T4 GPU.

The models here are already ready to be used as a fastapi server connected with ngrok. Customise ngrok to your liking and run the scripts.

## Models

Gemma-2b-2-it- A simple model from Google released in 2024 for mainly text generation. We have used SynthID's watermarking and a cheeky watermarking method to add a watermark to the generated text.

StableDiffusion-v1-5- A simple model from HuggingFace released in 2024 for mainly image generation. We have used a custom noise injection method to add a watermark to the generated image. We used a simple Fourier transform to inject the watermark into the image.
