import { type Column, columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import React from "react";

function App() {
  const [round, setRound] = React.useState<Number>(1);
  const [data, setData] = React.useState<Column[]>([]);

  React.useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/opening-and-closing-ranks/2024/round-${round
        .toString()
        .padStart(2, "0")}`
    )
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [round]);

  return (
    <div className="mx-auto p-4">
      <DataTable
        columns={columns}
        data={data}
        selectValue={round.toString()}
        onSelectValueChange={(value) => setRound(parseInt(value))}
      />
    </div>
  );
}

export default App;
