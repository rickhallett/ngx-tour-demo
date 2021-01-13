import { INgxbStepOption } from 'ngx-tour-ngx-bootstrap/step-option.interface';

export interface TSINgxbStepOption extends INgxbStepOption {
    containerClass?: string;
}

export interface TSINgxRoute {
    route: string;
}

export const blogTourStartingRoute: TSINgxRoute = {
    route: "blog", // acts as the 'base' route. If not defined on each step, this is where it returns to
};

export const blogTourSteps: TSINgxbStepOption[] = [
    {
        anchorId: "start.blog.tour",
        content: "Welcome to the Ngx-Tour Blog tour!",
        route: 'blog',
        placement: "right",
        title: "Welcome",
        nextStep: 'blog.tour.intro'
    },
    {
        anchorId: "blog.tour.intro",
        route: 'blog',
        content: "Intro",
        placement: "right",
        title: "Intro",
    },
    {
        anchorId: "blog.tour.continued",
        content: "Continued",
        placement: "right",
        title: "Continued",
    },
];