import heroImage from "../assets/heroImage.png";

const mockDeal = {
  propertyName: "Sunset Plaza",
  address: "1234 Market St, San Francisco, CA",
  image: heroImage,
  omLink:
    "https://drive.google.com/file/d/1VuVMe_hIpwQOQnzylBl_G4XgZ9d2wk0I/view?usp=sharing",
  location: {
    lat: 40.6742334,
    lng: -74.0147862,
  },
  href: "https://www.google.com/maps/@40.6742334,-74.0147862,3a,75y,85.6h,101.64t/data=!3m7!1e1!3m5!1sAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7!2e10!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7%3Dw900-h600-k-no-pi-11.64294113332673-ya225.98223254438935-ro0-fo100!7i7680!8i3840?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  summary:
    "Sunset Plaza is a premier commercial property located in the heart of the city...",
  assetDetails: [
    { label: "Tenant", value: "Whole Foods" },
    { label: "Rent PSF", value: "$45" },
    { label: "Lease Term", value: "10 Years" },
    { label: "Size", value: "22,000 SF" },
  ],
  metrics: [
    { label: "NOI", value: "$1.2M" },
    { label: "Cap Rate", value: "5.2%" },
    { label: "IRR", value: "12%" },
    { label: "Equity Multiple", value: "1.8x" },
  ],
  keyAssumptions: [
    { label: "Vacancy Rate", value: "5%" },
    { label: "Expense Growth", value: "2%" },
    { label: "Rent Growth", value: "3%" },
    { label: "Exit Cap Rate", value: "6%" },
  ],
  leaseAnalysis: [
    { label: "WALT", value: "7.5 years" },
    { label: "Occupancy", value: "100%" },
    { label: "Average Rent", value: "$42 PSF" },
    { label: "Lease Escalations", value: "2% annually" },
  ],
  saleComparables: [
    {
      address: "101 Main St",
      submarket: "Downtown",
      date: "2022",
      owner: "ABC Corp",
      sf: "20,000",
      image: heroImage,
      href: "https://www.google.com/maps/@40.6742334,-74.0147862,3a,75y,85.6h,101.64t/data=!3m7!1e1!3m5!1sAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7!2e10!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7%3Dw900-h600-k-no-pi-11.64294113332673-ya225.98223254438935-ro0-fo100!7i7680!8i3840?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "202 Elm St",
      submarket: "Midtown",
      date: "2023",
      owner: "XYZ Holdings",
      sf: "25,000",
      image: heroImage,
      href: "https://www.google.com/maps/@40.6742334,-74.0147862,3a,75y,85.6h,101.64t/data=!3m7!1e1!3m5!1sAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7!2e10!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7%3Dw900-h600-k-no-pi-11.64294113332673-ya225.98223254438935-ro0-fo100!7i7680!8i3840?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
  pipeline: [
    {
      address: "500 New Ave",
      submarket: "SOMA",
      delivery: "Q4 2025",
      owner: "BuildCo",
      sf: "30,000",
      image: heroImage,
      href: "https://www.google.com/maps/@40.6742334,-74.0147862,3a,75y,85.6h,101.64t/data=!3m7!1e1!3m5!1sAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7!2e10!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7%3Dw900-h600-k-no-pi-11.64294113332673-ya225.98223254438935-ro0-fo100!7i7680!8i3840?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "700 Lakeview Rd",
      submarket: "Mission",
      delivery: "Q1 2026",
      owner: "DevGroup",
      sf: "20,000",
      image: heroImage,
      href: "https://www.google.com/maps/@40.6742334,-74.0147862,3a,75y,85.6h,101.64t/data=!3m7!1e1!3m5!1sAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7!2e10!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNOk-DcjtRg6fqvC7bieI52tdiMGAzR04wVbUJ7%3Dw900-h600-k-no-pi-11.64294113332673-ya225.98223254438935-ro0-fo100!7i7680!8i3840?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
};

export default mockDeal;
