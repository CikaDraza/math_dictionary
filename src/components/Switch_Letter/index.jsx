import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useSwitcher } from "../useSwitcher";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34,
  padding: 10,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        padding: "2px 0",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#1F2E28"
        )}" d="M8.41438 5.80714C9.54004 5.80714 10.4192 6.27857 11.0518 7.22143C11.6937 8.15 12.0146 9.55 12.0146 11.4214V15H9.29352V11.9571C9.29352 11.0714 9.15397 10.4071 8.87488 9.96429C8.6051 9.52143 8.23298 9.3 7.75853 9.3C7.33059 9.3 6.84683 9.48572 6.30726 9.85714V15H3.58614V3.36429H0.585938V0H9.62842V3.36429H6.30726V6.3C7.07941 5.97143 7.78178 5.80714 8.41438 5.80714Z"/><path d="M20.5859 3.38572V15H17.9485V10.8643C17.3904 11.3071 16.7485 11.5286 16.0228 11.5286C14.9623 11.5286 14.1669 11.1643 13.6366 10.4357C13.1064 9.70714 12.8412 8.55714 12.8412 6.98572V3.38572H15.4926V6.70714C15.4926 7.35 15.5856 7.81429 15.7717 8.1C15.967 8.37143 16.2554 8.50714 16.6368 8.50714C17.1206 8.50714 17.5578 8.35 17.9485 8.03572V3.38572H20.5859Z" fill="${encodeURIComponent(
          "#1F2E28"
        )}"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#f4f4f4"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#fff",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#1F2E28"
      )}" d="M6.73588 15.9C5.58976 15.9 4.55825 15.6511 3.64136 15.1533C2.73488 14.6446 2.02116 13.9411 1.5002 13.0429C0.979232 12.1446 0.71875 11.1273 0.71875 9.99093C0.71875 8.85457 0.979232 7.83725 1.5002 6.93899C2.02116 6.04072 2.73488 5.34266 3.64136 4.84483C4.55825 4.33617 5.58976 4.08184 6.73588 4.08184C7.73613 4.08184 8.6374 4.26582 9.43968 4.63379C10.242 5.00176 10.9088 5.53206 11.4402 6.2247L9.47094 8.07535C8.76243 7.1879 7.90284 6.74418 6.89217 6.74418C6.29827 6.74418 5.76689 6.87946 5.29802 7.15002C4.83957 7.42059 4.48011 7.80479 4.21963 8.30262C3.96956 8.78963 3.84453 9.35241 3.84453 9.99093C3.84453 10.6295 3.96956 11.1976 4.21963 11.6955C4.48011 12.1825 4.83957 12.5613 5.29802 12.8318C5.76689 13.1024 6.29827 13.2377 6.89217 13.2377C7.90284 13.2377 8.76243 12.794 9.47094 11.9065L11.4402 13.7572C10.9088 14.4498 10.242 14.9801 9.43968 15.3481C8.6374 15.716 7.73613 15.9 6.73588 15.9ZM7.25164 0.900024H10.2211L7.28289 3.36756H5.15736L7.25164 0.900024Z"/><path fill="${encodeURIComponent(
        "#1F2E28"
      )}" d="M16.749 15.8189C15.8113 15.8189 14.9725 15.624 14.2328 15.2344C13.493 14.8448 12.9147 14.3037 12.4979 13.6111C12.0916 12.9184 11.8884 12.1338 11.8884 11.2572C11.8884 10.3805 12.0916 9.60132 12.4979 8.91951C12.9147 8.22686 13.493 7.69115 14.2328 7.31236C14.9725 6.92275 15.8113 6.72795 16.749 6.72795C17.7076 6.72795 18.5359 6.9444 19.234 7.3773C19.9321 7.79937 20.427 8.3892 20.7188 9.14678L18.4213 10.3643C18.0358 9.57427 17.4731 9.17925 16.7334 9.17925C16.202 9.17925 15.7592 9.36323 15.4049 9.73119C15.0611 10.0992 14.8892 10.6078 14.8892 11.2572C14.8892 11.9173 15.0611 12.4368 15.4049 12.8156C15.7592 13.1836 16.202 13.3676 16.7334 13.3676C17.4731 13.3676 18.0358 12.9725 18.4213 12.1825L20.7188 13.4C20.427 14.1576 19.9321 14.7528 19.234 15.1857C18.5359 15.6078 17.7076 15.8189 16.749 15.8189ZM19.7498 3.35132L17.718 5.81885H15.1549L13.1231 3.35132H15.0923L16.4364 4.58509L17.7805 3.35132H19.7498Z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function SwitchLetter() {
  const matches = useMediaQuery('(min-width:600px)');
  const { switched, handleChangeSwitch } = useSwitcher(() => {
    return localStorage.getItem("lang");
  });

  return (
    <LightTooltip title={ switched ? "Promenite pismo. Ćirilica ili Latinica" : "Промените писмо. Ћирилица или Латиница"}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          checked={!switched}
          onChange={handleChangeSwitch}
          value="on"
          labelPlacement={"start"}
          control={
            <MaterialUISwitch sx={{ m: 1, widht: "100px" }} />
          }
            label={matches ? !switched ? "Ћирилица" : "Latinica" : "" }
        />
      </FormGroup>
    </LightTooltip>
  );
}
