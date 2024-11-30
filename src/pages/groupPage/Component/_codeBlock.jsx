import { FileCopy } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, title }) => {
  if (!code) return null;
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#2d2d2d",
          borderRadius: "8px",
          p: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
          color: "#f5f5f5",
          mb: 2,
          overflowX: "hidden",
          whiteSpace: "pre-wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#2c2c2c",
            p: "5px 12px",
            borderRadius: "8px 8px 0 0",
            color: "#e0e0e0",
            height: "30px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff5f57",
              "&.yellow": { backgroundColor: "#ffbd2e" },
              "&.green": { backgroundColor: "#27c93f" },
              "&:hover": { opacity: 0.8 },
            }}
          ></Box>

          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#88c0d0",
              pl: 1,
              textAlign: "left",
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>

          <CopyToClipboard text={code}>
            <IconButton size="small" 
              sx={{
                color: "#88c0d0",
                fontSize: "16px",
                p: "4px",
                borderRadius: "50%",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#444",
                },
              }}
              >
              <FileCopy />
            </IconButton>
          </CopyToClipboard>
        </Box>

        <Box sx={{ width:"100%" }}>
          <SyntaxHighlighter 
            language="jsx"
            style={dracula}
            customStyle={{
              margin: 0,
              width: "100%",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </div>
  );
};

export default CodeBlock;
