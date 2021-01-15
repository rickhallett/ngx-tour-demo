import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

import { Chart } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit, AfterContentInit {
  @ViewChild("canvas") canvas: ElementRef;
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    const canvas = <HTMLCanvasElement>this.canvas.nativeElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }
}
