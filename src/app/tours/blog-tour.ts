import { IStepOption, TourService } from "ngx-tour-ngx-bootstrap";
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
        content: "Welcome to the Ngx-Tour Docs tour!",
        placement: "right",
        title: "Welcome",
    },
    {
        anchorId: "blog.intro",
        content: "Thanks to angular-ui-tour for the inspiration for the library",
        placement: "bottom",
        title: "angular-ui-tour",
    },
    {
        anchorId: "blog.content",
        content: "Energy management is everything",
        placement: "bottom",
        title: "Empty your cup"
    }
];