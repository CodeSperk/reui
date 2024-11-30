"use client"
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CodeBlock from "./_codeBlock";

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
        sx={{backgroundColor:"#F0F1FF", fontWeight: 'bold'}}
      >
        <Tab label="Preview" />
        {item.tailwindCode && <Tab label="Tailwind" />}
        {item.vanillaCode && <Tab label="Vanilla" />}
        {item.muiCode && <Tab label="MUI" />}
      </Tabs>

      <Box sx={{
        width:"100%",
        overflowX: "auto",
        height:"448px",
        backgroundColor:"#F8F9FF",
        p:2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
