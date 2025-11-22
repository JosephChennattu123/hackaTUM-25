import { Lock, Image, FileText, Github } from 'lucide-react';

const features = [
    {
        name: 'Invisible Protection',
        description: 'Watermarks are imperceptible to the human eye but easily detectable by our algorithms.',
        icon: Lock,
    },
    {
        name: 'Multi-Modal Support',
        description: 'Seamlessly watermark both AI-generated images and text content.',
        icon: Image,
    },
    {
        name: 'Open Source',
        description: 'Fully open-source and community-driven. Inspect the code, contribute, and deploy anywhere.',
        icon: Github,
    },
    {
        name: 'Robust Detection',
        description: 'Resistant to common attacks like cropping, resizing, and compression.',
        icon: FileText,
    },
];

export const Features = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Secure by Design</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to protect AI assets
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Our technology ensures that your AI-generated content remains identifiable and traceable, protecting your rights and preventing misuse.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
