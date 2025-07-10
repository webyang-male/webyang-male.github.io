// 游历国家

import { onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;

  const visitedCountries = [
    "China",
  ];

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = 500;
    const sensitivity = 75;

    let projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    let svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    let map = svg.append("g");

    //过滤重复数据:有重复的国家条目，可以在加载数据时去重
    const uniqueFeatures = Array.from(new Set(worldData.features.map((d: any) => d.properties.name)))
      .map((name) => worldData.features.find((d: any) => d.properties.name === name));

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(uniqueFeatures)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d as any))
      // .attr("fill", (d: { properties: { name: string } }) => {
      //   if (visitedCountries.includes(d.properties.name)) {
      //     console.log("渲染的国家是:", d.properties.name);
      //   }
      //   return visitedCountries.includes(d.properties.name) ? "#E63946" : "white";
      // })
      .attr("fill", (d: { properties: { name: string } }) => {
        //标准化名称匹配 修改匹配逻辑，将名称转换为小写以避免大小写问题
        const normalizedVisitedCountries = visitedCountries.map((name) => name.toLowerCase());
        const countryName = d.properties.name.toLowerCase();
        if (normalizedVisitedCountries.includes(countryName)) {
          console.log("渲染的国家是:", d.properties.name);
        }
        return normalizedVisitedCountries.includes(countryName) ? "#E63946" : "white";
      })
      .style("stroke", "black")
      .style("stroke-width", 0.3)
      .style("opacity", 0.8);

    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
    }, 200);
  });

  return (
    <div class="flex flex-col text-white justify-center items-center w-full h-full">
      <div class="w-full" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
