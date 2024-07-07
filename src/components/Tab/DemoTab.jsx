import { useState } from "react";
import ComponentContainer from "../Container/ComponentContainer";
import PreviewContainer from "../Container/PreviewContainer";

const DemoTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <ComponentContainer>
      <div className="title">
        <h1>Qn 4: Build a dynamic tab component.</h1>
        <p>
          - Implement a tab component where clicking on a tab header updates the
          content displayed below. Use state to manage the active tab and props
          to pass the tab content and headers.
        </p>
      </div>
      <PreviewContainer>
        <h1 className=" text-center">Basic Tab Preview</h1>
        <div className="tab-button flex flex-wrap gap-5 items-center p-2">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`border-b-2 ${
              activeTab === "tab1" ? "border-green-400 font-bold" : ""
            } cursor-pointer text-xl`}
          >
            Metallica
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`border-b-2 ${
              activeTab === "tab2" ? "border-green-400 font-bold" : ""
            } cursor-pointer text-xl`}
          >
            Eagles
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`border-b-2 ${
              activeTab === "tab3" ? "border-green-400 font-bold" : ""
            } cursor-pointer text-xl`}
          >
            Nirvana
          </button>
        </div>
        <div className="tabContent border p-5 rounded-md border-gray-400">
          {activeTab === "tab1" && (
            <p>
              Metallica is an American heavy metal band. The band was formed in
              1981 in Los Angeles by vocalist and guitarist James Hetfield and
              drummer Lars Ulrich, and has been based in San Francisco for most
              of its career.
            </p>
          )}
          {activeTab === "tab2" && (
            <p>
              The Eagles are an American rock band formed in Los Angeles in
              1971. With five number-one singles and six number-one albums, six
              Grammy Awards and five American Music Awards, the Eagles were one
              of the ...{" "}
            </p>
          )}
          {activeTab === "tab3" && (
            <p>
              Nirvana was an American rock band formed in Aberdeen, Washington,
              in 1987. Founded by lead singer and guitarist Kurt Cobain and
              bassist Krist Novoselic, the band went through a succession of
              drummers, most notably Chad Channing, before recruiting Dave Grohl
              in 1990.
            </p>
          )}
        </div>
      </PreviewContainer>
    </ComponentContainer>
  );
};

export default DemoTab;
