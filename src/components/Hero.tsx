import LegoButton from "./LegoButton";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-200">
      <LegoButton color="blue">Play</LegoButton>

      <LegoButton color="red" onClick={() => alert("Clicked!")}>
        Delete
      </LegoButton>

      <LegoButton color="yellow" studs={4}>
        Build
      </LegoButton>

      <LegoButton color="green" className="w-56">
        Continue
      </LegoButton>
    </div>
  );
}