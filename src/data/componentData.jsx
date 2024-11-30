import ButtonPrimary from "@/components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary/ButtonSecondary";
import CoolHoverButton from "@/components/Buttons/CoolHoverButton/CoolHoverButton";
import BasicCard from "@/components/Cards/BasicCard/BasicCard";
import PrimaryCard from "@/components/Cards/PrimaryCard/PrimaryCard";
import DashBoardDrawer from '@/components/Drawers/DashboardDrawer/DashBoardDrawer';

export const componentsData = [
  {
    category: "button",
    uid: "PrimaryBtn",
    name: 'Primary Button',
    component: ButtonPrimary,
    description: 'A primary button with default styles for your app.',
    tailwindCode: `
      <button class="bg-blue-500 jdfk jkfj jdf;dfdf sdfjsd text-white p-2 rounded">
        Primary Button
      </button>
    `,
    muiCode: '<Button variant="contained">Primary Button</Button>',
    vanillaCode: `
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
        overflowX:"hidden",
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
    `,
  },
  {
    category: "button",
    uid: "SecondaryBtn",
    name: 'Secondary Button',
    component: ButtonSecondary,
    description: 'A secondary button with a less prominent style.',
    tailwindCode: '<button class="bg-gray-500 text-white p-2 rounded">Secondary Button</button>',
    muiCode: '<Button variant="outlined">Secondary Button</Button>',
    vanillaCode: '<button>Secondary Button</button>',
  },
  {
    category: "button",
    uid: "CoolBtn",
    name: 'Cool Hover Button',
    component: CoolHoverButton,
    description: 'A button with a cool hover effect.',
    tailwindCode: '<button class="bg-green-500 text-white p-2 rounded hover:bg-green-700">Cool Hover Button</button>',
    muiCode: '<Button variant="contained" sx={{ "&:hover": { bgcolor: "green" } }}>Cool Hover Button</Button>',
    vanillaCode: '<button class="cool-hover">Cool Hover Button</button>',
  },
  {
    category: "card",
    uid: "PrimaryCard",
    name: 'Primary Card',
    component: PrimaryCard,
    description: 'A card component that displays content in a structured way.',
    tailwindCode: '<div class="p-4 bg-white border rounded-lg shadow-md">Primary Card</div>',
    muiCode: '<Card variant="outlined"><CardContent>Primary Card</CardContent></Card>',
    vanillaCode: '<div class="card">Primary Card</div>',
  },
  {
    category: "card",
    uid: "BasicCard",
    name: 'Basic Card',
    component: BasicCard,
    description: 'A simple card for displaying content.',
    tailwindCode: '<div class="p-4 bg-gray-100 border rounded-lg shadow-sm">Basic Card</div>',
    muiCode: '<Card><CardContent>Basic Card</CardContent></Card>',
    vanillaCode: '<div class="basic-card">Basic Card</div>',
  },
  {
    category: "drawer",
    uid: "dashboardDrawer",
    name: 'Dashboard Drawer',
    component: DashBoardDrawer,
    description: 'On larger screens, it is initially open, offering quick access to top-level features. On smaller screens, it remains closed to conserve space, while still providing easy access through a top navbar. Clicking on a sidebar item or a top navbar item seamlessly redirects you to the corresponding section within the dashboard.',
    tailwindCode: '<div class="p-4 bg-gray-100 border rounded-lg shadow-sm">Basic Card</div>',
    muiCode: "// Dashboard.jsx\n//=======================\nimport React, { useEffect, useState } from \"react\";\nimport AsideLeft from \"./AsideLeft\";\nimport { Box } from \"@mui/material\";\nimport ComponentNavbar from \"./ComponentNavbar\";\n\nconst Dashboard = () => {\n  const [isOpened, setIsOpened] = useState(false);\n  useEffect(() => {\n    const checkWindowSize = () => {\n      if (window.innerWidth >= 1200) {\n        setIsOpened(true);\n      } else {\n        setIsOpened(false);\n      }\n    };\n    checkWindowSize();\n    window.addEventListener(\"resize\", checkWindowSize);\n\n    return () => {\n      window.removeEventListener(\"resize\", checkWindowSize);\n    };\n  }, []);\n\n  return (\n    <Box backgroundColor=\"#E9EAEC\" minHeight=\"100vh\">\n      <ComponentNavbar isOpened={isOpened} setIsOpened={setIsOpened} />\n      <div style={{ display: \"flex\" }}>\n        <AsideLeft isOpened={isOpened} />\n        <Box\n          flex={1}\n          sx={{\n            marginLeft: isOpened ? \"200px\" : \"0px\",\n            transition: \"margin-left 0.3s ease\",\n            mt: \"56px\",\n          }}\n        >\n          <main style={{ flex: 1 }}>This is main</main>\n        </Box>\n      </div>\n    </Box>\n  );\n};\nexport default Dashboard; \n //Top Navbar / NavbarComponent.jsx\n//======================================\nimport { Box, Stack, Typography } from \"@mui/material\";\nimport MenuOpenIcon from \"@mui/icons-material/MenuOpen\";\nimport Image from \"next/image\";\nimport Link from \"next/link\";\n\nconst ComponentNavbar = ({ isOpened, setIsOpened }) => {\n  return (\n    <Stack\n      direction=\"row\"\n      justifyContent=\"space-between\"\n      alignItems=\"center\"\n      gap={4}\n      px={{ xs: 2, md: 6, lg: 8 }}\n      sx={{\n        height: \"56px\",\n        boxShadow: \"0px 1px 4px #DDE0E4\",\n        backgroundColor: \"white\",\n        borderBottom: \"2px solid #efefef\",\n        position: \"fixed\",\n        zIndex: 100,\n        width: \"100vw\",\n      }}\n    >\n      <Link href=\"/\">\n        <Stack direction=\"row\" gap={1} alignItems=\"center\">\n          <Image\n            style={{ borderRadius: \"8px\" }}\n            alt=\"logo\"\n            src=\"/logo1.png\"\n            width={40}\n            height={40}\n          />\n          <Typography variant=\"h5\" fontWeight={700}>\n            REUI\n          </Typography>\n        </Stack>\n      </Link>\n\n      <Box\n        onClick={() => setIsOpened(!isOpened)}\n        sx={{\n          cursor: \"pointer\",\n          transform: `rotate(${isOpened ? 0 : 180}deg)`,\n          transition: \"transform 0.5s ease\",\n          gap:\"12px\",\n          backgroundColor: \"#E9EAEC\",\n          padding: \"8px\",\n          borderRadius: \"50%\",\n        }}\n      >\n        <MenuOpenIcon fontSize=\"medium\" />\n      </Box>\n    </Stack>\n  );\n};\nexport default ComponentNavbar; \n //Aside / sidebar AsideLeft.jsx\n//==================================\nimport { Box } from \"@mui/material\";\nimport SidebarContent from \"./SidebarContent\";\n\nconst AsideLeft = ({isOpened}) => {\n  return (\n    <Box\n          sx={{\n            marginLeft: isOpened ? \"0px\" : \"-200px\",\n            width: \"200px\",\n            height: \"calc(100vh - 56px)\",\n            transition: \"margin-left 0.3s ease\",\n            position: \"fixed\",\n            backgroundColor: \"white\",\n            zIndex: 100,\n            mt: \"56px\",\n          }}\n        >\n          <aside>\n            <SidebarContent />\n          </aside>\n        </Box>\n  );\n};\nexport default AsideLeft; \n //SidebarComponent.jsx\n//==========================\nimport { componentsData } from '@/data/componentData';\nimport { Box, Typography } from '@mui/material';\nimport Link from 'next/link';\nimport { useParams } from 'next/navigation';\n\nconst SidebarContent = () => {\n  const {group} = useParams();\n  const uniqueCategory = componentsData.reduce((acc, component) => {\n    if(!acc.some((item) => item.category ===component.category)){\n      acc.push(component);\n    }\n    return acc;\n  },[]);\n\n  return (\n    <Box my={2}>\n        <Link href=\"/components\">\n        <Typography  px={4} fontWeight={700}>Components</Typography>\n        </Link>\n      <Box>\n      {uniqueCategory.map((item, idx) => {\n        const isActive = group === item.category;\n        return (\n          <Link key={idx} href={`/components/${item.category}`}>\n          <Box  px={5} py={1.5} mt={1} sx={{\n            textTransform: \"capitalize\",\n            transition: \"background-color 0.3s ease\",\n            \"&:hover\":{\n              backgroundColor: \"#efefef\"\n            },\n            borderRight: isActive ? \"2px solid #3E4AA5\" : \"\",\n            backgroundColor: isActive ? \"#D9E5FE\" : \"\",\n            color: isActive ? \"primary.main\" : \"\",\n            fontWeight:isActive ? \"medium\" : \"\"\n          }}>          \n              {item.category}       \n          </Box>\n          </Link> \n        );\n      })};     \n    </Box>\n    </Box>\n  );\n};\n\nexport default SidebarContent;",
    vanillaCode: "<Tabs\n  value={tabIndexes[idx]}\n  onChange={(event, newTabIndex) =>\n    handleTabChange(event, newTabIndex, idx)\n  }\n  aria-label=\"component tabs\"\n  sx={{ backgroundColor: \"#F0F1FF\", fontWeight: 'bold' }}\n>\n  <Tab label=\"Preview\" />\n</Tabs>",
  },
];
