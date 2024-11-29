
import BarGraph from "./components/BarGraph";
function App() {

  const sampleData = [
    { label: "/home", value: 186 },
    { label: "/about", value: 120 },
    { label: "/contact", value: 90 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Bar Graph Example
      </h1>
      <BarGraph data={sampleData} title="Page Views" />
    </div>
  );
}

export default App;
