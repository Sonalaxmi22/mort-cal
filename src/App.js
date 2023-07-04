import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect"
import TenureSelect from "./components/TenureSelect"

function App() {
  const [data, setData] = useState({      /* useState hook */
    homeValue: 3000,
    downPayment: 3000 * 0.2, /* *0.2 is default 20% downpayement of home value */
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>      {/* mt - marginTop */}
        <Grid container spacing={5} alignItems='center'>                {/* Spacing between grids is defined using container spacing */}
          <Grid item xs={12} md={6}>                  {/* 2 children or item within grid | md - On the medium screen this grid will occupy 6 clmns at the same time */}
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>   {/* Passed the data and setData props into TenureSelect component */}
          </Grid>
          <Grid item xs={12} md={6}>                  {/* 6+6=12, 12 is the total number of grid column screen will be divided into 6, 6 part except padding */}
            <Result data={data}/>                     {/* data={data} data is called inside the result component */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
