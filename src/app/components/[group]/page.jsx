"use client";
import { componentsData } from "@/data/componentData";
import { Box, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import CategoryHeader from "pages/groupPage/Header";
import AsideRight from "pages/groupPage/asideRight";
import { useEffect, useRef, useState } from "react";
import ComponentDetails from "pages/groupPage/ComponentDetails/componentDetails";


const ComponentPage = ({ params }) => {
  const category = params.group;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const categoryItems = componentsData?.filter(
    (item) => item.category === category
  ) || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (sectionRefs.current) {
        sectionRefs.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  const handleClick = (uid) => {
    const section = document.getElementById(uid);

    if (section) {
      const navbarHeight = 48;
      section.scrollIntoView({ behavior: "smooth", block: "center" });

      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="min-h-[calc(100vh - 48px)]">
      <Stack direction="row" gap={2} margin="12px">
        <Box borderRadius={1} flex={1} marginRight={{ md: "212px" }}>
          <main>
            <CategoryHeader category={category} />
            <Stack direction="column">
              {categoryItems.map((item, idx) => (
                <Box
                  key={idx}
                  id={item.uid}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  borderRadius={1}
                  p={4}
                  backgroundColor="white"
                  mb={2}
                >
                  <Box>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body1" mb={2}>
                      {item.description}
                    </Typography>

                    <ComponentDetails item={item} categoryItems={categoryItems} idx={idx}/>

                  </Box>
                </Box>
              ))}
            </Stack>
            <Box></Box>
          </main>
        </Box>

        {/* Right Aside */}
        <Box
          backgroundColor="white"
          py={4}
          px={2}
          borderRadius={1}
          width="200px"
          display={{ xs: "none", md: "block" }}
          position="fixed"
          top="48px"
          mt="12px"
          right="12px"
          maxHeight="calc(100vh - 48px)"
          style={{
            overflowY: "auto",
          }}
        >
          <aside>
            <AsideRight
              items={categoryItems}
              activeIndex={activeIndex}
              handleClick={handleClick}
            />
          </aside>
        </Box>
      </Stack>
    </Box>
  );
};

export default ComponentPage;
