"use client"
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

const ComponentDetails = ({ item, categoryItems, idx }) => {
  const [tabIndexes, setTabIndexes] = useState(categoryItems.map(() => 0));

  const handleTabChange = (event, newTabIndex, idx) => {
    const newTabIndexes = [...tabIndexes];
    newTabIndexes[idx] = newTabIndex;  
    setTabIndexes(newTabIndexes);
  };
  return (
    <>
      <Tabs
        value={tabIndexes[idx]}
        onChange={(event, newTabIndex) =>
          handleTabChange(event, newTabIndex, idx)
        }
        aria-label="component tabs"
      >
        <Tab label="Component" />
        {item.tailwindCode && <Tab label="Tailwind" />}
        {item.vanillaCode && <Tab label="Vanilla" />}
        {item.muiCode && <Tab label="MUI" />}
      </Tabs>

      <Box sx={{
        maxWidth:"100%",
        overflowX:"auto",
        py:2
      }}>
        {tabIndexes[idx] === 0 && <item.component />}
        
        {tabIndexes[idx] === 1 && item.tailwindCode && (
          <CodeBlock 
          code={item.tailwindCode}
          title={item.name}
        />
        )}

        {tabIndexes[idx] === 2 && item.vanillaCode && (
          <CodeBlock 
          code={item.vanillaCode}
          title={item.name}
        />
        )}
        {tabIndexes[idx] === 3 && item.muiCode && (
          <CodeBlock
            code={item.muiCode}
            title={item.name}
          />
        )}
      </Box>
    </>
  );
};

export default ComponentDetails;
