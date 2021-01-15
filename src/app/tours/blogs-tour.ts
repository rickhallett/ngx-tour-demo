import * as faker from "faker";
import { INgxbStepOption } from "ngx-tour-ngx-bootstrap/step-option.interface";

export const blogTourSteps: INgxbStepOption[] = [
  {
    anchorId: "start.blog.tour",
    route: "blog",
    content: "Welcome to the Ngx-Tour Blogs tour!",
    placement: "right",
    title: "Welcome",
  },
  {
    anchorId: "blog.intro",
    route: "blog",
    content: faker.lorem.sentence(40),
    placement: "bottom",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "blog.content",
    route: "blog",
    content: faker.lorem.paragraph(6),
    placement: "left",
    title: faker.lorem.sentence(3),
  },
  {
    anchorId: "blog.content",
    route: "blog",
    content: `${faker.lorem.paragraph(6)}`,
    placement: "top",
    title: faker.lorem.sentence(3),
  },
];
