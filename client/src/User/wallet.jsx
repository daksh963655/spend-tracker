import react, { useState } from "react";
import { useLocation } from "react-router-dom";
import { extendTheme, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { FaRupeeSign } from "react-icons/fa";

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function Wallet() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div>
        <Grid container spacing={4} className="mt-5">
          <Grid size={4}>
            <h1>Your Wallet</h1>
            {isLoading ? (
              <Skeleton width={10} className="h-25" />
            ) : (
              <>
                <h4>$20</h4>
              </>
            )}
          </Grid>
          <Grid size={6} container spacing={1} direction={"column"} offset={2}>
            <Grid size={6}>
              <Button
                variant="contained"
                color="success"
                className=" btn-main w-100"
                size="small"
              >
                Add New Wallet
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                variant="contained"
                color="success"
                className=" btn-black w-100"
                size="small"
              >
                Connect Your Bank
              </Button>
            </Grid>
          </Grid>
          <Grid
            size={12}
            container
            spacing={1}
            direction={"row"}
            className="mt-5 align-items-center"
          >
            <Grid size={4}>
              <h3>Overview</h3>
            </Grid>
            <Grid size={6} offset={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["SingleInputDateRangeField"]}>
                  <DateRangePicker
                    slots={{ field: SingleInputDateRangeField }}
                    name="allowedRange"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Skeleton height={14} />
          </Grid>
         <Grid size={12}>
         <h3>Current Month</h3>

         </Grid>
          <Grid size={6}>
            <div className="card">
              <div className="card-body">
                <h6>Total Expense</h6>
                <h2>
                  <FaRupeeSign />
                  25
                </h2>
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <div className="card">
              <div className="card-body">
                <h6>Total Saved</h6>
                <h2>
                  <FaRupeeSign />
                  25
                </h2>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
