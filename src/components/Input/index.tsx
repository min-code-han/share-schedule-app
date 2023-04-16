import { styled } from "@mui/material/styles"
import { TextField } from "@mui/material"

export const MintTextField = styled(TextField)({
  root: {
    "& *": {
      fontFamily: "Pretendard"
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.25rem",
      color: "#e2e3e8",
      "&.Mui-error": {
        color: "#ee5962 !important"
      },
      "&.MuiInputLabel-shrink": {
        transform: "translate(0, 1.5px) scale(1)",
        fontSize: "0.875rem",
        "&:not(.Mui-error)": {
          color: "#888c9c"
        }
      },
      "& + .MuiInput-formControl": {
        marginTop: 20
      }
    },
    "& svg": {
      color: "#888c9c"
    },
    "& .MuiInput-underline": {
      "&:not(.Mui-error):after": {
        borderBottom: "2px solid #50c3cc"
      },
      "&:before": {
        borderBottom: "2px solid #e2e3e8"
      }
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #e2e3e8"
    },
    "& input": {
      fontSize: "1.25rem",
      paddingBottom: 8,
      color: "#3b414e",
      caretColor: "#50C3CC",
      "&::placeholder": {
        color: "#e2e3e8",
        opacity: 1
      }
    }
  }
})
