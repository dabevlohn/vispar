const { asyncBufferFromUrl, parquetReadObjects } = await import(
  "https://cdn.jsdelivr.net/npm/hyparquet@1.13.1/+esm"
);
const Plot = await import(
  "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6.17/+esm"
);

const url = "https://site.url/data.parquet";
const file = await asyncBufferFromUrl({ url });
const data = await parquetReadObjects({
  file,
  columns: ["path", "c"]
});

const plot = Plot.plot({
  marks: [Plot.barX(data, { y: "path", x: "c", fill: "green" })],
});

document.body.appendChild(plot);
