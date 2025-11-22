import { Upload, Wand2, CheckCircle } from 'lucide-react';

const steps = [
    {
        title: 'Upload Content',
        description: 'Simply drag and drop your AI-generated image or paste your text into our secure interface.',
        icon: Upload,
    },
    {
        title: 'Apply Watermark',
        description: 'Our advanced algorithms embed a unique, invisible signature into the content in milliseconds.',
        icon: Wand2,
    },
    {
        title: 'Verify Authenticity',
        description: 'Anyone can verify the origin and authenticity of the content using our public verification tool.',
        icon: CheckCircle,
    },
];

export const HowItWorks = () => {
    return (
        <div className="bg-muted/50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Protecting your content is as easy as 1-2-3.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.title} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-gray-900/10 dark:ring-gray-50/10">
                                    <step.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-semibold leading-7">
                                    {step.title}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{step.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
