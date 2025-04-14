import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import pptxgen from "pptxgenjs";
import Map from "./Map";

const DealOverview = ({ deal, marketBenchmarks }) => {
  const checkForMissingData = (data) => {
    return !data || data === "" || data === null;
  };

  const exportToExcel = () => {
    const worksheetData = [
      ...deal.assetDetails,
      ...deal.metrics,
      ...deal.keyAssumptions,
      ...deal.leaseAnalysis,
    ];
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Deal Data");
    XLSX.writeFile(workbook, `${deal.propertyName}_DealData.xlsx`);
  };

  const generatePowerPoint = () => {
    const pptx = new pptxgen();
    const slide = pptx.addSlide();
    slide.addText(deal.propertyName, {
      x: 0.5,
      y: 0.3,
      fontSize: 24,
      bold: true,
    });
    slide.addText(deal.address, { x: 0.5, y: 1, fontSize: 16 });
    if (deal.image) {
      slide.addImage({ path: deal.image, x: 0.5, y: 1.5, w: 5, h: 3 });
    }
    slide.addText(deal.summary, {
      x: 0.5,
      y: 4.6,
      w: 8,
      h: 2,
      fontSize: 14,
      color: "363636",
    });
    pptx.writeFile({ fileName: `${deal.propertyName}_Overview.pptx` });
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 py-8 text-sm text-gray-800">
      <h1 className="text-3xl font-bold">Deal Overview</h1>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-semibold">{deal.propertyName}</h1>
          <p className="text-gray-600">{deal.address}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={exportToExcel}
            className="bg-black text-white px-4 py-2 text-xs rounded mr-2 cursor-pointer hover:bg-gray-800 transition-colors">
            Export to Excel
          </button>
          <button
            onClick={generatePowerPoint}
            className="bg-white border px-4 py-2 text-xs rounded cursor-pointer hover:bg-gray-100 transition-colors">
            Generate PowerPoint
          </button>
        </div>
      </div>

      {/* Deal Summary */}
      <div className="fadeIn mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <a href={deal.href} target="_blank">
            <img
              src={deal.image}
              alt="Property"
              className="w-full rounded-lg object-cover h-48"
            />
          </a>
        </div>
        <div className="md:col-span-2 space-y-2">
          <h2 className="text-lg font-medium">Deal Summary</h2>
          <p>{deal.summary}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium">
          Original Offering Memorandum (OM)
        </h2>
        <p className="text-sm text-gray-500">
          For reference, you can view the original Offering Memorandum here:
          <a
            href={deal.omLink}
            target="_blank"
            className="text-blue-600 underline">
            View OM
          </a>
        </p>
      </div>

      {deal.location && (
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-2">Location</h2>
          <Map lat={deal.location.lat} lng={deal.location.lng} />
        </div>
      )}
      {/* Asset-Level Details */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {deal.assetDetails.map((item, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg bg-gray-50 shadow-md hover:scale-105 hover:shadow-xl transition-shadow">
            <p className="text-gray-500 text-xs">{item.label}</p>
            <p className="font-semibold text-base">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Financial Metrics */}
      <div className="fadeIn mt-8">
        <h2 className="text-lg font-medium mb-2">
          Projected Financial Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deal.metrics.map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg bg-white shadow-sm hover:scale-105 hover:shadow-xl transition-all">
              <p className="text-gray-500 text-xs">{item.label}</p>
              <p className="font-semibold text-base">{item.value}</p>
              {checkForMissingData(item.value) && (
                <span className="absolute top-0 right-0 text-red-500 text-xs">
                  Missing
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium mb-2">
          Market Benchmark Comparisons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {marketBenchmarks.map((benchmark, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg hover:scale-105 bg-white shadow-sm">
              <p className="text-gray-500 text-xs">Address</p>
              <p className="font-semibold text-base">{benchmark.address}</p>
              <p className="text-gray-500 text-xs">Rent: {benchmark.rent}</p>
              <p className="text-gray-500 text-xs">
                Submarket: {benchmark.submarket}
              </p>
              <p className="text-gray-500 text-xs">
                Lease Term: {benchmark.leaseTerm}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Assumptions */}
      <div className="fadeIn mt-8">
        <h2 className="text-lg font-medium mb-2">Key Assumptions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deal.keyAssumptions.map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg bg-white shadow-sm hover:scale-105 hover:shadow-xl transition-all">
              <p className="text-gray-500 text-xs">{item.label}</p>
              <p className="font-semibold text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lease Analysis */}
      <div className="mt-10">
        <h2 className="text-lg font-medium mb-2">Lease Analysis</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deal.leaseAnalysis.map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg bg-white shadow-md hover:scale-105 hover:shadow-xl transition-shadow">
              <p className="text-gray-500 text-xs">{item.label}</p>
              <p className="font-semibold text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Comparables */}
      <div className="mt-10">
        <h2 className="text-lg font-medium mb-4">Sale Comparables</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deal.saleComparables.map((comp, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-shadow flex gap-2 justify-between">
              <a href={comp.href} target="_blank">
                <img
                  src={comp.image}
                  alt="Property"
                  className="w-[80%] md:w-full rounded-lg object-cover h-20 md:h-28"
                />
              </a>
              <div>
                <p className="text-gray-700 font-medium">{comp.address}</p>
                <p className="text-xs text-gray-500">
                  Submarket: {comp.submarket} | Delivery Date: {comp.date}
                </p>
                <p className="text-xs">Owner: {comp.owner}</p>
                <p className="text-xs">SF: {comp.sf}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supply Pipeline */}
      <div className="mt-10 mb-16">
        <h2 className="text-lg font-medium mb-4">Supply Pipeline</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deal.pipeline.map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl flex gap-2 justify-between transition-shadow">
              <a href={item.href} target="_blank">
                <img
                  src={item.image}
                  alt="Property"
                  className=" w-[80%] md:w-full rounded-lg object-cover h-20 items-center gap-4 md:h-28"
                />
              </a>
              <div>
                <p className="text-gray-700 font-medium">
                  Address: {item.address}
                </p>
                <p className="text-xs text-gray-500">
                  Submarket: {item.submarket} | Delivery: {item.delivery}
                </p>
                <p className="text-xs">Owner: {item.owner}</p>
                <p className="text-xs">SF: {item.sf}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealOverview;
