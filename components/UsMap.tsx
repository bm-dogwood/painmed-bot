import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { memo } from "react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// FIPS id -> USPS code
const FIPS_TO_CODE: Record<string, string> = {
  "01": "AL",
  "02": "AK",
  "04": "AZ",
  "05": "AR",
  "06": "CA",
  "08": "CO",
  "09": "CT",
  "10": "DE",
  "11": "DC",
  "12": "FL",
  "13": "GA",
  "15": "HI",
  "16": "ID",
  "17": "IL",
  "18": "IN",
  "19": "IA",
  "20": "KS",
  "21": "KY",
  "22": "LA",
  "23": "ME",
  "24": "MD",
  "25": "MA",
  "26": "MI",
  "27": "MN",
  "28": "MS",
  "29": "MO",
  "30": "MT",
  "31": "NE",
  "32": "NV",
  "33": "NH",
  "34": "NJ",
  "35": "NM",
  "36": "NY",
  "37": "NC",
  "38": "ND",
  "39": "OH",
  "40": "OK",
  "41": "OR",
  "42": "PA",
  "44": "RI",
  "45": "SC",
  "46": "SD",
  "47": "TN",
  "48": "TX",
  "49": "UT",
  "50": "VT",
  "51": "VA",
  "53": "WA",
  "54": "WV",
  "55": "WI",
  "56": "WY",
};

interface Props {
  activeCode: string;
  profiledCodes: Set<string>;
  onSelect: (code: string) => void;
}

export const UsMap = memo(({ activeCode, profiledCodes, onSelect }: Props) => {
  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const code = FIPS_TO_CODE[String(geo.id).padStart(2, "0")];
              const isProfiled = code && profiledCodes.has(code);
              const isActive = code === activeCode;
              const fill = isActive
                ? "hsl(8 88% 56%)"
                : isProfiled
                ? "hsl(0 0% 14%)"
                : "hsl(0 0% 8%)";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => isProfiled && onSelect(code)}
                  style={{
                    default: {
                      fill,
                      stroke: "hsl(0 0% 4%)",
                      strokeWidth: 0.75,
                      outline: "none",
                      cursor: isProfiled ? "pointer" : "not-allowed",
                      transition: "fill 200ms",
                    },
                    hover: {
                      fill: isProfiled ? "hsl(14 100% 64%)" : fill,
                      outline: "none",
                    },
                    pressed: { fill: "hsl(8 88% 56%)", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ background: "hsl(8 88% 56%)" }}
          />{" "}
          selected
        </span>
        <span className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ background: "hsl(0 0% 14%)" }}
          />{" "}
          profiled
        </span>
        <span className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ background: "hsl(0 0% 8%)" }}
          />{" "}
          data pending
        </span>
      </div>
    </div>
  );
});

UsMap.displayName = "UsMap";
