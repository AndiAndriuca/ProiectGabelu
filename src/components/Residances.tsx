import { CascaderProps } from "antd";

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>["options"] = [
  {
    value: "Albania",
    label: "Albania",
  },
  {
    value: "Andorra",
    label: "Andorra",
  },
  {
    value: "Armenia",
    label: "Armenia",
  },
  {
    value: "Austria",
    label: "Austria",
  },
  {
    value: "Azerbaijan",
    label: "Azerbaijan",
  },
  {
    value: "Belarus",
    label: "Belarus",
  },
  {
    value: "Belgium",
    label: "Belgium",
  },
  {
    value: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina",
  },
  {
    value: "Bulgaria",
    label: "Bulgaria",
  },
  {
    value: "Croatia",
    label: "Croatia",
  },
  {
    value: "Cyprus",
    label: "Cyprus",
  },
  {
    value: "Czechia",
    label: "Czechia",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
  {
    value: "Estonia",
    label: "Estonia",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "France",
    label: "France",
  },
  {
    value: "Georgia",
    label: "Georgia",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "Greece",
    label: "Greece",
  },
  {
    value: "Hungary",
    label: "Hungary",
  },
  {
    value: "Iceland",
    label: "Iceland",
  },
  {
    value: "Ireland",
    label: "Ireland",
  },
  {
    value: "Italy",
    label: "Italy",
  },
  {
    value: "Kazakhstan",
    label: "Kazakhstan",
  },
  {
    value: "Kosovo",
    label: "Kosovo",
  },
  {
    value: "Latvia",
    label: "Latvia",
  },
  {
    value: "Liechtenstein",
    label: "Liechtenstein",
  },
  {
    value: "Lithuania",
    label: "Lithuania",
  },
  {
    value: "Luxembourg",
    label: "Luxembourg",
  },
  {
    value: "Malta",
    label: "Malta",
  },
  {
    value: "Moldova",
    label: "Moldova",
  },
  {
    value: "Monaco",
    label: "Monaco",
  },
  {
    value: "Montenegro",
    label: "Montenegro",
  },
  {
    value: "Netherlands",
    label: "Netherlands",
  },
  {
    value: "North Macedonia",
    label: "North Macedonia",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Poland",
    label: "Poland",
  },
  {
    value: "Portugal",
    label: "Portugal",
  },
  {
    value: "Romania",
    label: "Romania",
  },
  {
    value: "Russia",
    label: "Russia",
  },
  {
    value: "San Marino",
    label: "San Marino",
  },
  {
    value: "Serbia",
    label: "Serbia",
  },
  {
    value: "Slovakia",
    label: "Slovakia",
  },
  {
    value: "Slovenia",
    label: "Slovenia",
  },
  {
    value: "Spain",
    label: "Spain",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Switzerland",
    label: "Switzerland",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
  {
    value: "Ukraine",
    label: "Ukraine",
  },
  {
    value: "United Kingdom (UK)",
    label: "United Kingdom (UK)",
  },
  {
    value: "Vatican City (Holy See)",
    label: "Vatican City (Holy See)",
  },
];

export default residences;
