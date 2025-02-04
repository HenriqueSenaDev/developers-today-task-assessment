"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/chart";
import { CountryYearPopulation } from "@/domain/types/country-info";

// const chartData = [
//   { month: "January", population: 186 },
//   { month: "February", population: 305 },
//   { month: "March", population: 237 },
//   { month: "April", population: 73 },
//   { month: "May", population: 209 },
//   { month: "June", population: 214 },
// ];

const chartConfig = {
  population: {
    label: "Year",
    color: "#FFF",
  },
} satisfies ChartConfig;

type CountryPopulationChartProps = {
  data: CountryYearPopulation[];
};

export function CountryPopulationChart({ data }: CountryPopulationChartProps) {
  const chartData = data.map((item) => ({
    year: item.year,
    population: item.population,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="year"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <Bar dataKey="population" fill="var(--color-population)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
